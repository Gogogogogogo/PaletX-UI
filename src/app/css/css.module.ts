import { NgModule } from '@angular/core';
import { CssComponent } from './css.component';
import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CssButtonComponent } from './button/css-button.component';
import { CssBreadcrumbComponent } from './breadcrumb/css-breadcrumb.component';
import { CssAlertComponent } from './alert/css-alert.component';
import { CssCardComponent } from './card/css-card.component';
import { CssModalComponent } from './modal/css-modal.component';
import { CssTabComponent } from './tab/css-tab.component';

@NgModule({
  declarations: [
    CssComponent,
    CssButtonComponent,
    CssBreadcrumbComponent,
    CssAlertComponent,
    CssCardComponent,
    CssModalComponent,
    CssTabComponent
  ],
  imports: [
    SharedModule,
    NgbModule.forRoot()
  ]
})

export class CssModule {

}