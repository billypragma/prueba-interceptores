/**
 * COMPONENTE: ErrorDisplay
 * 
 * Tu tarea: Crear un componente que muestre errores HTTP de manera visual
 * 
 * Props que recibirá:
 * - error: Objeto con estructura {
 *     statusCode: 401,
 *     errorFamily: "4xx - Client Error",
 *     name: "AuthenticationException",
 *     message: "Credenciales inválidas",
 *     path: "/api/auth/login",
 *     timestamp: "2024..."
 *   }
 * - onClose: Función para cerrar/limpiar el error
 * 
 * Consideraciones:
 * 1. ¿Qué mostrar del error?
 * 2. ¿Cómo diferenciar visualmente por statusCode?
 * 3. ¿Cómo mostrar información técnica sin abrumar al usuario?
 * 4. ¿Permitir cerrar el mensaje de error?
 * 5. ¿Usar colores diferentes para 4xx y 5xx?
 * 
 * Estructura sugerida:
 * - Badge con statusCode
 * - Icono de error (❌)
 * - Mensaje principal (message)
 * - Detalles opcionales (name, path, timestamp)
 * - Botón para cerrar
 */
export function ErrorDisplay({ error, onClose }) {
  if (!error) return null;

  // TODO: Implementar componente
  // Por ahora solo muestra un placeholder
  return (
    <div style={{
      border: '1px solid #cc0000',
      borderRadius: '4px',
      padding: '1em',
      margin: '1em 0',
      backgroundColor: '#4a1a1a',
      color: '#ff6b6b'
    }}>
      <strong>❌ Error {error.statusCode}</strong>
      <p>{error.message}</p>
      {/* 
        TODO: Mostrar más detalles
        - error.errorFamily
        - error.name
        - error.path
        - Botón onClose si existe
      */}
    </div>
  );
}

