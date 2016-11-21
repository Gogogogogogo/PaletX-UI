import { Component, ViewChild, OnInit } from '@angular/core';
import { TableService } from './table.service';
import { tableDatas } from './datas';

@Component({
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
  @ViewChild('pxTable') pxTable:any;
  selections:string;
  columns:any[] = [
    {title: '姓名', field: 'name'},
    {title: '年龄', field: 'age'},
    {title: '爱好', field: 'hobbit'},
    {title: '电话', field: 'phone'},
    {title: '性别', field: 'sex'},
    {title: '毕业学校', field: 'school'},
    {title: '最后登录时间', field: 'lastlogtime'}
  ];

  datas:any[];

  constructor(private tableService:TableService) {
    this.datas = [];
  }

  ngOnInit() {
    this.datas = tableDatas;
    /*this.tableService.getData().subscribe(
     (res:any)=> {
     this.datas = res;
     },
     (error:any)=> {
     console.log(error);
     }
     );*/
  }

  getSelections() {
    this.selections = JSON.stringify(this.pxTable.getSelections());
  }
}