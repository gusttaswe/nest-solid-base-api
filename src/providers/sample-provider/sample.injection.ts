import { Provider } from '@nestjs/common';
import { SampleProvider } from './sample.provider';
import { SampleProviderContract } from './sample.contract';

export const SampleProviderInjection: Provider = {
  provide: SampleProviderContract,
  useClass: SampleProvider,
};
