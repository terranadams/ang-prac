import { Component, Input } from '@angular/core';
import { PersonsService } from 'src/app/services/persons.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent {
  // @Input() personList!: string[]

  personList: string[] = []

  constructor(prsService: PersonsService) { // this gets run any time an instance of this component is made
    this.personList = prsService.persons
  }
}
