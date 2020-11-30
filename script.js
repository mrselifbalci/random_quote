// create variables containing strings
//Use an array to hold the value of the quotes

let quoteOne =
  "Beware of what you become in pursuit of what you want. - Jim Rohn";
let quoteTwo =
  "It's not what happens to you, but how you react to it that matters. - Epictetus";
let quoteThree = "The best revenge is massive success. - Frank Sinatra";
let quoteFour = "You miss 100% of the shots you don't take. - Wayne Gretzy";
let quoteFive =
  "Resentment is like drinking poison and waiting for your enemies to die. - Nelson Mandela";
let quoteSix =
  "Do not take life too seriously. You will not get out alive. - Elbert Hubbard";

let quotes = [
  quoteOne,
  quoteTwo,
  quoteThree,
  quoteFour,
  quoteFive,
  quoteSix,
].sort();

let days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const random = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

console.log(
  `Today is ${random(days)} and today's quote is '${random(quotes)}'.`
);
