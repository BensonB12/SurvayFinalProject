// Axios https://rapidapi.com/guides/call-apis-using-axios-in-typescript

// npm install axios 

// npm i --save-dev @types/node

import {CardResponse} from 'responseObjects.ts';

const axios = require('axios');

function getCards(
    name:          string = '',
    layout:        string = '',
    cmc:           string = '',
    colors:        string = '',
    colorIdentity: string = '',
    type:          string = '', // UTF8 ‘long dash’
    supertypes:    string = '',
    types:         string = '',
    subtypes:      string = '',
    rarity:        string = '',
    set:           string = '',
    setName:       string = '',
    text:          string = '',
    flavor:        string = '',
    artist:        string = '',
    number:        string = '',
    power:         string = '',
    toughness:     string = '',
    loyalty:       string = '',
    language:      string = '',
    gameFormat:    string = '',
    legality:      string = '',
    page:          string = '',
    pageSize:      string = '50',
    orderyBy:      string = '',
    random:        string = 'false',
    contains:      string = '',
    id:            string = '',
    mulitiverseid: string = ''
    ) {
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
        .then(function ({ data }: {data: CardResponse}) {
            console.log(data);
        })
        .catch(function (error: any) {
            console.error(error);
        });
}




const world = 'World';

export function interprilatingStrings(who: string = world): string {
    // Interprilating strings
    return `Hello ${who}!`;
} 

export function advancedMathmatics(a: number, b: number, c: number ): number {
    // Using advanced math method
    return a**2 * b / Math.sqrt(c);
}

export function tuples(a: string, b: number): [string, number] {
    // Tuples can be used in typescript
    return [a, b];
}

console.log(interprilatingStrings());
console.log(advancedMathmatics(3, 2, 1));
console.log(tuples('Benson', 21));
getCards();
