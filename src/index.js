"use strict";
// Axios https://rapidapi.com/guides/call-apis-using-axios-in-typescript
Object.defineProperty(exports, "__esModule", { value: true });
exports.tuples = exports.advancedMathmatics = exports.interprilatingStrings = void 0;
var axios = require('axios');
function getCards(name, layout, cmc, colors, colorIdentity, type, // UTF8 ‘long dash’
supertypes, types, subtypes, rarity, set, setName, text, flavor, artist, number, power, toughness, loyalty, language, gameFormat, legality, page, pageSize, orderyBy, random, contains, id, mulitiverseid) {
    if (name === void 0) { name = ''; }
    if (layout === void 0) { layout = ''; }
    if (cmc === void 0) { cmc = ''; }
    if (colors === void 0) { colors = ''; }
    if (colorIdentity === void 0) { colorIdentity = ''; }
    if (type === void 0) { type = ''; }
    if (supertypes === void 0) { supertypes = ''; }
    if (types === void 0) { types = ''; }
    if (subtypes === void 0) { subtypes = ''; }
    if (rarity === void 0) { rarity = ''; }
    if (set === void 0) { set = ''; }
    if (setName === void 0) { setName = ''; }
    if (text === void 0) { text = ''; }
    if (flavor === void 0) { flavor = ''; }
    if (artist === void 0) { artist = ''; }
    if (number === void 0) { number = ''; }
    if (power === void 0) { power = ''; }
    if (toughness === void 0) { toughness = ''; }
    if (loyalty === void 0) { loyalty = ''; }
    if (language === void 0) { language = ''; }
    if (gameFormat === void 0) { gameFormat = ''; }
    if (legality === void 0) { legality = ''; }
    if (page === void 0) { page = ''; }
    if (pageSize === void 0) { pageSize = '50'; }
    if (orderyBy === void 0) { orderyBy = ''; }
    if (random === void 0) { random = 'false'; }
    if (contains === void 0) { contains = ''; }
    if (id === void 0) { id = ''; }
    if (mulitiverseid === void 0) { mulitiverseid = ''; }
    var options = {
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
        .then(function (_a) {
        var data = _a.data;
        console.log(data);
    })
        .catch(function (error) {
        console.error(error);
    });
}
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
getCards();
