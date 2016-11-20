import { NgModule } from '@angular/core';
import { CssComponent } from './css.component';
import { SharedModule } from '../shared/shared.module';
import { OverviewComponent } from './overview/overview.component';

@NgModule({
  declarations: [
    CssComponent,
    OverviewComponent
  ],
  imports: [
    SharedModule
  ]
})

export class CssModule {

}