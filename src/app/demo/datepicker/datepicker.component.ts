import { Component } from '@angular/core';

@Component({
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})

export class DatepickerComponent {
  model1:any;
  model2:any;
  model3:any;

  constructor() {
  }

  setModel1(event:any) {
    this.model1 = event;
  }

  setModel2(event:any) {
    this.model2 = event;
  }

  selectToday() {
    const now = new Date();
    this.model1 = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  }

  selectToday2() {
    const now = new Date();
    this.model3 = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  }
}