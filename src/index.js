"use strict";
// Axios https://rapidapi.com/guides/call-apis-using-axios-in-typescript
Object.defineProperty(exports, "__esModule", { value: true });
exports.tuples = exports.advancedMathmatics = exports.interprilatingStrings = void 0;
const axios = require('axios');
function getCards(name = '', layout = '', cmc = '', colors = '', colorIdentity = '', type = '', // UTF8 ‘long dash’
supertypes = '', types = '', subtypes = '', rarity = '', set = '', setName = '', text = '', flavor = '', artist = '', number = '', power = '', toughness = '', loyalty = '', language = '', gameFormat = '', legality = '', page = '', pageSize = '50', orderyBy = '', random = 'false', contains = '', id = '', mulitiverseid = '') {
    const options = {
        method: 'Get',
        url: 'https://api.magicthegathering.io/v1/cards?',
        params: {
            name: name,
            layout: layout,
            cmc: cmc,
            colors: colors,
            colorIdentity: colorIdentity,
            type: type,
            supertypes: supertypes,
            types: types,
            subtypes: subtypes,
            rarity: rarity,
            set: set,
            setName: setName,
            text: text,
            flavor: flavor,
            artist: artist,
            number: number,
            power: power,
            toughness: toughness,
            loyalty: loyalty,
            language: language,
            gameFormat: gameFormat,
            legality: legality,
            page: page,
            pageSize: pageSize,
            orderyBy: orderyBy,
            random: random,
            contains: contains,
            id: id,
            mulitiverseid: mulitiverseid
        },
        headers: {},
    };
    axios
        .request(options)
        .then(function ({ data }) {
        console.log(data);
    })
        .catch(function (error) {
        console.error(error);
    });
}
const world = 'World';
function interprilatingStrings(who = world) {
    // Interprilating strings
    return `Hello ${who}!`;
}
exports.interprilatingStrings = interprilatingStrings;
function advancedMathmatics(a, b, c) {
    // Using advanced math method
    return a ** 2 * b / Math.sqrt(c);
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
getCards();
