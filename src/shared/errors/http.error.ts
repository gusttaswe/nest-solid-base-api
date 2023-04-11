/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  HttpStatus,
  ServiceUnavailableException,
  HttpException,
} from '@nestjs/common';
import { HttpCustomError } from './application.error';

export const httpExceptionHandler = (error: HttpCustomError): HttpException => {
  if (!error.code || !HttpStatus[error.status])
    return new ServiceUnavailableException();

  return new HttpException(
    { message: error.message, code: error.code },
    HttpStatus[error.status],
  );
};
