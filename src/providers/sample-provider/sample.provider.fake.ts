import { Injectable } from '@nestjs/common';
import { Ok, Result } from 'shared/config/neverthrow.config';

import { SampleProviderContract } from './sample.contract';

@Injectable()
export class SampleProviderFake implements SampleProviderContract {
  getHello(): Result<string, Error> {
    return new Ok('Hello World!');
  }
}
