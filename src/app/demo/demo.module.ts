import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DemoComponent } from './demo.component';
import { ButtonComponent } from './button/button.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { TableComponent } from './table/table.component';
import { TableService } from './table/table.service';
import { InputComponent } from './input/input.component';
import { ModalComponent } from './modal/modal.component';
import { AlertComponent } from './alert/alert.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { RadioComponent } from './radio/radio.component';
import { FormComponent } from './form/form.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { TabComponent } from './tab/tab.component';
import { TimepickerComponent } from './timepicker/timepicker.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { PopoverComponent } from './popover/popover.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CollapseComponent } from './collapse/collapse.component';
import { BoxComponent } from './box/box.component';

@NgModule({
  declarations: [
    DemoComponent,
    ButtonComponent,
    CheckboxComponent,
    TableComponent,
    InputComponent,
    ModalComponent,
    AlertComponent,
    DropdownComponent,
    RadioComponent,
    FormComponent,
    DatepickerComponent,
    TabComponent,
    TimepickerComponent,
    TooltipComponent,
    PopoverComponent,
    BreadcrumbComponent,
    CarouselComponent,
    CollapseComponent,
    BoxComponent
  ],
  imports: [
    SharedModule,
    NgbModule.forRoot()
  ],
  providers: [
    TableService
  ]
})

export class DemoModule {
}