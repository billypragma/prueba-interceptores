export class PaymentException extends Error {
  constructor(message = 'Error en el procesamiento de pago') {
    super(message);
    this.name = 'PaymentException';
    this.statusCode = 402;
    this.errorFamily = '4xx - Client Error';
  }
}
