/**
 * Muestra respuestas exitosas con el código HTTP y detalles opcionales.
 */
export function SuccessDisplay({ data, onClose }) {
  if (!data) return null;

  const payload = data?.data && typeof data.data === 'object' ? data.data : null;

  return (
    <div
      role="status"
      style={{
        border: '1px solid #4ade80',
        borderRadius: '8px',
        padding: '1rem',
        margin: '1rem 0',
        backgroundColor: '#183a2a',
        color: '#dcfce7',
        boxShadow: '0 2px 8px rgba(0,0,0,0.12)'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '1.2rem' }}>✅</span>
            <strong style={{ fontSize: '1rem' }}>Éxito</strong>
            <span
              style={{
                background: '#14532d',
                color: '#dcfce7',
                borderRadius: '999px',
                padding: '0.15rem 0.5rem',
                fontSize: '0.8rem',
                fontWeight: 700
              }}
            >
              {data.statusCode || 200} OK
            </span>
          </div>
          <p style={{ margin: '0.25rem 0', fontWeight: 600 }}>{data.message}</p>
        </div>

        {onClose && (
          <button
            type="button"
            onClick={onClose}
            style={{
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.3)',
              color: '#fff',
              borderRadius: '4px',
              cursor: 'pointer',
              padding: '0.35rem 0.6rem'
            }}
          >
            Cerrar
          </button>
        )}
      </div>

      {payload && (
        <details style={{ marginTop: '0.75rem' }} open>
          <summary style={{ cursor: 'pointer', fontWeight: 600 }}>Ver detalles</summary>
          <pre
            style={{
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
              background: 'rgba(0,0,0,0.18)',
              borderRadius: '6px',
              padding: '0.75rem',
              marginTop: '0.5rem',
              fontSize: '0.8rem'
            }}
          >
            {JSON.stringify(payload, null, 2)}
          </pre>
        </details>
      )}
    </div>
  );
}

