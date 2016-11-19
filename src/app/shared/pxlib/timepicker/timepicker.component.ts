import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'px-timepicker',
  templateUrl: './timepicker.component.html',
  styleUrls: ['./timepicker.component.css']
})

export class TimepickerComponent {
  @Input() model:any;
  @Input() meridian:boolean;
  @Input() seconds:boolean;
  @Input() spinners:boolean = true;
  @Input() hourStep:number = 1;
  @Input() minuteStep:number = 1;
  @Input() secondStep:number = 1;
  @Output() modelChange = new EventEmitter();

  _modelChange(event:any) {
    this.modelChange.emit(this.model);
  }
}