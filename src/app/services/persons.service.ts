import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // this line makes the app aware of the service.
  // if this is not included, then PersonsService must be included in the "providers" array in the module file.
})
export class PersonsService {

  persons = ['Max', 'Manuel', 'Anna']

  addPerson(name: string) {
    this.persons.push(name)
  }

  removePerson(name: string) {
    this.persons = this.persons.filter(person => person !== name)
  }

  constructor() { }
}
