import { useState } from 'react';
import { logError } from '../services/errorLogger';
import { apiClient } from '../services/apiClient';

/**
 * COMPONENTE: ProductsSection
 * 
 * Tu tarea:
 * 1. Crear estados para: productId, loading, error, success, products
 * 2. Crear función handleGetProducts que llama a apiClient.get('/products')
 * 3. Crear función handleGetProduct que llama a apiClient.get(`/products/${id}`)
 * 4. Capturar errores (código 404 cuando producto no existe)
 * 5. Mostrar lista de productos
 * 6. Mostrar errores cuando sea necesario
 * 
 * Errores esperados:
 * - 404: Producto no existe (error del cliente)
 * - 200: Producto encontrado (éxito)
 * 
 * Estructura del error 404:
 * {
 *   statusCode: 404,
 *   errorFamily: "4xx - Client Error",
 *   name: "ProductNotFoundException",
 *   message: "Producto con ID XXX no encontrado"
 * }
 */
export function ProductsSection() {
  const [productId, setProductId] = useState('');
  
  // TODO: Agregar estados faltantes
  // const [error, setError] = useState(null);
  // const [success, setSuccess] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const [products, setProducts] = useState([]);

  const handleGetProducts = async () => {
    // TODO: Implementar
    // 1. Mostrar loading
    // 2. Llamar apiClient.get('/products')
    // 3. Guardar en estado products
    // 4. Capturar errores
  };

  const handleGetProduct = async (e) => {
    e.preventDefault();
    
    // TODO: Implementar
    // 1. Validar que productId no esté vacío
    // 2. Mostrar loading
    // 3. Llamar apiClient.get(`/products/${productId}`)
    // 4. Mostrar éxito con datos del producto
    // 5. Capturar error 404
  };

  const handleCheckStock = async (id) => {
    // TODO: Implementar
    // Llamar a apiClient.get(`/products/${id}/check-stock`)
  };

  return (
    <div className="card">
      <h2>📦 Productos</h2>
      
      <div>
        <button onClick={handleGetProducts}>
          Listar Todos
        </button>
      </div>

      <form onSubmit={handleGetProduct} style={{ marginTop: '1em' }}>
        <input
          type="number"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
          placeholder="ID del producto"
          min="1"
        />
        <button type="submit">
          Buscar por ID
        </button>
      </form>

      {/* TODO: Mostrar tabla de productos */}
      {/* TODO: Mostrar errores */}
      {/* TODO: Mostrar éxito */}
    </div>
  );
}

