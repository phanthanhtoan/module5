import { Component, OnInit } from '@angular/core';
import {BenhAn} from "../../model/benhAn";
import {BenhAnService} from "../../service/benh-an.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  benhAns: BenhAn[] | undefined;
  // page = 1;
  // pageSize =5;
  tenBenhNhan: string | any;
  constructor(
    private benhAnService: BenhAnService
  ) { }

  ngOnInit(): void {
    this.benhAnService.getALl().subscribe(next => this.benhAns = next);
  }

  search() {
    if (this.tenBenhNhan==""){
      this.ngOnInit();
    }else {
      this.benhAns = this.benhAns?.filter(res=>{
        return res.tenBenhNhan.toLocaleLowerCase().match(this.tenBenhNhan.toLocaleLowerCase());
      })
    }

    if (this.tenBenhNhan==""){
      this.ngOnInit();
    }else {
      this.benhAns = this.benhAns?.filter(res=>{
        return res.tenBenhNhan.toLocaleUpperCase().match(this.tenBenhNhan.toLocaleUpperCase());
      })
    }
  }
}
