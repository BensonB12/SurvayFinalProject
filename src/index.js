"use strict";
// Axios https://rapidapi.com/guides/call-apis-using-axios-in-typescript
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCards = void 0;
//const { CardResponse } = require("./responseObjects.js");
var axios = require("axios");
function getCards(name, layout, cmc, colors, colorIdentity, supertypes, types, // UTF8 ‘long dash’
subtypes, rarity, set, text, flavor, artist, power, toughness, loyalty, language, gameFormat, legality, page, pageSize, orderyBy) {
    if (name === void 0) { name = ""; }
    if (layout === void 0) { layout = ""; }
    if (cmc === void 0) { cmc = ""; }
    if (colors === void 0) { colors = ""; }
    if (colorIdentity === void 0) { colorIdentity = ""; }
    if (supertypes === void 0) { supertypes = ""; }
    if (types === void 0) { types = ""; }
    if (subtypes === void 0) { subtypes = ""; }
    if (rarity === void 0) { rarity = ""; }
    if (set === void 0) { set = ""; }
    if (text === void 0) { text = ""; }
    if (flavor === void 0) { flavor = ""; }
    if (artist === void 0) { artist = ""; }
    if (power === void 0) { power = ""; }
    if (toughness === void 0) { toughness = ""; }
    if (loyalty === void 0) { loyalty = ""; }
    if (language === void 0) { language = ""; }
    if (gameFormat === void 0) { gameFormat = ""; }
    if (legality === void 0) { legality = ""; }
    if (page === void 0) { page = ""; }
    if (pageSize === void 0) { pageSize = "50"; }
    if (orderyBy === void 0) { orderyBy = ""; }
    var options = {
        method: "Get",
        url: "https://api.magicthegathering.io/v1/cards?",
        params: {
            name: name,
            layout: layout,
            cmc: cmc,
            colors: colors,
            colorIdentity: colorIdentity,
            supertypes: supertypes,
            types: types,
            subtypes: subtypes,
            rarity: rarity,
            set: set,
            text: text,
            flavor: flavor,
            artist: artist,
            power: power,
            toughness: toughness,
            loyalty: loyalty,
            language: language,
            gameFormat: gameFormat,
            legality: legality,
            page: page,
            pageSize: pageSize,
            orderyBy: orderyBy,
        },
        headers: {},
    };
    return axios
        .request(options)
        .then(function (_a) {
        var data = _a.data;
        return data;
    })
        .catch(function (error) {
        console.error(error);
    });
}
exports.getCards = getCards;
function submitForm() {
    //Get all the users input
    var cardNameInput = document.getElementById("cardName");
    var name = getElementValueById("name");
    var layout = getElementValueById("layout");
    var cmc = getElementValueById("cmc"); // Assuming cmc is a number
    var colors = Array.from(document.getElementsByName("color"));
    var colorsExclusive = Boolean(getElementValueById("colorsExclusive"));
    var colorIdentity = Array.from(document.getElementsByName("colorI"));
    var colorIExclusive = Boolean(getElementValueById("colorIExclusive"));
    var types = Array.from(document.getElementsByName("type"));
    var typesExclusive = Boolean(getElementValueById("typesExclusive"));
    var supertypes = Array.from(document.getElementsByName("superType"));
    var supertypesExclusive = Boolean(getElementValueById("supertypesExclusive"));
    var subtypes = Array.from(document.getElementsByName("subType"));
    var subtypesExclusive = Boolean(getElementValueById("subtypesExclusive"));
    var rarity = getElementValueById("rarity");
    var set = getElementValueById("set");
    var text = getElementValueById("text");
    var flavor = getElementValueById("flavor");
    var artist = getElementValueById("artist");
    var power = getElementValueById("power");
    var toughness = getElementValueById("toughness");
    var loyalty = getElementValueById("loyalty");
    var language = getElementValueById("language");
    var gameFormat = getElementValueById("gameFormat");
    var legality = getElementValueById("legality");
    var orderyBy = getElementValueById("orderyBy");
    //Add Colorless to the colors
    colors.push(document.getElementById("colorless"));
    colorIdentity.push(document.getElementById("colorlessI"));
    //Where I am going to put the results
    var displayCards = document.getElementById("displayCards");
    var resultDiv = document.getElementById("anilitics");
    var cardsToDisplay = getCards(name, layout, cmc, colorsExclusive ? colors.toString() : makeNonExclusive(colors), colorIExclusive
        ? colorIdentity.toString()
        : makeNonExclusive(colorIdentity), supertypesExclusive ? supertypes.toString() : makeNonExclusive(supertypes), typesExclusive ? types.toString() : makeNonExclusive(types), subtypesExclusive ? subtypes.toString() : makeNonExclusive(subtypes), rarity, set, text, flavor, artist, power, toughness, loyalty, language, gameFormat, legality).then(function (data) { return data; });
    if (displayCards && resultDiv) {
        var s_1 = "";
        var sum_1 = 0;
        cardsToDisplay
            .then(function (data) {
            data.cards.forEach(function (e) {
                s_1 += "<img src=\"".concat(e.imageUrl, "\" alt=\"").concat(e.name, "\" />");
                sum_1 += e.cmc;
            });
            // Display the images
            displayCards.innerHTML = s_1;
            // Calculate and display the average cmc
            var averageCmc = data.cards.length > 0 ? sum_1 / data.cards.length : 0;
            resultDiv.innerHTML = "<p>Average cmc: ".concat(averageCmc.toFixed(2), "</p>");
        })
            .catch(function (error) {
            // Handle the case where cardsToDisplay is rejected
            console.error(error);
            resultDiv.innerHTML = "<p>Error fetching card data</p>";
        });
    }
}
function makeNonExclusive(a) {
    var s = "";
    for (var i = 0; i < a.length; i++) {
        s += a[i];
        if (i < a.length - 1) {
            s += "|";
        }
    }
    return s;
}
function getElementValueById(id) {
    var element = document.getElementById(id);
    return element ? element.value : "";
}
var world = "World";
function handleColorSelection() {
    var colorlessCheckbox = document.getElementById("colorless");
    var colorCheckboxes = document.getElementsByName("color");
    // If Colorless is checked, uncheck and disable other color checkboxes
    if (colorlessCheckbox.checked) {
        for (var i = 0; i < colorCheckboxes.length; i++) {
            colorCheckboxes[i].checked = false;
            colorCheckboxes[i].disabled = true;
        }
    }
    else {
        // Enable other color checkboxes
        for (var i = 0; i < colorCheckboxes.length; i++) {
            colorCheckboxes[i].disabled = false;
        }
    }
}
function handleColorSelectionForIdentity() {
    var colorlessCheckbox = document.getElementById("colorlessI");
    var colorCheckboxes = document.getElementsByName("colorI");
    // If Colorless is checked, uncheck and disable other color checkboxes
    if (colorlessCheckbox.checked) {
        for (var i = 0; i < colorCheckboxes.length; i++) {
            colorCheckboxes[i].checked = false;
            colorCheckboxes[i].disabled = true;
        }
    }
    else {
        // Enable other color checkboxes
        for (var i = 0; i < colorCheckboxes.length; i++) {
            colorCheckboxes[i].disabled = false;
        }
    }
}
