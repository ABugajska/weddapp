import { Component, OnInit, Output, EventEmitter, TemplateRef  } from '@angular/core';
import {ListService} from './list.service';
import {Person} from './models/person.interface';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  people: Person[];
  name: string;
  isComing: boolean;
  isPartnerComing: boolean;
  toggle: boolean = false;

  @Output() filterBy = new EventEmitter();

  public modalRef: BsModalRef;

 
  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  toggleComponent(ev){
    this.toggle = !this.toggle;
  }
  onChange(ev) { 
    this.isComing = !this.isComing;
  }
  comingWithPartner(ev) {
    this.isPartnerComing = !this.isPartnerComing;
  }
  constructor(private listService: ListService, private modalService: BsModalService) {}

  addPerson(person) {
    this.people.unshift(person);
    
  }
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
