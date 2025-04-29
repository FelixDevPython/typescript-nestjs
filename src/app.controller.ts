import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { Person } from './interface/person.interface';

@Controller('persons')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAll(): Person[] {
    return this.appService.getAll();
  }

  @Post()
  addPerson(@Body() person: Person): Person[] {
    return this.appService.addPerson(person);
  }

  @Delete(':email')
  deletePerson(@Param('email') email: string): Person[] {
    return this.appService.deletePerson(email);
  }

  @Put(':email')
  editPerson(@Param('email') email: string, @Body() newData: Partial<Person>): Person | string {
    return this.appService.editPerson(email, newData);
  }
}

