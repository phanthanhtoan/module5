import {Component, OnInit} from '@angular/core';
import {IStudent} from "../../models/IStudent";
import {StudenDao} from "../../models/StudenDao";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: IStudent[] = StudenDao.studentDao;

  constructor() {
  }

  ngOnInit(): void {
  }

}
