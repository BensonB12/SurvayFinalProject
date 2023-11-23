"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tuples = exports.advancedMathmatics = exports.interprilatingStrings = void 0;
var world = 'World';
function interprilatingStrings(who) {
    if (who === void 0) { who = world; }
    // Interprilating strings
    return "Hello ".concat(who, "!");
}
exports.interprilatingStrings = interprilatingStrings;
function advancedMathmatics(a, b, c) {
    // Using advanced math method
    return Math.pow(a, 2) * b / Math.sqrt(c);
}
exports.advancedMathmatics = advancedMathmatics;
function tuples(a, b) {
    // Tuples can be used in typescript
    return [a, b];
}
exports.tuples = tuples;
console.log(interprilatingStrings());
console.log(advancedMathmatics(3, 2, 1));
console.log(tuples('Benson', 21));
