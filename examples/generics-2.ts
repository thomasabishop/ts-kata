type Translations = {
  [english: string]: string;
  german: string;
  french: string;
};

type Publishers = {
  [usa: string]: string;
  uk: string;
  germany: string;
};

type Formats = {
  [hardback: string]: boolean;
  paperback: boolean;
  audio: boolean;
};

type Book = {
  translations: Translations;
  publishers: Publishers;
  formats: Formats;
};

const foundation: Book = {
  publishers: {
    usa: 'https://www.littlebrown.com/',
    uk: 'https://www.penguin.co.uk/',
    germany: 'https://www.aufbau-verlag.de/',
  },
  formats: {
    hardback: true,
    paperback: true,
    audio: true,
  },
  translations: {
    english: 'https://www.amazon.com/foundation',
    german: 'https://www.amazon.de/foundation',
    french: 'https://www.amazon.fr/foundation',
  },
};

function isAvailable<DB>(database: DB, key: string | number): key is keyof DB {
  return key in database;
}

function isTranslationAvailable(
  database: Translations,
  translation: string | number,
): translation is keyof Translations {
  return translation in database;
}

function attemptGeneric(database: any, subcategory: any, key: any): any {
  return key in database[subcategory];
}
// console.log(isTranslationAvailable(foundation.translations, 'french'));
// console.log(isAvailable(foundation.translations, 'german'));
// console.log(isAvailable(foundation.formats, 'audio'));
console.log(attemptGeneric(foundation, 'translations', 'french'));
console.log(foundation['translations']);
