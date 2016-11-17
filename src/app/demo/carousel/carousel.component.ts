import { Component } from '@angular/core';

@Component({
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})

export class CarouselComponent {
  interval:number;
  keyboard:boolean;
  wrap:boolean;

  constructor() {
    this.interval = 10000;
    this.keyboard = true;
    this.wrap = true;
  }

  changeInterval(value:any) {
    this.interval = value;
  }

  stopKeyboard() {
    this.keyboard = !this.keyboard;
  }

  stopWrap() {
    this.wrap = !this.wrap;
  }
}