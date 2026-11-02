// src/utilities/get-validation-error.ts
// Usamos Record<string | number, string> para soportar tanto números (404) como strings ('ERR_NETWORK')

export const getValidationError = (errorCode: string | number): string => {
    const codeMatcher: Record<string | number, string> = { 
        // Errores de Red de Axios
    ERR_NETWORK: 'Error de red. Verifica tu conexión a internet.',
    ERR_TIMEOUT: 'La petición tardó demasiado, por favor intenta de nuevo.',
    ERR_BAD_REQUEST: 'Petición malformada.', // Axios suele usar este para los 400s a veces

    // Errores HTTP de Backend
    400: 'La petición es incorrecta. Revisa los datos enviados.',
    401: 'Tu sesión ha expirado, vuelve a iniciar sesión.',
    403: 'No tienes permisos para realizar esta acción.',
    404: 'El recurso que buscas no existe.',
    422: 'Datos de validación incorrectos.',
    }
    // Retornamos el mensaje que coincida, o un mensaje genérico por defecto
    return codeMatcher[errorCode] || 'Ocurrió un error inesperado al procesar la solicitud.';
}