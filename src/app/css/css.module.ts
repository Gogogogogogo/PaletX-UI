import { NgModule } from '@angular/core';
import { CssComponent } from './css.component';
import { SharedModule } from '../shared/shared.module';
import { OverviewComponent } from './overview/overview.component';
import { CssButtonComponent } from './button/css-button.component';

@NgModule({
  declarations: [
    CssComponent,
    OverviewComponent,
    CssButtonComponent
  ],
  imports: [
    SharedModule
  ]
})

export class CssModule {

}