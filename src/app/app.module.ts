import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SearchFilterPipe } from './searchFilter';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListService } from './list.service';



const routes: Routes = [
  { path: '', component: AppComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    SearchFilterPipe
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
