import { Module } from '@nestjs/common';

// Controller
import { SampleController } from './get-hello/sample.controller';

// Providers
import { SampleProviderInjection } from 'providers/sample-provider/sample.injection';
import { SampleUseCase } from './get-hello/sample.usecase';

@Module({
  controllers: [SampleController],
  providers: [SampleUseCase, SampleProviderInjection],
})
export class SampleModule {}
