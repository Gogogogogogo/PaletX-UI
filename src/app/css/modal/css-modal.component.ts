import { Component, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  templateUrl: './css-modal.component.html'
})

export class CssModalComponent {

  isCollapse1:boolean = true;
  isCollapse2:boolean = true;
  
  @ViewChild('modal1_template') modal1_template:any;
  modal1:any;

  @ViewChild('modal2_template') modal2_template:any;
  modal2:any;

  constructor(private modalService:NgbModal) {
  }

  open1() {
    this.modal1 = this.modalService.open(this.modal1_template, {
      backdrop: true,
      keyboard: true
    });
  }

  open2() {
    this.modal2 = this.modalService.open(this.modal2_template, {
      backdrop: true,
      keyboard: true
    });
  }
}
