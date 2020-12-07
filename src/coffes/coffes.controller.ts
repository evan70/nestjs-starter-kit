import { Controller, Get, Param } from '@nestjs/common';

@Controller(`coffes`)
export class CoffesController {
  @Get()
  findAll() {
    return `coffe controller list`;
  }
  @Get(`:id`)
  findOne(@Param(`id`) id: string) {
    return `Hello, my lovely ${id} coffe`;
  }  
}