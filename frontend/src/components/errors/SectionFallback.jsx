// src/components/errors/SectionFallback.jsx

function SectionFallback({name, error, onRetry}) { 
    return (
        <div role="alert" style={ {padding: "1rem", border: "1px solid #e5484d", borderRadius: 8 }}>
            <p>
              <strong>No pudimos cargar{name ? ` "${name}"` : " esta sección"}.</strong>
            </p>

            {/** Solo en desarrollo mostramos el detalle tecnico del error |*/}
            {import.meta.env.DEV && (
                <pre style={{ fontSize: 12, whiteSpace: "pre-wrap"}}>
                    {error?.message}
                </pre>
            )}
            <button onClick={onRetry}> Reintentar </button>

        </div>
    );

}
export default SectionFallback;