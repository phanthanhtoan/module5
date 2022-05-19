import { Component, OnInit } from '@angular/core';
import {BenhAn} from "../../model/benhAn";
import {BenhAnService} from "../../service/benh-an.service";
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  benhAn: BenhAn| undefined;
  createBenhAnForm: any;

  constructor(
    private benhAnService: BenhAnService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createBenhAnForm = new FormGroup({
      id: new FormControl('',  [Validators.required,
        Validators.pattern('BA-[\\d]{3}')]) ,
      idBenhNhan: new FormControl('', [Validators.required,
      Validators.pattern('BN-[\\d]{3}')]),
      tenBenhNhan: new FormControl('', [Validators.required]),
      ngayNhapVien: new FormControl('', [Validators.required]),
      ngayRaVien: new FormControl('', [Validators.required]),
      lyDo: new FormControl('', [Validators.required]),
      phuongPhap: new FormControl('', [Validators.required]),
      bacSi: new FormControl('', [Validators.required]),
    });
  }


  createBenhAn() {
    this.benhAnService.createBenhAn(this.createBenhAnForm.value).subscribe(
      (data) => {
        alert('Create Bệnh Án Success');
        // console.log(data);
      },
      () => {},
      () => {
        this.router.navigateByUrl('/benhAn');
      }
    );
  }
}
