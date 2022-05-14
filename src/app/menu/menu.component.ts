import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  stInsertar: boolean = false;
  stUpdate: boolean = false;
  stSelect: boolean = false;
  stDelete: boolean = false;
  constructor() {}

  ngOnInit(): void {
    this.setStSelect(true);
  }

  setStInsert(val: boolean, insert: boolean) {
    if (!insert) {
      this.stUpdate = val;
    }
    this.setFalse();
    this.stInsertar = val;
    this.stSelect = false
  }

  getUpdate(){
    return this.stUpdate;
  }

  setStSelect(val: boolean) {
    this.setFalse();
    this.stSelect = val;
    this.stInsertar = false;
    this.stUpdate = false;
  }

  setFalse() {
    // this.stInsertar = false;
    // this.stUpdate = false;
    // this.stSelect = false;
  }
}
