import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root', // this line makes the app aware of the service.
  // if this is not included, then PersonsService must be included in the "providers" array in the module file.
})
export class PersonsService {
  constructor(private http: HttpClient) {}

  // TO TOGGLE BETWEEN USING THE HARD CODED PERSONS AND THE API,
  // comment out fetchPersons() below, and names to the this.persons array.
  // also, in persons.component.ts, within ngOnInit, comment out fetchPersons(),
  // and then update personList with the names using the service

  fetchPersons() {
    this.http
      .get<any>('https://swapi.dev/api/people/') // MUST UNCLUDE <any> to access response object properties
      .pipe(
        map(resData => { // this maps out just the values of the "name" properties in the results array
          return resData.results.map((character: { name: any; }) => character.name); // typescript sucks, just look at this line
        })
      )
      .subscribe(transformedData => {
        this.personsChanged.next(transformedData);
      });
  }

  persons = ['Max', 'Manuel', 'Anna'] // before making the subject, this data was what got sent to the components. Now it's personsChanged, this is to keep the UI updated with data changes
  // persons: string[] = [];
  personsChanged = new Subject<string[]>();

  addPerson(name: string) {
    this.persons.push(name);
    this.personsChanged.next(this.persons); // we're emitting an event which contains our updated list of persons to the components that render this info, by subscribing
  }

  removePerson(name: string) {
    this.persons = this.persons.filter((person) => person !== name);
    this.personsChanged.next(this.persons);
  }
}
