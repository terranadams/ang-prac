import { Component, Input } from '@angular/core';
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

  personList: string[] = []

  constructor(private prsService: PersonsService) { // this gets run any time an instance of this component is made

  }

  ngOnInit() {
    this.personList = this.prsService.persons
  }
}
