import { base100Map } from "../types/Base100System";

// Helper to convert a number to its base 100 representation
export function numberToBase100(num: number): string {
    if (num < 0 || num > 99) throw new Error('Number out of base 100 range');
    return base100Map[num];
}

// Helper to convert a base 100 symbol back to a number
export function base100ToNumber(symbol: string): number {
    const entries = Object.entries(base100Map);
    for (const [key, value] of entries) {
        if (value === symbol) return parseInt(key, 10);
    }
    throw new Error('Symbol not found in base 100 map');
}

// Revised addition function to handle base 100 addition correctly, assuming simple cases
export function addBase100(a: string, b: string): string {
    const numA = base100ToNumber(a);
    const numB = base100ToNumber(b);
    const sum = numA + numB;

    // Handle potential carry
    if (sum < 100) {
        return numberToBase100(sum);
    } else {
        const carry = Math.floor(sum / 100);
        const remainder = sum % 100;
        // Assuming '1' is the correct representation for 100 in this specific case
        // and that carrying over to the next "digit" aligns with your system's logic
        return numberToBase100(carry) + numberToBase100(remainder);
    }
}

// Function to sum an array of base 100 numbers
export function sumBase100(numbers: string[]): string {
    let sum = '0'; // Assuming '0' is the base 100 representation of zero
    for (const number of numbers) {
        // Summing two base 100 numbers at a time
        sum = addBase100(sum, number);
    }
    return sum;
}
