import { Test, TestingModule } from '@nestjs/testing';
import { Provider } from '@nestjs/common';

// UseCase
import { SampleUseCase } from './sample.usecase';

// Providers
import { SampleProviderContract } from 'providers/sample-provider/sample.contract';
import { SampleProviderFake } from 'providers/sample-provider/sample.provider.fake';

// Shared
import { Ok } from 'shared/config/neverthrow.config';

describe('SampleUseCase', () => {
  let sampleUseCase: SampleUseCase;

  beforeEach(async () => {
    const SampleProviderInjection: Provider = {
      provide: SampleProviderContract,
      useClass: SampleProviderFake,
    };

    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [SampleUseCase, SampleProviderInjection],
    }).compile();

    sampleUseCase = moduleRef.get<SampleUseCase>(SampleUseCase);
  });

  it('should return "Hello World!"', async () => {
    const result = await sampleUseCase.execute();
    expect(result.isOk()).toBe(true);
    expect(result._unsafeUnwrap()).toEqual('Hello World!');
  });
});
