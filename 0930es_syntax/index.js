//ES5 Syntax
console.log("---------ES5 Syntax---------");
//FOREACH
const arrCourses = ["Web 1", "Web 2", "Web 3", "Mobile"];

console.log("\nFOR met BREAK");
for (let index = 0; index < arrCourses.length; index++) {
  if (index === 2) {
    break;
  }
  const element = arrCourses[index];
  console.log(element);
}

console.log("\nFOREACH");
arrCourses.forEach((e, i) => console.log(e)); //met de index kun je elementen veranderen indien nodig in een forEach-loop <=> met C#

// const forEachResult = arrCourses.forEach((e, idx) => {
//   console.log(e);
//   // Achter de schermen gebeurt er eigenlijk
//   // return undefined
// });

const arrNumbers = [1, 2, 3, 4, 5];
console.log("\nVoor de map: ", arrNumbers);

const newArr = arrNumbers.map((e) => e * 5);
console.log("Na de map *5: ", newArr);
console.log("Na de map, originele array: ", arrNumbers);

const numberStrArr = arrNumbers.map((e) => e.toString());
console.log("Na de map toString(): ", numberStrArr);

//REDUCE methode
console.log("\nREDUCE");
// const sumOfArr = arrNumbers.reduce((acc, val) => {
//   acc + val;
// });
const sumOfArr = arrNumbers.reduce((acc, val) => acc + val);
console.log("Som van array getallen: ", sumOfArr);

//lege array optellen
const emptyArr = [];
const sumOfEmptyArr = emptyArr.reduce((acc, val) => acc + val, 0); //initiele value toevoegen aan de reduce zodat er geen foutmelding komt
console.log("Som van een lege array: ", sumOfEmptyArr);

//optellen van strings/cijfers als strings
const sumOfStr = numberStrArr.reduce((acc, val) => acc + val); //is gelijk met volgende lijn
const test = arrNumbers.reduce((acc, val) => acc + val, "");
console.log("Som van strings: ", sumOfStr);
//console.log(test);

//enkel oneven getallen optellen
const sumOfUneven = arrNumbers.reduce((acc, val) => {
  if (val % 2 !== 0) return acc + val;
  else return acc;
}, 0);
console.log("Som van oneven getallen in een array: ", sumOfUneven);

//FILTER methode
console.log("\nFILTER");
const filteredCourses = arrCourses.filter((c) => c !== "Web 3");
console.log("Gefilterde courses: ", filteredCourses);

//SOME methode -> minstens 1 element gelijk aan de conditie
console.log("\nSOME");
const isMobileIncluded = arrCourses.some((c) => {
  return c === "Mobile";
});
console.log("Is 'Mobile' in the courses list:", isMobileIncluded);

//EVERY methode
console.log("\nEVERY");
const isEveryMobile = arrCourses.every((c) => {
  return c === "Mobile";
});
console.log("Is 'Mobile' every entry in the courses list:", isEveryMobile);

//ES6 Syntax
console.log("\n\n---------ES6 Syntax---------");

//var declaratie problemen uitleggen
console.log("\nVoorbeeld 1:");
var greeter = "hey hi";
var times = 4;

if (times > 3) {
  var greeter = "say hello instead";
}
console.log(greeter);

console.log("\nVoorbeeld 2:");
function example() {
  console.log(x);
  var x = 1;
  console.log(x);
}
example();

console.log("\nVoorbeeld 3:");
function varTest() {
  for (var i = 0; i < 3; i++) {
    console.log(i);
  }
  console.log(i);
}
varTest();

console.log("\nVoorbeeld 4:");
function doSomething() {
  var myVar = 1;
  if (true) {
    var myVar = 2;
    console.log(myVar);
  }
  console.log(myVar);
}
doSomething();

console.log("\nVoorbeeld 5:");
// for (var i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
// }

const student = {
  firstName: "Stan",
  lastName: "Claeys",
  address: {
    street: "Leeuwstraat 78",
    city: "Ghent",
  },
};
//student.street = "Leeuwstraat 78";
//student = ... kan niet

//REST parameter
console.log("\nREST parameter");
const sum = (...arr) => {
  return arr.reduce((acc, val) => acc + val, 0);
};
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4));

console.log("\nSPREAD operator");
const arr1 = [1, 2, 12];
const arr2 = [3, 4, 5];

