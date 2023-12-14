// Axios https://rapidapi.com/guides/call-apis-using-axios-in-typescript

// npm install axios

// npm i --save-dev @types/node
//import { exports, require } from "./myModule.js";
import { CardResponse } from "./responseObjects.js";
// import "../node_modules";
import axios from "axios";
//const { CardResponse } = require("./responseObjects.js");

export function getCards(
  name: string = "",
  layout: string = "",
  cmc: string = "",
  colors: string = "",
  colorIdentity: string = "",
  supertypes: string = "",
  types: string = "", // UTF8 ‘long dash’
  subtypes: string = "",
  rarity: string = "",
  set: string = "",
  text: string = "",
  flavor: string = "",
  artist: string = "",
  power: string = "",
  toughness: string = "",
  loyalty: string = "",
  language: string = "",
  gameFormat: string = "",
  legality: string = "",
  page: string = "",
  pageSize: string = "50",
  orderyBy: string = ""
): Promise<CardResponse> {
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
  return axios
    .request(options)
    .then(function ({ data }: { data: CardResponse }) {
      return data;
    })
    .catch(function (error: any) {
      console.error(error);
      throw new Error("Problem with calling my api");
    });
}

function submitForm() {
  //Get all the users input
  const cardNameInput = document.getElementById("cardName") as HTMLInputElement;
  const name: string = getElementValueById("name");
  const layout: string = getElementValueById("layout");
  const cmc: string = getElementValueById("cmc"); // Assuming cmc is a number
  const colors: HTMLInputElement[] = Array.from(
    document.getElementsByName("color") as NodeListOf<HTMLInputElement>
  );
  const colorsExclusive: boolean = Boolean(
    getElementValueById("colorsExclusive")
  );
  const colorIdentity: HTMLInputElement[] = Array.from(
    document.getElementsByName("colorI") as NodeListOf<HTMLInputElement>
  );
  const colorIExclusive: boolean = Boolean(
    getElementValueById("colorIExclusive")
  );
  const types: HTMLInputElement[] = Array.from(
    document.getElementsByName("type") as NodeListOf<HTMLInputElement>
  );
  const typesExclusive: boolean = Boolean(
    getElementValueById("typesExclusive")
  );
  const supertypes: HTMLInputElement[] = Array.from(
    document.getElementsByName("superType") as NodeListOf<HTMLInputElement>
  );
  const supertypesExclusive: boolean = Boolean(
    getElementValueById("supertypesExclusive")
  );
  const subtypes: HTMLInputElement[] = Array.from(
    document.getElementsByName("subType") as NodeListOf<HTMLInputElement>
  );
  const subtypesExclusive: boolean = Boolean(
    getElementValueById("subtypesExclusive")
  );
  const rarity: string = getElementValueById("rarity");
  const set: string = getElementValueById("set");
  const text: string = getElementValueById("text");
  const flavor: string = getElementValueById("flavor");
  const artist: string = getElementValueById("artist");
  const power: string = getElementValueById("power");
  const toughness: string = getElementValueById("toughness");
  const loyalty: string = getElementValueById("loyalty");
  const language: string = getElementValueById("language");
  const gameFormat: string = getElementValueById("gameFormat");
  const legality: string = getElementValueById("legality");
  const orderyBy: string = getElementValueById("orderyBy");
  //Add Colorless to the colors
  colors.push(document.getElementById("colorless") as HTMLInputElement);
  colorIdentity.push(document.getElementById("colorlessI") as HTMLInputElement);
  //Where I am going to put the results
  const displayCards = document.getElementById("displayCards");
  const resultDiv = document.getElementById("anilitics");

  const cardsToDisplay = getCards(
    name,
    layout,
    cmc,
    colorsExclusive ? colors.toString() : makeNonExclusive(colors),
    colorIExclusive
      ? colorIdentity.toString()
      : makeNonExclusive(colorIdentity),
    supertypesExclusive ? supertypes.toString() : makeNonExclusive(supertypes),
    typesExclusive ? types.toString() : makeNonExclusive(types),
    subtypesExclusive ? subtypes.toString() : makeNonExclusive(subtypes),
    rarity,
    set,
    text,
    flavor,
    artist,
    power,
    toughness,
    loyalty,
    language,
    gameFormat,
    legality
  ).then((data) => data);

  if (displayCards && resultDiv) {
    let s: string = "";
    let sum: number = 0;

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

function makeNonExclusive(a: Array<HTMLInputElement>): string {
  let s: string = "";
  for (let i = 0; i < a.length; i++) {
    s += a[i];
    if (i < a.length - 1) {
      s += "|";
    }
  }
  return s;
}

function getElementValueById(id: string): string {
  const element = document.getElementById(id);
  return element ? (element as HTMLInputElement).value : "";
}

const world = "World";

function handleColorSelection(): void {
  const colorlessCheckbox: HTMLInputElement | null = document.getElementById(
    "colorless"
  ) as HTMLInputElement;
  const colorCheckboxes: NodeListOf<HTMLInputElement> =
    document.getElementsByName("color") as NodeListOf<HTMLInputElement>;

  // If Colorless is checked, uncheck and disable other color checkboxes
  if (colorlessCheckbox.checked) {
    for (let i = 0; i < colorCheckboxes.length; i++) {
      colorCheckboxes[i].checked = false;
      colorCheckboxes[i].disabled = true;
    }
  } else {
    // Enable other color checkboxes
    for (let i = 0; i < colorCheckboxes.length; i++) {
      colorCheckboxes[i].disabled = false;
    }
  }
}

function handleColorSelectionForIdentity(): void {
  const colorlessCheckbox: HTMLInputElement | null = document.getElementById(
    "colorlessI"
  ) as HTMLInputElement;
  const colorCheckboxes: NodeListOf<HTMLInputElement> =
    document.getElementsByName("colorI") as NodeListOf<HTMLInputElement>;

  // If Colorless is checked, uncheck and disable other color checkboxes
  if (colorlessCheckbox.checked) {
    for (let i = 0; i < colorCheckboxes.length; i++) {
      colorCheckboxes[i].checked = false;
      colorCheckboxes[i].disabled = true;
    }
  } else {
    // Enable other color checkboxes
    for (let i = 0; i < colorCheckboxes.length; i++) {
      colorCheckboxes[i].disabled = false;
    }
  }
}
