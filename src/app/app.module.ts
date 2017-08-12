import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SearchFilterPipe } from './pipes/searchFilter';
import { FilterByPipe } from './pipes/filterBy';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListService } from './list.service';
import { PeopleComponent } from './components/people/people.component';
import { SearchComponent } from './components/search/search.component';



const routes: Routes = [
  { path: '', component: AppComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    SearchFilterPipe,
    FilterByPipe,
    PeopleComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      routes
    )
  ],
  providers: [ ListService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
