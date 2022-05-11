import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  student = {
    studentCode: 'SV-002',
    studentName: 'Nguyễn Văn B',
    address: 'Đà Nẵng'
  }
  constructor() { }

  ngOnInit(): void {
  }


  onSubmit(createStudentForm: NgForm) {
    console.log(createStudentForm.value);
    console.log(this.student);
  }
}
