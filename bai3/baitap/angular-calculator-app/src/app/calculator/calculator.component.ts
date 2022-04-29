import {Component, OnInit} from '@angular/core';
import {Calculator} from "../../models/Calculator";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  calculator: Calculator = {
    numberA: 0,
    numberB: 0
  }
  result: number=0;

  error: string='' ;

  add() {
    this.result = this.calculator.numberA + this.calculator.numberB;
  }

  sub() {

    this.result = this.calculator.numberA - this.calculator.numberB;
  }

  mul() {

    this.result = this.calculator.numberA * this.calculator.numberB;
  }

  div() {
    if (this.calculator.numberB == 0) {
      this.error = "khong the chia 0";
      this.result = 0;
    } else {
      // @ts-ignore
      this.result = this.calculator.numberA / this.calculator.numberB;
    }

  }

  constructor() {
  }

  ngOnInit(): void {
  }


}
