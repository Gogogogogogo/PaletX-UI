import { Component, Input } from '@angular/core';

@Component({
  selector: 'yk-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent {
  isVisible:boolean = false;

  @Input() isCollapsed:boolean;
}