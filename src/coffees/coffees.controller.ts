import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  Res
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll(@Res() response) {
    response.status(200).send('coffee All controller list');
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Hello, my lovely ${id} coffee`;
  }

  @Post()
  @HttpCode(HttpStatus.GONE)
  create(@Body('name') body) {
    return body;
  }

}