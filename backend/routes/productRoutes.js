import express from 'express';
import { ProductNotFoundException } from '../exceptions/ProductNotFoundException.js';
import { ServerException } from '../exceptions/ServerException.js';

export const router = express.Router();

// Base de datos simulada
const products = [
  { id: 1, name: 'Laptop', price: 999.99, stock: 5 },
  { id: 2, name: 'Mouse', price: 29.99, stock: 50 },
  { id: 3, name: 'Teclado', price: 79.99, stock: 0 }
];

// GET /api/products - Lista todos los productos
router.get('/', (req, res) => {
  res.status(200).json({
    statusCode: 200,
    message: 'Productos obtenidos exitosamente',
    data: products
  });
});

// GET /api/products/:id - Obtiene un producto por ID
router.get('/:id', (req, res, next) => {
  const { id } = req.params;

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return next(new ProductNotFoundException(`Producto con ID ${id} no encontrado`));
  }

  res.status(200).json({
    statusCode: 200,
    message: 'Producto obtenido exitosamente',
    data: product
  });
});

// GET /api/products/:id/check-stock - Verifica disponibilidad
router.get('/:id/check-stock', (req, res, next) => {
  const { id } = req.params;

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return next(new ProductNotFoundException(`Producto con ID ${id} no encontrado`));
  }

  if (product.stock === 0) {
    return res.status(200).json({
      statusCode: 200,
      message: 'Producto sin stock',
      data: {
        id: product.id,
        name: product.name,
        available: false,
        stock: 0
      }
    });
  }

  res.status(200).json({
    statusCode: 200,
    message: 'Producto disponible',
    data: {
      id: product.id,
      name: product.name,
      available: true,
      stock: product.stock
    }
  });
});

export { router as productRoutes };
