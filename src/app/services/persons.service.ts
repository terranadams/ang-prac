import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root' // this line makes the app aware of the service.
  // if this is not included, then PersonsService must be included in the "providers" array in the module file.
})
export class PersonsService {

  persons = ['Max', 'Manuel', 'Anna'] // before making the subject, this data was what got sent to the components. Now it's personsChanged, this is to keep the UI updated with data changes
  personsChanged = new Subject<string[]>()

  addPerson(name: string) {
    this.persons.push(name)
    this.personsChanged.next(this.persons) // we're emitting an event which contains our updated list of persons to the components that render this info, by subscribing
  }

  removePerson(name: string) {
    this.persons = this.persons.filter(person => person !== name)
    this.personsChanged.next(this.persons)
  }

  constructor() { }
}
