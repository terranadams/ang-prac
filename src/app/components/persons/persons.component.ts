import { Component, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PersonsService } from 'src/app/services/persons.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent {
  // @Input() personList!: string[] // we don't need to use this input anymore because we're getting our data from a service

  //private prsService: PersonsService // this is a type declaration, not a value declaration
  // the line above isn't needed because we included the word 'private' in front of our constructor to declair its variable

  isFetching = false
  personList: string[] = []
  personListSubscription!: Subscription // this is for unsubscribing from our subject when the component gets destroyed (to prevent memory leaks)
  // also apparently I have to use a ! to declair the variable above to unsub from the subscription with it later

  constructor(private prsService: PersonsService) { // this gets run any time an instance of this component is made

  }

  ngOnInit() {
    this.isFetching = true
    // this.personList = this.prsService.persons
    this.prsService.fetchPersons()
    this.personListSubscription = this.prsService.personsChanged.subscribe(persons => {
      this.personList = persons
      this.isFetching = false
    }) // this is how we make the component listen for data changes to render accordingly
  }

  onDelete(name: string) {
    this.prsService.removePerson(name) // updating data in service
    // this.personList = this.personList.filter(person => person !== name) // updating data in UI
    // we use subjects to get the UI to reflect actual data automatically when it changes
  }

  ngOnDestroy() {
    this.personListSubscription.unsubscribe()
  }
}
