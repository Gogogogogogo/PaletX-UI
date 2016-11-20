import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FullComponent } from './full.component';
import { DemoModule } from '../demo/demo.module';
import { FullRoutingModule } from './full-routing.module';
import { HttpService } from '../util/http.service';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarComponentsComponent } from './sidebar/sidebar-components/sidebar-components.component';
import { SidebarCssComponent } from './sidebar/sidebar-css/sidebar-css.component';
import { CssModule } from '../css/css.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    FullComponent,
    NavbarComponent,
    SidebarComponent,
    SidebarComponentsComponent,
    SidebarCssComponent,
    HomeComponent
  ],
  imports: [
    SharedModule,
    NgbModule.forRoot(),
    FullRoutingModule,
    DemoModule,
    CssModule
  ],
  providers: [
    HttpService
  ]
})

export class FullModule {
}