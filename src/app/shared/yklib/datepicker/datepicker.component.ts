import { Component, Input, Injectable, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgbDatepickerI18n, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
//noinspection TypeScriptCheckImport
import { UUID } from 'angular2-uuid';

const I18N_VALUES = {
  en: {
    weekdays: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  },
  zh: {
    weekdays: ['一', '二', '三', '四', '五', '六', '日'],
    months: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二']
  }
};

@Injectable()
export class I18n {
  language = 'en';
}

@Injectable()
export class CustomDatepickerI18n extends NgbDatepickerI18n {

  constructor(private _i18n:I18n) {
    super();
  }

  getWeekdayName(weekday:number):string {
    return I18N_VALUES[this._i18n.language].weekdays[weekday - 1];
  }

  getMonthName(month:number):string {
    return I18N_VALUES[this._i18n.language].months[month - 1];
  }
}

@Component({
  selector: 'yk-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css'],
  viewProviders: [
    I18n, {provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n}
  ]
})

export class DatepickerComponent {
  @ViewChild('d') dp:any;
  @Input() label:string;
  @Input() model:any;
  @Input() minDate:any;
  @Input() maxDate:any;
  @Input() startDate:any;
  @Input() showNavigation:boolean;
  @Input() showWeekdays:boolean;
  @Input() showWeekNumbers:boolean;
  @Input() labelAlign:string;
  @Input() labelWidth:string;
  @Input() inputWidth:string;
  @Output() modelChange = new EventEmitter();

  inputId:string;

  constructor(private _i18n:I18n) {
    this._i18n.language = 'zh';
    this.inputId = 'yk-datepicker' + UUID.UUID();
    this.showNavigation = true;
    this.showWeekdays = true;
    this.showWeekNumbers = false;
    this.labelAlign = 'right';
    this.labelWidth = '7rem';
    this.inputWidth = '20rem';
  }

  @Input()
  set language(language:string) {
    this._i18n.language = language;
  }

  get language() {
    return this._i18n.language;
  }

  isWeekend(date:NgbDateStruct) {
    const d = new Date(date.year, date.month - 1, date.day);
    return d.getDay() === 0 || d.getDay() === 6;
  }

  isDisabled(date:NgbDateStruct, current:{month:number}) {
    return date.month !== current.month;
  }

  _modelChange(event:any) {
    this.modelChange.emit(this.model);
  }

  navigateTo(date?:any) {
    this.dp.navigateTo(date || null);
  }

  open() {
    this.dp.open();
  }

  close() {
    this.dp.close();
  }

  toggle() {
    this.dp.toggle();
  }

}