//const arr3 = arr1.concat(arr2); --- web2
const arr3 = [...arr1, ...arr2];
console.log(arr3);
const arr4 = [...arr1, ...arr2, ...arrNumbers];
console.log(arr4);
const arr5 = [0, ...arr1, ...arr2, 34];
console.log(arr5);

//een copy van student maken, de operator gebruiken om accolades of brackets verdwijnen
const studentCopy = { ...student };

console.log("\nDESTRUCTURING"); //altijd const gebruiken voor het gemak
const [first, second, third] = arr1;
const [eerste, ...rest] = arr3;
console.log(eerste);
console.log(rest);

const {
  lastName: studentLastName,
  address: { street, city },
} = student; //verschillende naamgeving via : om eventuele problemen op te lossen
console.log(studentLastName);
console.log(city);
//console.log(address); --- kun je niet meer gebruiken want je bent verder gegaan, eventueel toch toevoegen als extra property als je het echt wilt gebruiken

console.log("\nPROMISES");
// const newFunction = (cb) => {
//   cb();
// };

// newFunction(() => {
//   console.log("Test");
// });

// newFunction((a, b) => {
//   return a + b;
// });

//zelfde denken als map
const ownMap = (arr, cb) => {
  let tempArr = [];
  arr.forEach((e) => {
    tempArr.push(cb(e));
  });
  return tempArr;
};

const r1 = ownMap(arr1, (e) => e * 5);
const r2 = ownMap(arr1, (e) => e + 15);
console.log(r1);
console.log(r2);

// setTimeout(() => {
//   console.log("\nBericht na 5 seconden");
// }, 5000);

// setInterval(() => {
//   console.log("\nBericht na 1 seconde");
// }, 1000);

// console.log("Test na timeout");

console.log("\nPROMISES - callbackhell");

//Producing code
const myPromise = new Promise((resolve, reject) => {
  //code die een tijdje kan duren - hier setTimeout om te simuleren
  //vb: connectie met database, file system om een pending request
  setTimeout(() => {
    const result = false;
    if (result) {
      const data = ["Web 1", "Web 2", "Web 3"]; //deze data komt bijvoorbeeld uit uw databank
      resolve(data); //je moet de data meesturen met de resolve, want die is gekoppeld met de .then -> anders kun je niet aan deze info
    } else reject("Fout gebeurd, data niet opgehaald");
  }, 1000);
});

//Consuming code
myPromise
  .then((data) => {
    console.log("Promise was succesvol, ", data);
  })
  .catch((error) => {
    console.log("Promise was niet succesvol.", error);
  })
  .finally(() => {
    console.log("Code wordt altijd uitgevoerd, ongeacht succesvol of fout");
  });

//Simulatie Pizzeria

//Stappen vooraleer de pizza kan geleverd worden
//STAP 1: bestelling opnemen van de klant - 3s
//STAP 2: Deeg uitrollen - 4s
//STAP 3: Ingrediënten toevoegen - 2s
//STAP 4: Pizza in de oven - 10s
//STAP 5: Pizza klaar - 1s

//STAP 1
setTimeout(() => {
  console.log("Bestelling opgenomen van klant");
  //STAP 2
  setTimeout(() => {
    console.log("Deeg is uitgerold");
    //STAP 3
    setTimeout(() => {
      console.log("Ingrediënten zijn toegevoegd");
      //STAP 4
      setTimeout(() => {
        console.log("Pizza is in de oven gelegd");
        //STAP 5
        setTimeout(() => {
          console.log("Pizza is klaar");
        }, 1000);
      }, 10000);
    }, 2000);
  }, 4000);
}, 3000);

//ipv van die zever hierboven, maak 5 promises

//ASYNC AWAIT

//await keyword -> wachten op het resultaat
await myPromise;

//je kan het antwoord ook in een constante steken -> dit is het antwoord uit de .then van de promise
const data = await myPromise; //geen foutafhandeling in deze, dus gebruikmaken van een try-catch blok

try {
  const data = await myPromise;
} catch (error) {
  console.log(error);
}

//als je nu met async wilt werken
//Stap 1: een functie rond de try-catch gezet
//           -> await geeft een foutmelding
//           => async in de functieheader zetten: aan javascript laten weten dat deze functie asynchroon is
const getResult = async () => {
  try {
    const data = await myPromise;
    console.log(data);
    await deegPromise; //functie waar geen return in zit, of er zit een return in maar je wilt er niks mee doen
    const ingredienten = await ingredientsPromise; //functie waarvan je wel iets wilt doen met de returnwaarde
  } catch (error) {
    console.log(error);
  }
};
