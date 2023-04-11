export class ApplicationError extends Error {
  public code: string;
  public status?: string;
  constructor(error: HttpCustomError) {
    super(error.message);

    this.code = error.code;
    this.status = error.status;
  }
}

export type HttpCustomError = {
  code: string;
  message: string;
  status?: string;
};
