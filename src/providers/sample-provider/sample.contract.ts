import { Result } from 'shared/config/neverthrow.config';

export abstract class SampleProviderContract {
  abstract getHello(): Result<string, Error>;
}
