"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumBase100 = exports.addBase100 = exports.base100ToNumber = exports.numberToBase100 = void 0;
var Base100System_1 = require("../types/Base100System");
// Helper to convert a number to its base 100 representation
function numberToBase100(num) {
    if (num < 0 || num > 99)
        throw new Error('Number out of base 100 range');
    return Base100System_1.base100Map[num];
}
exports.numberToBase100 = numberToBase100;
// Helper to convert a base 100 symbol back to a number
function base100ToNumber(symbol) {
    var entries = Object.entries(Base100System_1.base100Map);
    for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
        var _a = entries_1[_i], key = _a[0], value = _a[1];
        if (value === symbol)
            return parseInt(key, 10);
    }
    throw new Error('Symbol not found in base 100 map');
}
exports.base100ToNumber = base100ToNumber;
// Revised addition function to handle base 100 addition correctly, assuming simple cases
function addBase100(a, b) {
    var numA = base100ToNumber(a);
    var numB = base100ToNumber(b);
    var sum = numA + numB;
    // Handle potential carry
    if (sum < 100) {
        return numberToBase100(sum);
    }
    else {
        var carry = Math.floor(sum / 100);
        var remainder = sum % 100;
        // Assuming '1' is the correct representation for 100 in this specific case
        // and that carrying over to the next "digit" aligns with your system's logic
        return numberToBase100(carry) + numberToBase100(remainder);
    }
}
exports.addBase100 = addBase100;
// Function to sum an array of base 100 numbers
function sumBase100(numbers) {
    var sum = '0'; // Assuming '0' is the base 100 representation of zero
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var number = numbers_1[_i];
        // Summing two base 100 numbers at a time
        sum = addBase100(sum, number);
    }
    return sum;
}
exports.sumBase100 = sumBase100;
