import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {BenhAnService} from "../../service/benh-an.service";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private benhAnService: BenhAnService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramap: ParamMap) => {
      const id = paramap.get('id');
      console.log(id);
      // this.customerService.deleteCustomer(id).subscribe(next => this.router.navigateByUrl('customer'));
      this.benhAnService.deleteBenhAn(String(id)).subscribe(() => this.router.navigateByUrl('benhAn'));
    });
  }

}
