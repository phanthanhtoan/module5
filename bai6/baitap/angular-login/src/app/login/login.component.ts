import { Component, OnInit } from '@angular/core';
import {Login} from "../login";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: Login[] = [];
  loginForm= new FormGroup({
    account: new FormControl(),
    password: new FormControl()
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      account:new FormControl(),
      password: new FormControl()
    });
    this.loginForm.patchValue(this.login)
  }

  onSubmit() {
    console.log(this.loginForm.value);
  }
}
