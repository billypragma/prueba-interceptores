// src/services/errorLogger.js

/**
 * Punto único para reportar errores de la app.
 * Hoy escribe en consola; mañana puede enviar a Sentry, Datadog, etc.
 * sin tocar ningún componente.
 */

export function logError (error, info = {}) {
    const { componentStack, section } = info; 

    console.error(
    `[ErrorBoundary]${section ? ` (${section})` : ""}`,
    error
    );

    if (componentStack) {
        console.error("componentStack:", componentStack);
    }
    
} 