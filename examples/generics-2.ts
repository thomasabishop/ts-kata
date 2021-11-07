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
    usa: "https://www.littlebrown.com/",
    uk: "https://www.penguin.co.uk/",
    germany: "https://www.aufbau-verlag.de/",
  },
  formats: {
    hardback: true,
    paperback: true,
    audio: true,
  },
  translations: {
    english: "https://www.amazon.com/foundation",
    german: "https://www.amazon.de/foundation",
    french: "https://www.amazon.fr/foundation",
  },
};

function isAvailable<DB>(obj: DB, key: string): boolean {
  return key in obj;
}

function isTranslationAvailable(
  database: Translations,
  translation: string | number
): translation is keyof Translations {
  return translation in database;
}
console.log(isTranslationAvailable(foundation.translations, "french"));
