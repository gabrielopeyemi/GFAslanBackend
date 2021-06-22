import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('/transactions')
export class EventsController {
  
  @Get()
  findAll() {
    return [
      {id: 1, name: 'Gabriel;'},
      {id: 2, name: 'Opeyemi;'}
    ]
  }

  @Get(':id')
  findOne(@Param('id') id) {
    return { id: 1, name: 'Gabriel;' };
  }

  @Post()
  create(@Body() input) {
    let me: any = {status: 1}
    return input;
  }

  @Patch()
  update(@Param('id') id) { }

  @Delete()
  remove(@Param('id') id)  { }
  
}
