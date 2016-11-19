import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { PXModule } from './pxlib/px.module';

const module = [
  CommonModule,
  FormsModule,
  HttpModule,
  RouterModule,
  PXModule
];

@NgModule({
  imports: module,
  exports: module
})

export class SharedModule {
}