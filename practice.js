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

