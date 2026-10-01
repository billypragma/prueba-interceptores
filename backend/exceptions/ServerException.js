export class ServerException extends Error {
  constructor(message = 'Error interno del servidor') {
    super(message);
    this.name = 'ServerException';
    this.statusCode = 500;
    this.errorFamily = '5xx - Server Error';
  }
}
