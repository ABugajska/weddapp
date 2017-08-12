import { Component, OnInit, Input } from '@angular/core';
import {Person} from '../../models/person.interface';

@Component({
  selector: 'people-list',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  @Input() people: Person[];

  constructor() { }

  ngOnInit() {
  }

}
