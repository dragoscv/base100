"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Digit49 = exports.Digit48 = exports.Digit47 = exports.Digit46 = exports.Digit45 = exports.Digit44 = exports.Digit43 = exports.Digit42 = exports.Digit41 = exports.Digit40 = exports.Digit39 = exports.Digit38 = exports.Digit37 = exports.Digit36 = exports.Digit35 = exports.Digit34 = exports.Digit33 = exports.Digit32 = exports.Digit31 = exports.Digit30 = exports.Digit29 = exports.Digit28 = exports.Digit27 = exports.Digit26 = exports.Digit25 = exports.Digit24 = exports.Digit23 = exports.Digit22 = exports.Digit21 = exports.Digit20 = exports.Digit19 = exports.Digit18 = exports.Digit17 = exports.Digit16 = exports.Digit15 = exports.Digit14 = exports.Digit13 = exports.Digit12 = exports.Digit11 = exports.Digit10 = exports.Digit9 = exports.Digit8 = exports.Digit7 = exports.Digit6 = exports.Digit5 = exports.Digit4 = exports.Digit3 = exports.Digit2 = exports.Digit1 = exports.Digit0 = void 0;
exports.Digit99 = exports.Digit98 = exports.Digit97 = exports.Digit96 = exports.Digit95 = exports.Digit94 = exports.Digit93 = exports.Digit92 = exports.Digit91 = exports.Digit90 = exports.Digit89 = exports.Digit88 = exports.Digit87 = exports.Digit86 = exports.Digit85 = exports.Digit84 = exports.Digit83 = exports.Digit82 = exports.Digit81 = exports.Digit80 = exports.Digit79 = exports.Digit78 = exports.Digit77 = exports.Digit76 = exports.Digit75 = exports.Digit74 = exports.Digit73 = exports.Digit72 = exports.Digit71 = exports.Digit70 = exports.Digit69 = exports.Digit68 = exports.Digit67 = exports.Digit66 = exports.Digit65 = exports.Digit64 = exports.Digit62 = exports.Digit63 = exports.Digit61 = exports.Digit60 = exports.Digit59 = exports.Digit58 = exports.Digit57 = exports.Digit56 = exports.Digit55 = exports.Digit54 = exports.Digit53 = exports.Digit52 = exports.Digit51 = exports.Digit50 = void 0;
exports.base100Map = void 0;
exports.Digit0 = '0';
exports.Digit1 = '1';
exports.Digit2 = '2';
exports.Digit3 = '3';
exports.Digit4 = '4';
exports.Digit5 = '5';
exports.Digit6 = '6';
exports.Digit7 = '7';
exports.Digit8 = '8';
exports.Digit9 = '9';
exports.Digit10 = 'A';
exports.Digit11 = 'B';
exports.Digit12 = 'C';
exports.Digit13 = 'D';
exports.Digit14 = 'E';
exports.Digit15 = 'F';
exports.Digit16 = 'G';
exports.Digit17 = 'H';
exports.Digit18 = 'I';
exports.Digit19 = 'J';
exports.Digit20 = 'K';
exports.Digit21 = 'L';
exports.Digit22 = 'M';
exports.Digit23 = 'N';
exports.Digit24 = 'O';
exports.Digit25 = 'P';
exports.Digit26 = 'Q';
exports.Digit27 = 'R';
exports.Digit28 = 'S';
exports.Digit29 = 'T';
exports.Digit30 = 'U';
exports.Digit31 = 'V';
exports.Digit32 = 'W';
exports.Digit33 = 'X';
exports.Digit34 = 'Y';
exports.Digit35 = 'Z';
exports.Digit36 = 'a';
exports.Digit37 = 'b';
exports.Digit38 = 'c';
exports.Digit39 = 'd';
exports.Digit40 = 'e';
exports.Digit41 = 'f';
exports.Digit42 = 'g';
exports.Digit43 = 'h';
exports.Digit44 = 'i';
exports.Digit45 = 'j';
exports.Digit46 = 'k';
exports.Digit47 = 'l';
exports.Digit48 = 'm';
exports.Digit49 = 'n';
exports.Digit50 = 'o';
exports.Digit51 = 'p';
exports.Digit52 = 'q';
exports.Digit53 = 'r';
exports.Digit54 = 's';
exports.Digit55 = 't';
exports.Digit56 = 'u';
exports.Digit57 = 'v';
exports.Digit58 = 'w';
exports.Digit59 = 'x';
exports.Digit60 = 'y';
exports.Digit61 = 'z';
exports.Digit63 = '🌟';
exports.Digit62 = '😄';
exports.Digit64 = '💡';
exports.Digit65 = '🎉';
exports.Digit66 = '🚀';
exports.Digit67 = '🌈';
exports.Digit68 = '📚';
exports.Digit69 = '🎨';
exports.Digit70 = '🎵';
exports.Digit71 = '🍎';
exports.Digit72 = '🏀';
exports.Digit73 = '🐶';
exports.Digit74 = '🐱';
exports.Digit75 = '🌺';
exports.Digit76 = '☕';
exports.Digit77 = '🚲';
exports.Digit78 = '🍕';
exports.Digit79 = '🎁';
exports.Digit80 = '🎈';
exports.Digit81 = '🌍';
exports.Digit82 = '⏰';
exports.Digit83 = '🍫';
exports.Digit84 = '🍓';
exports.Digit85 = '🏖️';
exports.Digit86 = '📘';
exports.Digit87 = '🧩';
exports.Digit88 = '🖼️';
exports.Digit89 = '🧁';
exports.Digit90 = '🎤';
exports.Digit91 = '🚗';
exports.Digit92 = '🍉';
exports.Digit93 = '🏡';
exports.Digit94 = '💼';
exports.Digit95 = '🌙';
exports.Digit96 = '🍂';
exports.Digit97 = '⛄';
exports.Digit98 = '🕶️';
exports.Digit99 = '🎂';
exports.base100Map = {
    0: exports.Digit0,
    1: exports.Digit1,
    2: exports.Digit2,
    3: exports.Digit3,
    4: exports.Digit4,
    5: exports.Digit5,
    6: exports.Digit6,
    7: exports.Digit7,
    8: exports.Digit8,
    9: exports.Digit9,
    10: exports.Digit10,
    11: exports.Digit11,
    12: exports.Digit12,
    13: exports.Digit13,
    14: exports.Digit14,
    15: exports.Digit15,
    16: exports.Digit16,
    17: exports.Digit17,
    18: exports.Digit18,
    19: exports.Digit19,
    20: exports.Digit20,
    21: exports.Digit21,
    22: exports.Digit22,
    23: exports.Digit23,
    24: exports.Digit24,
    25: exports.Digit25,
    26: exports.Digit26,
    27: exports.Digit27,
    28: exports.Digit28,
    29: exports.Digit29,
    30: exports.Digit30,
    31: exports.Digit31,
    32: exports.Digit32,
    33: exports.Digit33,
    34: exports.Digit34,
    35: exports.Digit35,
    36: exports.Digit36,
    37: exports.Digit37,
    38: exports.Digit38,
    39: exports.Digit39,
    40: exports.Digit40,
    41: exports.Digit41,
    42: exports.Digit42,
    43: exports.Digit43,
    44: exports.Digit44,
    45: exports.Digit45,
    46: exports.Digit46,
    47: exports.Digit47,
    48: exports.Digit48,
    49: exports.Digit49,
    50: exports.Digit50,
    51: exports.Digit51,
    52: exports.Digit52,
    53: exports.Digit53,
    54: exports.Digit54,
    55: exports.Digit55,
    56: exports.Digit56,
    57: exports.Digit57,
    58: exports.Digit58,
    59: exports.Digit59,
    60: exports.Digit60,
    61: exports.Digit61,
    62: exports.Digit62,
    63: exports.Digit63,
    64: exports.Digit64,
    65: exports.Digit65,
    66: exports.Digit66,
    67: exports.Digit67,
    68: exports.Digit68,
    69: exports.Digit69,
    70: exports.Digit70,
    71: exports.Digit71,
    72: exports.Digit72,
    73: exports.Digit73,
    74: exports.Digit74,
    75: exports.Digit75,
    76: exports.Digit76,
    77: exports.Digit77,
    78: exports.Digit78,
    79: exports.Digit79,
    80: exports.Digit80,
    81: exports.Digit81,
    82: exports.Digit82,
    83: exports.Digit83,
    84: exports.Digit84,
    85: exports.Digit85,
    86: exports.Digit86,
    87: exports.Digit87,
    88: exports.Digit88,
    89: exports.Digit89,
    90: exports.Digit90,
    91: exports.Digit91,
    92: exports.Digit92,
    93: exports.Digit93,
    94: exports.Digit94,
    95: exports.Digit95,
    96: exports.Digit96,
    97: exports.Digit97,
    98: exports.Digit98,
    99: exports.Digit99
};
