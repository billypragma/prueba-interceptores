/**
 * COMPONENTE: SuccessDisplay
 * 
 * Tu tarea: Crear un componente que muestre respuestas exitosas (2xx)
 * 
 * Props que recibirá:
 * - data: Objeto con estructura {
 *     statusCode: 200,
 *     message: "Autenticación exitosa",
 *     data: { ... }  // información específica
 *   }
 * - onClose: Función para cerrar/limpiar el mensaje
 * 
 * Consideraciones:
 * 1. ¿Qué mostrar del mensaje?
 * 2. ¿Cómo mostrar los datos sin hacer la interfaz confusa?
 * 3. ¿Usar color verde para diferenciar de errores?
 * 4. ¿Expandible con details/summary para ver datos?
 * 5. ¿Auto-cerrar después de 3-5 segundos?
 * 
 * Estructura sugerida:
 * - Icono de éxito (✓)
 * - Mensaje principal (message)
 * - Badge verde con "200 OK"
 * - Detalles del dato (en formato JSON o tabla)
 * - Botón para cerrar
 */
export function SuccessDisplay({ data, onClose }) {
  if (!data) return null;

  // TODO: Implementar componente
  // Por ahora solo muestra un placeholder
  return (
    <div style={{
      border: '1px solid #00cc00',
      borderRadius: '4px',
      padding: '1em',
      margin: '1em 0',
      backgroundColor: '#1a4a1a',
      color: '#6bff6b'
    }}>
      <strong>✓ Éxito</strong>
      <p>{data.message}</p>
      {/* 
        TODO: Mostrar datos
        - data.statusCode con badge
        - data.data con expand/collapse
        - Botón onClose si existe
      */}
    </div>
  );
}

