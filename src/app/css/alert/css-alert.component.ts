import { Component } from '@angular/core';

@Component({
  templateUrl: './css-alert.component.html'
})

export class CssAlertComponent {

  isCollapse1:boolean = true;
  isCollapse2:boolean = true;
  isCollapse3:boolean = true;

  isShowSuccess:boolean = false;
  isShowAttention:boolean = false;
  isShowAlarm:boolean = false;

  showSuccess() {
    this.isShowSuccess = true;
    setTimeout(()=> {
      this.isShowSuccess = false;
    }, 3000);
  }
}