import { Component } from '@angular/core';

@Component({
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})

export class TabComponent {
  beforeChange(event:any) {
    if (event.nextId === 'bar3') {
      event.preventDefault();
    }
  }
}