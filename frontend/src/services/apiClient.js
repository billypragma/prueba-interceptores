const API_BASE_URL = 'http://localhost:3000/api';

const normalizeApiError = (payload, fallbackMessage = 'Error inesperado') => {
  const errorPayload = payload && typeof payload === 'object' ? payload : {};

  return {
    statusCode: errorPayload.statusCode || 0,
    errorFamily: errorPayload.errorFamily || (
      errorPayload.statusCode >= 500 ? '5xx - Server Error' :
      errorPayload.statusCode ? '4xx - Client Error' : 'Network Error'
    ),
    name: errorPayload.name || 'ApiError',
    message: errorPayload.message || fallbackMessage,
    timestamp: errorPayload.timestamp || new Date().toISOString(),
    path: errorPayload.path || null,
    stack: errorPayload.stack || null,
    details: errorPayload.details || null
  };
};

export const apiClient = {
  async request(method, endpoint, data = null, headers = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    const token = localStorage.getItem('auth_token');

    const config = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
        ...headers
      }
    };

    if (data !== null && data !== undefined && method.toUpperCase() !== 'GET') {
      config.body = JSON.stringify(data);
    }

    try {
      const response = await fetch(url, config);
      const contentType = response.headers.get('content-type') || '';
      let responseData = null;

      if (contentType.includes('application/json')) {
        responseData = await response.json();
      } else {
        responseData = await response.text();
      }

      if (!response.ok) {
        const normalizedError = normalizeApiError(
          responseData,
          `La solicitud a ${endpoint} falló con código ${response.status}`
        );
        throw normalizedError;
      }

      return responseData;
    } catch (error) {
      if (error && typeof error === 'object' && 'statusCode' in error) {
        throw error;
      }

      console.error(`[API] ${method} ${endpoint}:`, error);
      throw normalizeApiError({
        statusCode: 0,
        errorFamily: 'Network Error',
        name: 'NetworkError',
        message: 'No se pudo conectar con el servidor. Verifica que el backend esté corriendo.',
        path: endpoint,
        timestamp: new Date().toISOString()
      });
    }
  },

  get(endpoint, headers) {
    return this.request('GET', endpoint, null, headers);
  },

  post(endpoint, data, headers) {
    return this.request('POST', endpoint, data, headers);
  }
};

