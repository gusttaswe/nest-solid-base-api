import { Module } from '@nestjs/common';

// Modules
import { SampleModule } from 'modules/sample/sample.module';

@Module({
  imports: [SampleModule],
})
export class AppModule {}
