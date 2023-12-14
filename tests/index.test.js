"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../src/index");
describe('testing index file', () => {
    test('InterpilatingStrings works, should be Hello World', () => {
        expect((0, index_1.interprilatingStrings)()).toBe('Hello World!');
    });
});
describe('testing index file', () => {
    test('a = 3, b = 2, c = 1 should be 18', () => {
        expect((0, index_1.advancedMathmatics)(3, 2, 1)).toBe(18);
    });
});
describe('testing index file', () => {
    test('empty string should result in zero', () => {
        expect((0, index_1.tuples)('benson', 21)).toBe(['benson', 21]);
    });
});
