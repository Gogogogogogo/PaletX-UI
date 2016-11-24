import { Component } from '@angular/core';

@Component({
  templateUrl: './css-alert.component.html'
})

export class CssAlertComponent {

  isCollapse1:boolean = true;
  
  isShowSuccess:boolean = false;
  isShowAttention:boolean = false;

  showSuccess() {
    this.isShowSuccess = true;
    setTimeout(()=> {
      this.isShowSuccess = false;
    }, 3000);
  }
}