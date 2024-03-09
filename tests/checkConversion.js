"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var src_1 = require("../src");
var number1 = (0, src_1.numberToBase100)(88);
console.log("88 converted to base100:" + number1);
var number2 = (0, src_1.numberToBase100)(61);
console.log('61 converted to number: ' + number2);
var sum = (0, src_1.sumBase100)([number1, number2]);
console.log('Sum of 88 and 61 in base100: ' + sum);
