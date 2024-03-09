"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.base100ToNumber = exports.numberToBase100 = void 0;
var operations_1 = require("./lib/operations");
Object.defineProperty(exports, "numberToBase100", { enumerable: true, get: function () { return operations_1.numberToBase100; } });
Object.defineProperty(exports, "base100ToNumber", { enumerable: true, get: function () { return operations_1.base100ToNumber; } });
// export function numberToBase100(number: number): string {
//     return base100Map[number];
// }
// export function base100ToNumber(base100: string): number | undefined {
//     const entries = Object.entries(base100Map);
//     for (const [key, value] of entries) {
//         if (value === base100) {
//             return parseInt(key);
//         }
//     }
//     return undefined;
// }
