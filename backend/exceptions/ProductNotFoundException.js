export class ProductNotFoundException extends Error {
  constructor(message = 'Producto no encontrado') {
    super(message);
    this.name = 'ProductNotFoundException';
    this.statusCode = 404;
    this.errorFamily = '4xx - Client Error';
  }
}
