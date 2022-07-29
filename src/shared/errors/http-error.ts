class HttpError {
  public message: string;
  public statusCode: number;
  public errors: object[];

  constructor(message: string, errors: object[], statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
    this.errors = errors;
  }
}

export default HttpError;
