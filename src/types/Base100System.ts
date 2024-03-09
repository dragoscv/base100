// Define a type for each category of symbols
export type Digit = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
export const Digit0: Digit = '0';
export const Digit1: Digit = '1';
export const Digit2: Digit = '2';
export const Digit3: Digit = '3';
export const Digit4: Digit = '4';
export const Digit5: Digit = '5';
export const Digit6: Digit = '6';
export const Digit7: Digit = '7';
export const Digit8: Digit = '8';
export const Digit9: Digit = '9';


export type UpperCaseLetter = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z';
export const Digit10: UpperCaseLetter = 'A';
export const Digit11: UpperCaseLetter = 'B';
export const Digit12: UpperCaseLetter = 'C';
export const Digit13: UpperCaseLetter = 'D';
export const Digit14: UpperCaseLetter = 'E';
export const Digit15: UpperCaseLetter = 'F';
export const Digit16: UpperCaseLetter = 'G';
export const Digit17: UpperCaseLetter = 'H';
export const Digit18: UpperCaseLetter = 'I';
export const Digit19: UpperCaseLetter = 'J';
export const Digit20: UpperCaseLetter = 'K';
export const Digit21: UpperCaseLetter = 'L';
export const Digit22: UpperCaseLetter = 'M';
export const Digit23: UpperCaseLetter = 'N';
export const Digit24: UpperCaseLetter = 'O';
export const Digit25: UpperCaseLetter = 'P';
export const Digit26: UpperCaseLetter = 'Q';
export const Digit27: UpperCaseLetter = 'R';
export const Digit28: UpperCaseLetter = 'S';
export const Digit29: UpperCaseLetter = 'T';
export const Digit30: UpperCaseLetter = 'U';
export const Digit31: UpperCaseLetter = 'V';
export const Digit32: UpperCaseLetter = 'W';
export const Digit33: UpperCaseLetter = 'X';
export const Digit34: UpperCaseLetter = 'Y';
export const Digit35: UpperCaseLetter = 'Z';

export type LowerCaseLetter = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j' | 'k' | 'l' | 'm' | 'n' | 'o' | 'p' | 'q' | 'r' | 's' | 't' | 'u' | 'v' | 'w' | 'x' | 'y' | 'z';
export const Digit36: LowerCaseLetter = 'a';
export const Digit37: LowerCaseLetter = 'b';
export const Digit38: LowerCaseLetter = 'c';
export const Digit39: LowerCaseLetter = 'd';
export const Digit40: LowerCaseLetter = 'e';
export const Digit41: LowerCaseLetter = 'f';
export const Digit42: LowerCaseLetter = 'g';
export const Digit43: LowerCaseLetter = 'h';
export const Digit44: LowerCaseLetter = 'i';
export const Digit45: LowerCaseLetter = 'j';
export const Digit46: LowerCaseLetter = 'k';
export const Digit47: LowerCaseLetter = 'l';
export const Digit48: LowerCaseLetter = 'm';
export const Digit49: LowerCaseLetter = 'n';
export const Digit50: LowerCaseLetter = 'o';
export const Digit51: LowerCaseLetter = 'p';
export const Digit52: LowerCaseLetter = 'q';
export const Digit53: LowerCaseLetter = 'r';
export const Digit54: LowerCaseLetter = 's';
export const Digit55: LowerCaseLetter = 't';
export const Digit56: LowerCaseLetter = 'u';
export const Digit57: LowerCaseLetter = 'v';
export const Digit58: LowerCaseLetter = 'w';
export const Digit59: LowerCaseLetter = 'x';
export const Digit60: LowerCaseLetter = 'y';
export const Digit61: LowerCaseLetter = 'z';



