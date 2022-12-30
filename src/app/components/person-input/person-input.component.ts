import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { PersonsService } from 'src/app/services/persons.service';

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})
export class PersonInputComponent {

  constructor(private prsService: PersonsService) {}


  // @Output() personCreate = new EventEmitter() // we don't need this now that we're relying on the service

  enteredPersonName = '' // in order to use [(ngModel)], we must import the FormsModule

    onCreatePerson() {
      // console.log('Person created: ' + this.enteredPersonName)
      // this.personCreate.emit(this.enteredPersonName) // we don't need this anymore now that we're using a service to send and recive data
      this.prsService.addPerson(this.enteredPersonName)
      this.enteredPersonName = ''
    }


    // onCreatePerson(personName: string) {
    //   console.log('Created a person: ' + personName)
    // }
}
