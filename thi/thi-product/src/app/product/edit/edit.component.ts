import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BenhAn} from "../../model/benhAn";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {BenhAnService} from "../../service/benh-an.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editForm: FormGroup |any;
  benhAn: BenhAn | undefined;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private benhAnService : BenhAnService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paraMap: ParamMap)=>{
      const id = String(paraMap.get('id'));
      this.benhAnService.findById(id).subscribe(
        next=>{
          this.benhAn = next;
          this.editForm.patchValue({
            id: this.benhAn.id,
            idBenhNhan: this.benhAn.idBenhNhan,
            tenBenhNhan: this.benhAn.tenBenhNhan,
            ngayNhapVien: this.benhAn.ngayNhapVien,
            ngayRaVien: this.benhAn.ngayRaVien,
            lyDo: this.benhAn.lyDo,
            phuongPhap: this.benhAn.phuongPhap,
            bacSi: this.benhAn.bacSi
          });
        });
    });
    this.editForm = this.fb.group({
      id: ['', Validators.required],
      idBenhNhan: ['', Validators.required],
      tenBenhNhan:['',Validators.required] ,
      ngayNhapVien: ['',Validators.required],
      ngayRaVien:['',Validators.required],
      lyDo:['',Validators.required],
      phuongPhap:['',Validators.required],
      bacSi: ['',Validators.required]
    });
  }

  onSubmit() {
    console.log(this.editForm);
    if (this.editForm.valid) {
      this.benhAn = this.editForm.value;
      if (this.benhAn) {
        this.benhAnService.updateBenhAn(this.benhAn).subscribe(next => this.router.navigateByUrl('/benhAn'));
      }
    }
  }

}
