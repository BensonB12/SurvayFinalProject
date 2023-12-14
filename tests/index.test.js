"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
describe("testing index file", () => {
    test('getCards with no arguments should resolve to an object with a "cards" property', () => {
        return expect((0, index_1.getCards)()).resolves.toEqual(expect.objectContaining({
            cards: expect.any(Array),
        }));
    });
    test("the first card should have specific properties", () => {
        return expect((0, index_1.getCards)().then((data) => data.cards[0])).resolves.toEqual(expect.objectContaining({
            artist: expect.any(String),
            cmc: expect.any(Number),
        }));
    });
    test("the first card should Ancestor's Chosen", () => {
        return expect((0, index_1.getCards)().then((data) => data.cards[0])).resolves.toEqual(expect.objectContaining({
            artist: expect.stringMatching("Pete Venters"),
            name: expect.stringMatching("Ancestor's Chosen"),
            power: expect.stringMatching("4"),
        }));
    });
});
