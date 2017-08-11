import { Component, OnInit } from '@angular/core';
import {ListService} from './list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  people: any;
  constructor(private listService: ListService) {}
  ngOnInit() {
    this.listService.getData().subscribe((people) => { 
      console.log("people:", people);
      this.people = people;
    });
  }
}
