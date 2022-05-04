import {Component, Input, OnInit} from '@angular/core';
import {IStudent} from "../../models/IStudent";

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {


  student: IStudent={
    id:1,
    name: "Thanh Toan",
    age: 5,
    mark : 5,
    avatar: "https://scr.vn/wp-content/uploads/2020/07/avt-cute.jpg"
  }
  constructor() {
  }

  ngOnInit(): void {
  }

}
