const numbers = [2, 4, 6, 8, 9, 7, 3];

// array.map()
const newNumbers = numbers.map(function (item) {
  console.log(item);
  //return  true
});
console.log("map", newNumbers);

// .filter()
const filteredNumbers = numbers.filter(function (item) {
  //return true;
});
console.log("filter", filteredNumbers);

// .forEach()
const arr = numbers.forEach((item) => console.log(item * 2));

console.log(arr);
