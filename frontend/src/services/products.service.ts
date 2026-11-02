// products.service.ts

import { httpClient } from "./httpClient.ts";


export const ProductsService = {
  getAll: async () => {
    // httpClient ya sabe que la URL base es 'https://localhost:3000/api'
    // Solo le pasamos el segmento final
    return await httpClient.get('/products');
  },
  getById: async (id: number) => { 
    return await httpClient.get(`/products/${id}`);
  }
}