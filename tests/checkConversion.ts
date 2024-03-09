import { numberToBase100, base100ToNumber, sumBase100 } from '../src';


const number1 = numberToBase100(88);
console.log("88 converted to base100:" + number1);

const number2 = numberToBase100(61);
console.log('61 converted to number: ' + number2);
const sum = sumBase100([number1, number2]);
console.log('Sum of 88 and 61 in base100: ' + sum);
