import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {Register} from "../register";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  register: Register[] = [];

  registerForm = new FormGroup({
    account: new FormControl(),
    password: new FormControl(),
    confirmPassword: new FormControl(),
    age: new FormControl(),
    gender: new FormControl(),
    phone: new FormControl()
  });


  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {

    this.registerForm = this.fb.group({
      account:['', [Validators.required]],
      pwGroup: this.fb.group({
        password: '',
        confirmPassword: '',
      }, {validators: this.comparePassword}),
      age: new FormControl('', [Validators.min(18), Validators.required]),
      gender: new FormControl('',[Validators.required]),
      phone: new FormControl('', [Validators.pattern("/^\\+84\\d{9,10}$/")])
    });
    this.registerForm.patchValue(this.register);
  }


  onSubmit() {
    console.log(this.registerForm.value);
  }

   comparePassword( c : AbstractControl) {
    const v = c.value;
    console.log(v.password);
    return (v.password === v.confirmPassword) ?
      null : {
      passwordnotmatch: true
    } ;
  }



}