// Unfortunately, TypeScript does not allow for emoji literal types in the same way as string literals.
// You might need to use a workaround by defining them as a string type or by using constants for each emoji.
export type Emoji = string; // This is a simplification. Ideally, you would have a more specific type or constant for each emoji.
export const Digit63: Emoji = '🌟';
export const Digit62: Emoji = '😄';
export const Digit64: Emoji = '💡';
export const Digit65: Emoji = '🎉';
export const Digit66: Emoji = '🚀';
export const Digit67: Emoji = '🌈';
export const Digit68: Emoji = '📚';
export const Digit69: Emoji = '🎨';
export const Digit70: Emoji = '🎵';
export const Digit71: Emoji = '🍎';
export const Digit72: Emoji = '🏀';
export const Digit73: Emoji = '🐶';
export const Digit74: Emoji = '🐱';
export const Digit75: Emoji = '🌺';
export const Digit76: Emoji = '☕';
export const Digit77: Emoji = '🚲';
export const Digit78: Emoji = '🍕';
export const Digit79: Emoji = '🎁';
export const Digit80: Emoji = '🎈';
export const Digit81: Emoji = '🌍';
export const Digit82: Emoji = '⏰';
export const Digit83: Emoji = '🍫';
export const Digit84: Emoji = '🍓';
export const Digit85: Emoji = '🏖️';
export const Digit86: Emoji = '📘';
export const Digit87: Emoji = '🧩';
export const Digit88: Emoji = '🖼️';
export const Digit89: Emoji = '🧁';
export const Digit90: Emoji = '🎤';
export const Digit91: Emoji = '🚗';
export const Digit92: Emoji = '🍉';
export const Digit93: Emoji = '🏡';
export const Digit94: Emoji = '💼';
export const Digit95: Emoji = '🌙';
export const Digit96: Emoji = '🍂';
export const Digit97: Emoji = '⛄';
export const Digit98: Emoji = '🕶️';
export const Digit99: Emoji = '🎂';

export const base100Map: Record<number, Base100Digit> = {
    0: Digit0,
    1: Digit1,
    2: Digit2,
    3: Digit3,
    4: Digit4,
    5: Digit5,
    6: Digit6,
    7: Digit7,
    8: Digit8,
    9: Digit9,
    10: Digit10,
    11: Digit11,
    12: Digit12,
    13: Digit13,
    14: Digit14,
    15: Digit15,
    16: Digit16,
    17: Digit17,
    18: Digit18,
    19: Digit19,
    20: Digit20,
    21: Digit21,
    22: Digit22,
    23: Digit23,
    24: Digit24,
    25: Digit25,
    26: Digit26,
    27: Digit27,
    28: Digit28,
    29: Digit29,
    30: Digit30,
    31: Digit31,
    32: Digit32,
    33: Digit33,
    34: Digit34,
    35: Digit35,
    36: Digit36,
    37: Digit37,
    38: Digit38,
    39: Digit39,
    40: Digit40,
    41: Digit41,
    42: Digit42,
    43: Digit43,
    44: Digit44,
    45: Digit45,
    46: Digit46,
    47: Digit47,
    48: Digit48,
    49: Digit49,
    50: Digit50,
    51: Digit51,
    52: Digit52,
    53: Digit53,
    54: Digit54,
    55: Digit55,
    56: Digit56,
    57: Digit57,
    58: Digit58,
    59: Digit59,
    60: Digit60,
    61: Digit61,
    62: Digit62,
    63: Digit63,
    64: Digit64,
    65: Digit65,
    66: Digit66,
    67: Digit67,
    68: Digit68,
    69: Digit69,
    70: Digit70,
    71: Digit71,
    72: Digit72,
    73: Digit73,
    74: Digit74,
    75: Digit75,
    76: Digit76,
    77: Digit77,
    78: Digit78,
    79: Digit79,
    80: Digit80,
    81: Digit81,
    82: Digit82,
    83: Digit83,
    84: Digit84,
    85: Digit85,
    86: Digit86,
    87: Digit87,
    88: Digit88,
    89: Digit89,
    90: Digit90,
    91: Digit91,
    92: Digit92,
    93: Digit93,
    94: Digit94,
    95: Digit95,
    96: Digit96,
    97: Digit97,
    98: Digit98,
    99: Digit99
};


// Union type that encompasses all possible base 100 digits
export type Base100Digit = Digit | UpperCaseLetter | LowerCaseLetter | Emoji;