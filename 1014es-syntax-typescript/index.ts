// Oefeningen ES Syntax

import { log } from "console";

// 1. Array mathodes (map, filter, reduce, some, every, forEach)

// Oefening 1:
// Gegeven: Array van temperatruen in Celsius:
const temperaturesInCelsius: number[] = [0, 15, 22, -5, 30];

// Gebruik nu een methode om een nieuwe array te creëren met deze temperaturen omgezet naar Fahrenheit.
// Formule: Fahrenheit = Celcius * 9/5 + 32
const temperaturesInFahrenheit: number[] = temperaturesInCelsius.map((e) => {
  return (e * 9) / 5 + 32;
});
//console.log(temperaturesInFahrenheit);

// Oefening 2:
// Gegeven: Array van nummers:
const nummers: number[] = [3, 6, 8, 10, 15, 20];

// Gebruik nu een methode om een nieuwe array terug te geven waarin enkel nog maar even getallen in zitten.
const filteredNumbers = nummers.filter((number: number) => {
  return number % 2 === 0;
});
//console.log(filteredNumbers);

// Oefening 3:
// Gegeven: Array van student objecten
interface Student {
  voornaam: string;
  achternaam: string;
  leeftijd: number;
  isGeverifieerd: boolean;
}
const studenten: Student[] = [
  {
    voornaam: "Emma",
    achternaam: "De Vries",
    leeftijd: 20,
    isGeverifieerd: true,
  },
  {
    voornaam: "Liam",
    achternaam: "Janssen",
    leeftijd: 22,
    isGeverifieerd: false,
  },
  {
    voornaam: "Sofie",
    achternaam: "Bakker",
    leeftijd: 19,
    isGeverifieerd: true,
  },
  {
    voornaam: "Noah",
    achternaam: "Visser",
    leeftijd: 21,
    isGeverifieerd: false,
  },
  {
    voornaam: "Julia",
    achternaam: "Smit",
    leeftijd: 23,
    isGeverifieerd: true,
  },
];

// Gebruik nu een methode om alle leeftijden op te tellen van de studenten die geverifieerd zijn (dus enkel waarbij isGeverifieerd = true).
const aggregateAgesOfVerifiedStudents = studenten
  .filter((e) => e.isGeverifieerd === true)
  .map((e) => e.leeftijd)
  .reduce((acc: number, value: number) => acc + value);
//console.log(aggregateAgesOfVerifiedStudents);

// 2. Destructuring

// Oefening 1:
// Gegeven: Een student object
interface Scores {
  web1: number;
  web2: number;
  web3: number;
  mobile: number;
}
interface Student2 {
  voornaam: string;
  achternaam: string;
  scores: Scores;
}
const student: Student2 = {
  voornaam: "John",
  achternaam: "Doe",
  scores: {
    web1: 12,
    web2: 15,
    web3: 10,
    mobile: 8,
  },
};

// Gebruik destructuring om de volgende variabelen voornaam, achternaam en mobile (score) uit het object te halen.
const {
  voornaam,
  achternaam,
  scores: { mobile },
} = student;
// console.log(voornaam);
// console.log(achternaam);
// console.log(mobile);

// Oefening 2:
// Gegeven: De coördinaten array
const coordinaten: number[] = [12.5, 45.3, 7.8, 4.25, 50.487];

// Gebruik destructuring om de eerste twee variabelen toe te wijzen aan x en y, en de rest aan een array rest.
const [x, y, ...rest] = coordinaten;
//console.log(x, y, rest);

// 3. Rest parameter en spread operator

// Oefening 1:
// Gegeven: Twee objecten (persoon, contact)
interface Persoon {
  naam: string;
  leeftijd: number;
}
const persoon: Persoon = {
  naam: "Tom",
  leeftijd: 34,
};
interface Contact {
  email: string;
  telefoon: string;
}
const contact: Contact = {
  email: "tom@example.com",
  telefoon: "1234567890",
};
interface Profile {
  naam: string;
  leeftijd: number;
  email: string;
  telefoon: string;
}

// FIXME: Voor de interface van het Profile zou je ook het volgende kunnen doen
// Zodanig dat je de properties niet meer opnieuw hoeft te typen ;-)

// interface Profile extends Persoon {
//   email: string;
//   telefoon: string;
// }

const volledigProfiel: Profile = { ...persoon, ...contact };
//console.log(volledigProfiel);

// Oefening 2:
// Gegeven: /

// Schrijf een functie berekenGemiddelde() die een onbekend aantal parameters accepteert met behulp van de rest-parameter en het gemiddelde van deze nummers retourneert.
// Test dit uit op de nummers array van sectie 1 / oefening 2.

// FIXME: Beter dat je de args ook zou typen bijvoorbeeld
//  const berekenGemiddelde = (...args: number[]) => {

