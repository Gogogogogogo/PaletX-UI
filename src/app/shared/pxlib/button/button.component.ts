import { Component, Input } from '@angular/core';

@Component({
  selector: 'px-button',
  templateUrl: './button.component.html'
})

export class ButtonComponent {

  @Input() classType:string;
  @Input() i:string;
  @Input() disabled:boolean;
  @Input() type:string;

  constructor() {
    this.type = 'button';
  }

  setClass() {
    return 'btn px-btn px-btn-' + this.classType;
  }

  setIClass() {
    return 'fa fa-' + this.i;
  }
}