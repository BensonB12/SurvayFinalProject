"use strict";
// Axios https://rapidapi.com/guides/call-apis-using-axios-in-typescript
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCards = void 0;
// import "../node_modules";
const axios_1 = __importDefault(require("axios"));
//const { CardResponse } = require("./responseObjects.js");
function getCards(name = "", layout = "", cmc = "", colors = "", colorIdentity = "", supertypes = "", types = "", // UTF8 ‘long dash’
subtypes = "", rarity = "", set = "", text = "", flavor = "", artist = "", power = "", toughness = "", loyalty = "", language = "", gameFormat = "", legality = "", page = "", pageSize = "50", orderyBy = "") {
    const options = {
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
    return axios_1.default
        .request(options)
        .then(function ({ data }) {
        return data;
    })
        .catch(function (error) {
        console.error(error);
        throw new Error("Problem with calling my api");
    });
}
exports.getCards = getCards;
function submitForm() {
    //Get all the users input
    const cardNameInput = document.getElementById("cardName");
    const name = getElementValueById("name");
    const layout = getElementValueById("layout");
    const cmc = getElementValueById("cmc"); // Assuming cmc is a number
    const colors = Array.from(document.getElementsByName("color"));
    const colorsExclusive = Boolean(getElementValueById("colorsExclusive"));
    const colorIdentity = Array.from(document.getElementsByName("colorI"));
    const colorIExclusive = Boolean(getElementValueById("colorIExclusive"));
    const types = Array.from(document.getElementsByName("type"));
    const typesExclusive = Boolean(getElementValueById("typesExclusive"));
    const supertypes = Array.from(document.getElementsByName("superType"));
    const supertypesExclusive = Boolean(getElementValueById("supertypesExclusive"));
    const subtypes = Array.from(document.getElementsByName("subType"));
    const subtypesExclusive = Boolean(getElementValueById("subtypesExclusive"));
    const rarity = getElementValueById("rarity");
    const set = getElementValueById("set");
    const text = getElementValueById("text");
    const flavor = getElementValueById("flavor");
    const artist = getElementValueById("artist");
    const power = getElementValueById("power");
    const toughness = getElementValueById("toughness");
    const loyalty = getElementValueById("loyalty");
    const language = getElementValueById("language");
    const gameFormat = getElementValueById("gameFormat");
    const legality = getElementValueById("legality");
    const orderyBy = getElementValueById("orderyBy");
    //Add Colorless to the colors
    colors.push(document.getElementById("colorless"));
    colorIdentity.push(document.getElementById("colorlessI"));
    //Where I am going to put the results
    const displayCards = document.getElementById("displayCards");
    const resultDiv = document.getElementById("anilitics");
    const cardsToDisplay = getCards(name, layout, cmc, colorsExclusive ? colors.toString() : makeNonExclusive(colors), colorIExclusive
        ? colorIdentity.toString()
        : makeNonExclusive(colorIdentity), supertypesExclusive ? supertypes.toString() : makeNonExclusive(supertypes), typesExclusive ? types.toString() : makeNonExclusive(types), subtypesExclusive ? subtypes.toString() : makeNonExclusive(subtypes), rarity, set, text, flavor, artist, power, toughness, loyalty, language, gameFormat, legality).then((data) => data);
    if (displayCards && resultDiv) {
        let s = "";
        let sum = 0;
        cardsToDisplay
            .then((data) => {
            data.cards.forEach((e) => {
                s += `<img src="${e.imageUrl}" alt="${e.name}" />`;
                sum += e.cmc;
            });
            // Display the images
            displayCards.innerHTML = s;
            // Calculate and display the average cmc
            const averageCmc = data.cards.length > 0 ? sum / data.cards.length : 0;
            resultDiv.innerHTML = `<p>Average cmc: ${averageCmc.toFixed(2)}</p>`;
        })
            .catch((error) => {
            // Handle the case where cardsToDisplay is rejected
            console.error(error);
            resultDiv.innerHTML = "<p>Error fetching card data</p>";
        });
    }
}
function makeNonExclusive(a) {
    let s = "";
    for (let i = 0; i < a.length; i++) {
        s += a[i];
        if (i < a.length - 1) {
            s += "|";
        }
    }
    return s;
}
function getElementValueById(id) {
    const element = document.getElementById(id);
    return element ? element.value : "";
}
const world = "World";
function handleColorSelection() {
    const colorlessCheckbox = document.getElementById("colorless");
    const colorCheckboxes = document.getElementsByName("color");
    // If Colorless is checked, uncheck and disable other color checkboxes
    if (colorlessCheckbox.checked) {
        for (let i = 0; i < colorCheckboxes.length; i++) {
            colorCheckboxes[i].checked = false;
            colorCheckboxes[i].disabled = true;
        }
    }
    else {
        // Enable other color checkboxes
        for (let i = 0; i < colorCheckboxes.length; i++) {
            colorCheckboxes[i].disabled = false;
        }
    }
}
function handleColorSelectionForIdentity() {
    const colorlessCheckbox = document.getElementById("colorlessI");
    const colorCheckboxes = document.getElementsByName("colorI");
    // If Colorless is checked, uncheck and disable other color checkboxes
    if (colorlessCheckbox.checked) {
        for (let i = 0; i < colorCheckboxes.length; i++) {
            colorCheckboxes[i].checked = false;
            colorCheckboxes[i].disabled = true;
        }
    }
    else {
        // Enable other color checkboxes
        for (let i = 0; i < colorCheckboxes.length; i++) {
            colorCheckboxes[i].disabled = false;
        }
    }
}
