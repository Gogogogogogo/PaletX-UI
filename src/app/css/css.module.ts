import { NgModule } from '@angular/core';
import { CssComponent } from './css.component';
import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OverviewComponent } from './overview/overview.component';
import { CssButtonComponent } from './button/css-button.component';
import { CssBreadcrumbComponent } from './breadcrumb/css-breadcrumb.component';

@NgModule({
  declarations: [
    CssComponent,
    OverviewComponent,
    CssButtonComponent,
    CssBreadcrumbComponent
  ],
  imports: [
    SharedModule,
    NgbModule.forRoot()
  ]
})

export class CssModule {

}