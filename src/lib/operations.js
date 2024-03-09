"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.base100ToNumber = exports.numberToBase100 = void 0;
var Base100System_1 = require("../types/Base100System");
function numberToBase100(number) {
    return Base100System_1.base100Map[number];
}
exports.numberToBase100 = numberToBase100;
function base100ToNumber(base100) {
    var entries = Object.entries(Base100System_1.base100Map);
    for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
        var _a = entries_1[_i], key = _a[0], value = _a[1];
        if (value === base100) {
            return parseInt(key);
        }
    }
    return undefined;
}
exports.base100ToNumber = base100ToNumber;
