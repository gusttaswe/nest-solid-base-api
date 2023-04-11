import { ApplicationError } from 'shared/errors/application.error';

export class SampleError extends ApplicationError {
  static UnknownSampleError() {
    return new SampleError(SampleErrorCodes.UNKNOWN);
  }
}

export const SampleErrorCodes = {
  UNKNOWN: {
    code: '@order/unknown-error',
    message: 'Something went wrong. Unable to Hello World!',
    status: 'BAD_REQUEST',
  },
};
