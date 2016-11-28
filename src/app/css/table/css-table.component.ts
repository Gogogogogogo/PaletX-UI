import { Component } from '@angular/core';
import { datas } from './datas';

@Component({
  templateUrl: './css-table.component.html'
})

export class CssTableComponent {
  datas:any = datas;
}