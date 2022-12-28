import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonInputComponent } from './components/person-input/person-input.component';
import { PersonsComponent } from './components/persons/persons.component';

const routes: Routes = [
  { path: '', component: PersonsComponent},
  { path: 'input', component: PersonInputComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
