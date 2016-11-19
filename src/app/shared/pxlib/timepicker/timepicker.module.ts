import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { TimepickerComponent } from './timepicker.component';

@NgModule({
  declarations: [
    TimepickerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  exports: [
    TimepickerComponent
  ]
})

export class TimepickerModule {

}