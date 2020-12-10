import { Body, Controller, Get, Param, Post, Patch, Delete } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll() {
    return 'This return all coffees controller list';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This return ${id} coffee`;
  }

  @Post()
  create(@Body('brand') body) {
    return body;
    //return 'This create brand coffee'
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `This update - patch ${id} coffee`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This remove - delete ${id} coffee`;
  }
}