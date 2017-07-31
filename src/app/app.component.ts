import { Component, OnInit } from '@angular/core';
import {ListService} from './list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  constructor(private listService: ListService) {}
  ngOnInit() {
    this.listService.getData().subscribe((data) => { console.log("data:", data) })
    
  }
}
