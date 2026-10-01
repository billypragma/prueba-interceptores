/**
 * Middleware global para manejo de errores
 * Mapea excepciones personalizadas a respuestas HTTP apropiadas
 */
export const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const errorFamily = err.errorFamily || '5xx - Server Error';
  const timestamp = new Date().toISOString();

  const errorResponse = {
    statusCode,
    errorFamily,
    name: err.name || 'Error',
    message: err.message || 'Error desconocido',
    timestamp,
    path: req.originalUrl
  };

  // En desarrollo, incluir stack trace
  if (process.env.NODE_ENV === 'development') {
    errorResponse.stack = err.stack;
  }

  console.error(`[ERROR] ${statusCode} - ${err.name}: ${err.message}`);
  res.status(statusCode).json(errorResponse);
};
