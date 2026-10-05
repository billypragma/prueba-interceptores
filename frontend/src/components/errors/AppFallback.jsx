// src/components/errors/AppFallback.jsx

function AppFallback({error}) {
    return (
        <div
            role="alert"
            style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
                padding: "2rem",
                textAlign: "center"

            }} 
        >
            <h1>Algo salio mal</h1>
            <p>Ocurrio un error inesperado. Intenta recargar la página.</p>

            {import.meta.env.DEV && (
                <pre style={{ fontSize: 12, whiteSpace: "pre-wrap"}}>
                {error?.message}
                </pre>
            )}
            <button onClick={() => window.location.reload()}>Recargar página</button>

        </div>
    );
}
export default AppFallback;