const berekenGemiddelde = (...args: number[]) => {
  if (Array.isArray(args[0])) {
    args = args[0];
  }
  const sum = args.reduce((acc, value) => acc + value, 0);
  return args.length > 0 ? sum / args.length : 0;
};
//console.log(berekenGemiddelde(nummers));

// 4. Callbacks

// Oefening 1:
// Gegeven: /

// Schrijf een functie verwerkData(data, callback) die een data-array en een callback-functie accepteert. De functie moet de callback toepassen op elk element in de data-array met behulp van de forEach() methode.
// Voorbeeld van een callback functie: een functie die elk item vermenigvuldigt met 75.

// FIXME: Ook hierbij beter je functie typen

// const verwerkData = (data: number[], callback: (element: number) => number): number[] => {

// OFWEL

// const verwerkData: (data: number[], callback: (element: number) => number) => number[] = (data, callback) => {

// Natuurlijk kan je dit ook een in een aparate type steken zodanig dat je het volgende zou kunnen doen

// type VerwerkDataFn = (data: number[], callback: (element: number) => number) => number[];
// const verwerkData: VerwerkDataFn = (data, callback) => {

const verwerkData = (
  data: number[],
  callback: (element: number) => number
): number[] => {
  let tempArr = [];
  data.forEach((e) => {
    tempArr.push(callback(e));
  });
  return tempArr;
};
//console.log(verwerkData(nummers, (e) => e * 75));

// 5. Promises

// Oefening 1:
// Gegeven: Voorraad array met productId's in.
const voorraad: string[] = [
  "prodA3F9",
  "prodZ7K2",
  "prodX8P1",
  "prodQ6M4",
  "prodL9V7",
  "prodB2N5",
  "prodH5Y8",
  "prodC1D6",
  "prodE4S3",
  "prodT7J9",
  "prodU0G2",
  "prodI3H5",
  "prodO6L8",
  "prodP9A1",
  "prodS2B4",
  "prodD5C7",
  "prodF8E0",
  "prodG1I3",
  "prodJ4K6",
  "prodK7M9",
  "prodM0O2",
  "prodN3Q5",
  "prodR6T8",
  "prodV9W1",
  "prodY2Z4",
];

// Schrijf een functie controleerVoorraad(productId) die een Promise retourneert.
// Als het product op voorraad is (gebruik de voorraad array om te checken of een gegeven productId in deze array zit met een array methode),
// resolve de Promise met het bericht "Product is op voorraad".
// Zo niet reject met "Product is niet op voorraad.".
// Gebruik then en catch om het resultaat te verwerken.

const controleerVoorraad = (productId: string) => {
  let result: boolean = voorraad.includes(productId);
  const promise: Promise<void> = new Promise((resolve, reject) => {
    if (result) resolve();
    else reject();
  });
  promise
    .then(() => console.log("Product is op voorraad"))
    .catch(() => console.log("Product is niet op vooraad"));
  return promise;
};

// Test nu uw functie met deze twee aanroepen.
// controleerVoorraad("prodJ4K6");
// controleerVoorraad("prodXGT8");

// 6. Async en await

// Oefening 1:
// Gegeven: /

// Schrijf een async functie controleerVoorraadAsync die de controleerVoorraad functie gebruikt uit de vorige sectie maak gebruik van async en await.
// Zorg ervoor dat je de Promise correct afhandelt en eventuele fouten opvangt met een try/catch block.
const controleerVoorraadAsync = async (productId: string) => {
  try {
    await controleerVoorraad(productId);
  } catch {}
};
// controleerVoorraadAsync("prodJ4K6");
// controleerVoorraadAsync("prodXGT8");

// Oefening 2:
// Gegeven: /

// Schrijf een functie simuleerVerzending(email) (PROMISE) die na 1 seconde een bericht retourneert dat de e-mail is verzonden naar het opgegeven emailadres.
// Schrijf een async functie verzendEmail(email) gebruik await om te wachten op het resultaat van de simuleerVerzending(email) functie en log het bericht.
const simuleerVerzending = (email: string) => {
  const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      const result: boolean = true;
      if (result) resolve(`Email is succesvol verzonden naar ${email}`);
      else reject(`Email is niet succesvol verzonden naar ${email}`);
    }, 3000);
  });

  // FIXME: Hier zou ik gewoon de promise returnen zodanig dat je in de verzendmail functie kunt wachten op dit resultaat
  // return promise;
  return promise;
};

const verzendEmail = async (email: string) => {
  try {
    const promise = await simuleerVerzending(email);
    console.log(promise);
  } catch (e) {
    console.log(e);
  }
};

// Test de functie
verzendEmail("voorbeeld@example.com");
