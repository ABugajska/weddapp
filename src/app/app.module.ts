import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListService } from './list.service';



const routes: Routes = [
  { path: '', component: AppComponent }
]


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(
      routes
    )
  ],
  providers: [ ListService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
