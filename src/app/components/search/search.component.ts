import { Component, OnInit, ViewEncapsulation, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SearchComponent implements OnInit {

  @Output() onPlaceSearch = new EventEmitter<string>();
  @Output() onResultsSearch = new EventEmitter<string>();
  @Output() onDirectionsSearch = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  getPlace() {
    console.log('getPlace()');
    this.onPlaceSearch.emit('some place');
  }

  getResults() {
    console.log('getResults()');
    this.onResultsSearch.emit('some query');
  }

  getDirections() {
    console.log('getDirections()');
    this.onDirectionsSearch.emit('initiate directions workflow');
  }
}
