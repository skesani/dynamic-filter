import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-filter',
  templateUrl: './dynamic-filter.component.html',
  styleUrls: ['./dynamic-filter.component.css']
})
export class DynamicFilterComponent implements OnInit {
  public search: any = '';
  users: any[] = [];
  outputVal: any = 'All';
  query: any = '';
  constructor() { }

  ngOnInit() {
    this.users = [
      {ID: 1, User: 'Expired 1'},
      {ID: 2, User: 'Expired 2'},
      {ID: 3, User: 'Expired 3'},
      {ID: 4, User: 'All are expire in this'},
      {ID: 5, User: 'Active'},
      {ID: 6, User: 'Future'},
      {ID: 7, User: 'test'},
      {ID: 8, User: 'gender'},
      {ID: 9, User: 'zen'}
    ];
  }

  valueChange(val) {
    console.log(val.target.value);
    if (val.target.value == 1) {
      this.outputVal = 'Expired';
      this.query = 'Expire';
    }
    if (val.target.value == 2) {
      this.outputVal = 'Active';
      this.query = 'Activ';
    }
    if (val.target.value == 3) {
      this.outputVal = 'Future';
      this.query = 'Futur';
    }
    if (val.target.value == 4) {
      this.outputVal = 'All';
      this.query = '';
    }
  }

}
