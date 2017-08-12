import { Component, OnInit, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() search = new EventEmitter();
  constructor() { }

  onChange(e) {
    this.search.emit(e.target.value);
  }

  ngOnInit() {
  }

}
