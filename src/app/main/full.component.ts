import { Component } from '@angular/core';

@Component({
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.css']
})

export class FullComponent {
  isCollapsed:boolean = false;

  collapse(e:any) {
    this.isCollapsed = e;
  }
}