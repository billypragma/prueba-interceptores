import { useState } from 'react';
import { LoginSection } from './components/LoginSection';
import { ProductsSection } from './components/ProductsSection';
import { PaymentSection } from './components/PaymentSection';

function App() {
  const [tab, setTab] = useState('home');

  return (
    <div className="container">
      <div style={{ textAlign: 'center', marginBottom: '2em' }}>
        <h1>🛒 eCommerce - Manejo de Errores en Frontend</h1>
        <p style={{ color: '#aaa', marginTop: '0.5em' }}>
          Tu reto: Implementar la estrategia de manejo de errores en React
        </p>
      </div>

      <div style={{ marginBottom: '2em'}}>
        <nav style={{ display: 'flex', gap: '1em', borderBottom: '1px solid #444', color: '#fff', paddingBottom: '1em' }}>
          <button 
            onClick={() => setTab('home')}
            style={{ 
              background: tab === 'home' ? '#646cff' : 'transparent',
              border: tab === 'home' ? '1px solid #646cff' : 'none',
              color: '#fff'
            }}
          >
            Inicio
          </button>
          <button 
            onClick={() => setTab('auth')}
            style={{ 
              background: tab === 'auth' ? '#646cff' : 'transparent',
              border: tab === 'auth' ? '1px solid #646cff' : 'none',
              color: '#fff'

            }}
          >
            Autenticación
          </button>
          <button 
            onClick={() => setTab('products')}
            style={{ 
              background: tab === 'products' ? '#646cff' : 'transparent',
              border: tab === 'products' ? '1px solid #646cff' : 'none',
              color: '#fff'
           
            }}
          >
            Productos
          </button>
          <button 
            onClick={() => setTab('payments')}
            style={{ 
              background: tab === 'payments' ? '#646cff' : 'transparent',
              border: tab === 'payments' ? '1px solid #646cff' : 'none',
              color: '#fff'
            }}
          >
            Pagos
          </button>
        </nav>
      </div>

      <div className="grid">
        {tab === 'home' && (
          <div className="card" style={{ gridColumn: '1 / -1' }}>
            <h2>📖 Tu Reto</h2>
            <p>
              El backend está completo y funcionando. Tu tarea es implementar una <strong>estrategia de manejo de errores</strong> en el frontend React.
            </p>
            
            <h3>¿Qué debes hacer?</h3>
            <ul style={{ marginLeft: '1.5em', marginTop: '0.5em' }}>
              <li>Crear componentes para mostrar errores</li>
              <li>Capturar errores HTTP en cada sección</li>
              <li>Mostrar mensajes claros al usuario</li>
              <li>Manejar estados (loading, success, error)</li>
              <li>Clasificar errores por tipo (2xx, 4xx, 5xx)</li>
            </ul>

            <h3 style={{ marginTop: '1em' }}>Secciones a completar:</h3>
            <ul style={{ marginLeft: '1.5em', marginTop: '0.5em' }}>
              <li><strong>Autenticación:</strong> Maneja errores 401</li>
              <li><strong>Productos:</strong> Maneja errores 404</li>
              <li><strong>Pagos:</strong> Maneja errores 402</li>
            </ul>

            <h3 style={{ marginTop: '1em' }}>Backend disponible:</h3>
            <p>El servidor corre en <code>http://localhost:3000/api</code></p>
            <p>Ya tiene todos los endpoints, excepciones y manejo global de errores.</p>

            <h3 style={{ marginTop: '1em' }}>📚 Referencia:</h3>
            <p>Ver <code>GUIA_IMPLEMENTACION.md</code> para pistas sobre QUÉ hacer (sin soluciones).</p>
          </div>
        )}

        {tab === 'auth' && <LoginSection />}
        {tab === 'products' && <ProductsSection />}
        {tab === 'payments' && <PaymentSection />}
      </div>
    </div>
  );
}

export default App;
