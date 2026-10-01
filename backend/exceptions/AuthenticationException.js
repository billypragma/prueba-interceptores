export class AuthenticationException extends Error {
  constructor(message = 'Error de autenticación') {
    super(message);
    this.name = 'AuthenticationException';
    this.statusCode = 401;
    this.errorFamily = '4xx - Client Error';
  }
}
