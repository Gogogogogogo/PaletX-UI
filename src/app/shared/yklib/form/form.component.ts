import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormService } from './form.service';
import { BaseModel } from './base.model';
import { FormGroup } from '@angular/forms';
import { Event } from "@angular/router";

@Component({
  selector: 'yk-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  @Input() models:BaseModel<any>[] = [];
  @Input() showLabel:boolean;
  @Input() btnText:string;
  @Output() submit = new EventEmitter();
  form:FormGroup;

  constructor(private formService:FormService) {
    this.showLabel = true;
    this.btnText = '提交';
  }

  ngOnInit() {
    this.models = this.models.sort((a, b) => a.order - b.order);
    this.form = this.formService.toForm(this.models);
  }

  onSubmit() {
    this.submit.emit(this.form.value);
  }

}