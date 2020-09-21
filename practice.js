/////////////////// Dog Age Calc /////////////////

// const calculateAgeInDogYears = (age) => {
//   const ageInDogYears = age / 7;

//   return ageInDogYears;
// };

// calculateAgeInDogYears(22);

///////////////// Best in Show /////////////////

// const bestInShow = (breed) => {
//   let dogString;
//   if (breed !== 'meow') {
//     dogString = `My favorite dog breed is ${breed}`;
//   } else {
//     dogString = 'I like cats.';
//   }
//   return dogString;
// };

// const myFavorite = bestInShow('meow');
// console.log(`When it comes to pets, ${myFavorite}`);

//////////////// Addition /////////////////

// const add = (b, a, c) => {
//   const sum = a + b + c;
//   return sum;
// };
// const equation = add(17, 4, 11);
// console.log(equation);

//////////// Self Driving Cars /////////////////

// const go = (direction, speed) => {
//   let message;
//   if (speed > 75) {
//     message = `The car is moving ${direction} at ${speed} mph. SLOW DOWN`;
//   } else {
//     message = `The car is moving ${direction} at ${speed} mph.`;
//   }
//   return message;
// };
// const status = go('left', 95);
// console.log(status);

////////////// Evens or Odds /////////////////

// const evenOrOdd = (num) => {
//   let status;
//   if (num % 2 === 0) {
//     status = 'even';
//   } else {
//     status = 'odd';
//   }
//   return status;
// };

// const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 0];

// for (const element of numbers) {
//   console.log(evenOrOdd(element))
// }

// const result = evenOrOdd(5);
// console.log(result);

////////////// Double Functions /////////////////

// const words = [
//   'The',
//   'killing',
//   'complex',
//   'houses',
//   'married',
//   'kittens',
//   'and',
//   'single',
//   'soldiers',
//   'and',
//   'their',
//   'kleptomaniacal',
//   'families',
// ];

// const filter = (taco) => {
//   let filteredWords = [];
//   taco.forEach((item) => {
//     if (item.startsWith('k') === false) {
//       filteredWords.push(item);
//     }
//   });
//   return filteredWords;
// };

// const combine = (arr) => {
//   const string = arr.join(' ');
//   return string;
// }

// const filtered = filter(words);

// const result = combine(filtered);

// console.log(result);

////////////// Tuna /////////////////

// const sven = () => {
//   const attempt = Math.random() * 3;
//   let success;
//   if(attempt < 1) {
//     success = 'Sven hooked a tuna :)';
//   } else {
//     success = 'Sven came up empty handed :(';
//   }
//   return success;
// };
// const fishing = sven();
// console.log(fishing);

////////////// Fast Food /////////////////

// const menu = {
//   sandwich : '',
//   side : '',
//   drink : '',
//   dessert : '',
// };

// const order = (sandwich, side, drink, dessert) => {
//   menu.sandwich = sandwich;
//   menu.side = side;
//   menu.drink = drink;
//   menu.dessert = dessert;
//   return menu;
// }

// const bag = order('big mac', 'fries', 'coke', 'pie');
// console.log(bag);

////////////// Chores /////////////////
const name = {
  firstName: 'Donald',
  lastName: 'McLelland',
};

const weekday = 'Tuesday';

const laundry = (person) =>
  `${person.firstName} ${person.lastName} did the laundry`;
const cleaning = (person) =>
  `${person.firstName} ${person.lastName} cleaned the house`;
const mowLawn = (person) =>
  `${person.firstName} ${person.lastName} mowed the lawn`;
const dishes = (person) =>
  `${person.firstName} ${person.lastName} did the dishes`;
const groceryShopping = (person) =>
  `${person.firstName} ${person.lastName} went grocery shopping`;
const oilChange = (person) =>
  `${person.firstName} ${person.lastName} changed the oil in their car`;

const dayPlanner = (chore, person, day) => {
  const activity = `${chore(person)} on ${day}.`;
  return activity;
};
const lazyDay = dayPlanner(laundry, name, weekday);
console.log(lazyDay);

const busyDayPlanner = (chore1, chore2, chore3, person, day) => {
  const activity = `On ${day}, ${chore1(person)}, and ${chore2(
    person
  )}, and ${chore3(person)}.`;
  return activity;
};
const busyDay = busyDayPlanner(cleaning, mowLawn, dishes, name, weekday);
console.log(busyDay);
