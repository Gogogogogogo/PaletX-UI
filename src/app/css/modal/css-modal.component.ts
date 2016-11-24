import { Component, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  templateUrl: './css-modal.component.html'
})

export class CssModalComponent {
  @ViewChild('modal1_template') modal1_template:any;
  modal1:any;

  constructor(private modalService:NgbModal) {
  }

  open1() {
    this.modal1 = this.modalService.open(this.modal1_template, {
      backdrop: true,
      keyboard: true
    });
  }
}
