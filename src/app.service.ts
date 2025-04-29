// src/app.service.ts
import { Injectable } from '@nestjs/common';
import { Person } from './interface/person.interface';

@Injectable()
export class AppService {
  private persons: Person[] = [
    { name: 'Adrian', email: 'adrian@adrian.com', age: 30 },
    { name: 'Sofia', email: 'sofia@ejemplo.com', age: 25 },
  ];

  getAll(): Person[] {
    return this.persons;
  }

  addPerson(person: Person): Person[] {
    this.persons.push(person);
    return this.persons;
  }

  deletePerson(email: string): Person[] {
    this.persons = this.persons.filter(p => p.email !== email);
    return this.persons;
  }

  editPerson(email: string, newData: Partial<Person>): Person | string {
    const person = this.persons.find(p => p.email === email);
    if (!person) return 'Persona no encontrada';

    Object.assign(person, newData);
    return person;
  }
}
