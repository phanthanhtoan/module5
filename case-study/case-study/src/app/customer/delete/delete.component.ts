import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {CustomerService} from "../../service/customer/customer.service";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramap: ParamMap) => {
      const id = paramap.get('id');
      console.log(id);
      // this.customerService.deleteCustomer(id).subscribe(next => this.router.navigateByUrl('customer'));
      this.customerService.deleteCustomer(String(id)).subscribe(() => this.router.navigateByUrl('customer'));
    });
  }

}
