import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})
export class PersonInputComponent {


  @Output() personCreate = new EventEmitter()

  enteredPersonName = '' // in order to use [(ngModel)], we must import the FormsModule

    onCreatePerson() {
      // console.log('Person creatd: ' + this.enteredPersonName)
      this.personCreate.emit(this.enteredPersonName)
      this.enteredPersonName = ''
    }


    // onCreatePerson(personName: string) {
    //   console.log('Created a person: ' + personName)
    // }
}
