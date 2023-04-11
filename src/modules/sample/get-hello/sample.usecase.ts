import { Injectable } from '@nestjs/common';
import { Err, Ok, Result } from 'shared/config/neverthrow.config';

// Module
import { SampleError } from './sample.error';

// Interfaces & Types
import { UseCase } from 'shared/config/usecase.config';
import { SampleProviderContract } from 'providers/sample-provider/sample.contract';

@Injectable()
export class SampleUseCase implements UseCase<null, string, SampleError> {
  constructor(private readonly sampleProvider: SampleProviderContract) {}

  public async execute(): Promise<Result<string, SampleError>> {
    const hello = this.sampleProvider.getHello();
    if (hello.isErr()) return new Err(SampleError.UnknownSampleError());

    return new Ok(hello.value);
  }
}
