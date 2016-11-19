import { Component, Input } from '@angular/core';

@Component({
  selector: 'yk-sidebar',
  templateUrl: './sidebar.component.html'
})

export class SidebarComponent {
  isVisible:boolean = false;

  @Input() isCollapsed:boolean;
}