import { Component } from '@angular/core';

@Component({
  templateUrl: './timepicker.component.html',
  styleUrls: ['./timepicker.component.css']
})

export class TimepickerComponent {
  model1:any = {hour: 13, minute: 30};
  model2:any = {hour: 21, minute: 30};
  model3:any = {hour: 14, minute: 30, second: 59};
  model4:any = {hour: 21, minute: 30};
  model5:any = {hour: 21, minute: 30, second: 59};

  model1Change(event:any) {
    this.model1 = event;
  }

  model2Change(event:any) {
    this.model2 = event;
  }

  model3Change(event:any) {
    this.model3 = event;
  }

  model4Change(event:any) {
    this.model4 = event;
  }

  model5Change(event:any) {
    this.model5 = event;
  }
}