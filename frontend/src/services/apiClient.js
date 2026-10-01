const API_BASE_URL = 'http://localhost:3000/api';

/**
 * Cliente HTTP básico para comunicación con el backend
 * 
 * TU TAREA: Agregar manejo de errores aquí
 * 
 * Considera:
 * - ¿Qué pasa si la respuesta no es OK (response.ok === false)?
 * - ¿Cómo capturar y procesar el error?
 * - ¿Qué información del error es útil para mostrar al usuario?
 */
export const apiClient = {
  async request(method, endpoint, data = null, headers = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    const token = localStorage.getItem('auth_token');

    const config = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...(token && { 'Authorization': `Bearer ${token}` }),
        ...headers
      }
    };

    if (data) {
      config.body = JSON.stringify(data);
    }

    try {
      const response = await fetch(url, config);
      const responseData = await response.json();

      // TODO: Implementar manejo de errores
      // Si response.ok es false, significa error HTTP
      // Deberías procesar responseData y lanzar un error apropiado
      
      return responseData;
    } catch (error) {
      // TODO: Manejar errores de red y otros errores
      console.error(`[API] ${method} ${endpoint}:`, error);
      throw error;
    }
  },

  get(endpoint, headers) {
    return this.request('GET', endpoint, null, headers);
  },

  post(endpoint, data, headers) {
    return this.request('POST', endpoint, data, headers);
  }
};

