import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import {
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Response } from 'express';

// Module
import { SampleUseCase } from './sample.usecase';
import { SampleErrorCodes } from './sample.error';

// Shared
import { httpExceptionHandler } from 'shared/errors/http.error';

@ApiTags('Sample')
@Controller()
export class SampleController {
  constructor(private readonly sampleUseCase: SampleUseCase) {}

  @Get()
  @ApiOperation({
    operationId: 'getHello',
    summary: 'Hello World',
    description: 'Display a hello world message.',
  })
  @ApiOkResponse({ description: 'Hello World!' })
  @ApiResponse({
    status: HttpStatus[SampleErrorCodes.UNKNOWN.status],
    description: SampleErrorCodes.UNKNOWN.message,
  })
  async getHello(@Res() res: Response) {
    const result = await this.sampleUseCase.execute();

    if (result.isErr()) throw httpExceptionHandler(result.error);

    return res.status(HttpStatus.OK).send(result.value);
  }
}
