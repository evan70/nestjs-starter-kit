import { Controller, Get, Param, Post, Body } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll() {
    return `coffee controller list`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Hello, my lovely ${id} coffee`;
  }

  @Post('name')
  create(@Body() body) {
    return body;
  }

}
