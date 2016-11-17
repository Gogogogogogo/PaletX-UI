import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'yk-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {

  @Output() collapse = new EventEmitter();
  isCollapsed:boolean = false;

  source() {
    window.open('http://www.github.com/njustyangkai/venus-frontend', '_blank');
  }

  collapseSidebar(e:any) {
    this.isCollapsed = !this.isCollapsed;
    this.collapse.emit(this.isCollapsed);
  }
}