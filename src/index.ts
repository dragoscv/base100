import { base100Map } from "./types/Base100System";
export { numberToBase100, base100ToNumber } from './lib/operations';


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