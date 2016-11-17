import { Component } from '@angular/core';

@Component({
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})

export class BreadcrumbComponent {
  links:any[] = [
    {
      active: false,
      text: 'alert',
      url: '/main/alert'
    },
    {
      active: false,
      text: 'button',
      url: '/main/button'
    },
    {
      active: true,
      text: 'breadcrumb'
    }
  ];
}