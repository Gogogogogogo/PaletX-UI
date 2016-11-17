import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatepickerComponent } from './datepicker.component';
import { DatepickerStaticComponent } from './datepicker-static.component';

@NgModule({
  declarations: [
    DatepickerComponent,
    DatepickerStaticComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  exports: [
    DatepickerComponent,
    DatepickerStaticComponent
  ]
})

export class DatepickerModule {

}