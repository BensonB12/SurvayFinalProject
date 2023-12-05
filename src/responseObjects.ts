export interface CardResponse {
    "name": string,             // Archangel Avacyn
    "names": string[],          // 'Archangel Avacyn', 'Avacyn, the Purifier'
    "manaCost": string,         // {3}{W}{W}
    "cmc": number,              // 5
    "colors": string[],         // 'White', 'Black'
    "colorIdentity": string[],  // 'W', 'B'
    "type": string,             // 'Legendary Creature — Angel'
    "supertypes": string[],     // 'Legendary', 'basic'
    "types": string[],          // 'Creature', 'Artifact'
    "suptypes": string[],       // 'Angel', 'Demon'
    "rarity": string,
    "set": string,
    "text": string,
    "artist": string,
    "number": string,
    "power": string,
    "toughness": string,
    "layout": string,
    "multiverseid": number,
    "imageUrl": string,
    "rulings": Ruling[],
    "foreingNames": ForeignName[],
    "printings": string[],
    "originalText": string,
    "originalType": string,
    "id": string
}

export interface Ruling {
    "date": string,
    "text": string
}

export interface ForeignName {
    "name": string,
    "language": string,
    "multiverseid": number
}