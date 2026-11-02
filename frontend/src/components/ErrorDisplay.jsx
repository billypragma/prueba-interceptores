/**
 * Muestra errores de la API de manera clara, con contexto y opción de cerrar.
 */
export function ErrorDisplay({ error, onClose }) {
  if (!error) return null;

  const isServerError = Number(error.statusCode) >= 500;
  const borderColor = isServerError ? '#f87171' : '#f59e0b';
  const backgroundColor = isServerError ? '#3f1d1d' : '#3b2a1d';
  const textColor = '#fef2f2';

  const details = [
    error.errorFamily && { label: 'Familia', value: error.errorFamily },
    error.name && { label: 'Tipo', value: error.name },
    error.path && { label: 'Ruta', value: error.path },
    error.timestamp && { label: 'Hora', value: new Date(error.timestamp).toLocaleString() }
  ].filter(Boolean);

  return (
    <div
      role="alert"
      style={{
        border: `1px solid ${borderColor}`,
        borderRadius: '8px',
        padding: '1rem',
        margin: '1rem 0',
        backgroundColor,
        color: textColor,
        boxShadow: '0 2px 8px rgba(0,0,0,0.18)'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '1.2rem' }}>❌</span>
            <strong style={{ fontSize: '1rem' }}>Error {error.statusCode || 'HTTP'}</strong>
          </div>
          <p style={{ margin: '0.25rem 0', fontWeight: 600, fontSize: '1rem' }}>{error.message}</p>
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

      {details.length > 0 && (
        <ul style={{ margin: '0.75rem 0 0', paddingLeft: '1.1rem', fontSize: '0.88rem', opacity: 0.95 }}>
          {details.map(({ label, value }) => (
            <li key={label}>
              <strong>{label}:</strong> {value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

