import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SearchFilterPipe } from './pipes/searchFilter';
import { FilterByPipe } from './pipes/filterByComing';
import { FilterByPartnerPipe } from './pipes/filterByPartner';
import { ReactiveFormsModule  } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { ListService } from './list.service';
import { PeopleComponent } from './components/people/people.component';
import { SearchComponent } from './components/search/search.component';
import { AddPersonFormComponent } from './components/add-person-form/add-person-form.component';



const routes: Routes = [
  { path: '', component: AppComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    SearchFilterPipe,
    FilterByPipe,
    FilterByPartnerPipe,
    PeopleComponent,
    SearchComponent,
    AddPersonFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule ,
    RouterModule.forRoot(
      routes
    ),
    ModalModule.forRoot()
  ],
  providers: [ ListService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
