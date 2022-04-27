"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CalculatorComponent = void 0;
var core_1 = require("@angular/core");
var CalculatorComponent = /** @class */ (function () {
    function CalculatorComponent() {
        this.first = 0;
        this.second = 0;
        this.result = 0;
    }
    CalculatorComponent.prototype.changFirst = function (num) {
        this.first = Number(num);
    };
    CalculatorComponent.prototype.changSecond = function (num) {
        this.second = Number(num);
    };
    CalculatorComponent.prototype.calculationResults = function (calculation) {
        // tslint:disable-next-line:triple-equals
        if (calculation == 'add') {
            this.result = this.first + this.second;
            // tslint:disable-next-line:triple-equals
        }
        else if (calculation == 'sub') {
            this.result = this.first - this.second;
            // tslint:disable-next-line:triple-equals
        }
        else if (calculation == 'mul') {
            this.result = this.first * this.second;
        }
        else {
            this.result = this.first / this.second;
        }
    };
    CalculatorComponent.prototype.ngOnInit = function () {
    };
    CalculatorComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-calculator',
            templateUrl: './calculator.component.html',
            styleUrls: ['./calculator.component.css']
        })
    ], CalculatorComponent);
    return CalculatorComponent;
}());
exports.CalculatorComponent = CalculatorComponent;
