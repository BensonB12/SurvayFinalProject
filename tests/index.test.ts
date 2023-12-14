import { getCards, makeNonExclusive } from "../src/index";
const { JSDOM } = require('jsdom');

describe("testing index file", () => {
  test('getCards with no arguments should resolve to an object with a "cards" property', () => {
    return expect(getCards()).resolves.toEqual(
      expect.objectContaining({
        cards: expect.any(Array),
      })
    );
  });

  test("the first card should have specific properties", () => {
    return expect(getCards().then((data) => data.cards[0])).resolves.toEqual(
      expect.objectContaining({
        artist: expect.any(String),
        cmc: expect.any(Number),
      })
    );
  });

  test("the first card should Ancestor's Chosen", () => {
    return expect(getCards().then((data) => data.cards[0])).resolves.toEqual(
      expect.objectContaining({
        artist: expect.stringMatching("Pete Venters"),
        name: expect.stringMatching("Ancestor's Chosen"),
        power: expect.stringMatching("4"),
      })
    );
  });

  test("I return the right string from makeNonExclusive", () => {
    const dom = new JSDOM();
    const document = dom.window.document;
    const el1 = document.createElement("input");
    el1.value = "W";
    const el2 = document.createElement("input");
    el2.value = "U";
    return expect(makeNonExclusive([el1, el2])).toBe("W|U");
  });
});
