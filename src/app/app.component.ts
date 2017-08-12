import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {ListService} from './list.service';
import {Person} from './models/person.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  people: Person[];
  name: string;
  isComing: boolean;

  @Output() filterBy = new EventEmitter();

  onChange(ev) { 
    this.isComing = !this.isComing;
    
  }
  constructor(private listService: ListService) {}
  onSearch(name: string) {
    this.name = name;
  }
  ngOnInit() {
    this.listService.getData().subscribe((people) => { 
      console.log("people:", people);
      this.people = people;
    });
  }
}
