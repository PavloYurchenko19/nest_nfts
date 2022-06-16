import {
  Controller,
  DefaultValuePipe,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { NftsService } from './nfts.service';

@Controller('nfts')
export class NftsController {
  constructor(private nftsService: NftsService) {}

  @Get(':token')
  @HttpCode(HttpStatus.OK)
  getTokens(
    @Param('token') token: string,
    @Query('name') name = '',
    @Query('sort') sort = 'asc',
    @Query('page') page = 1,
  ) {
    return this.nftsService.getNfts(token, name, sort, page);
  }
}
