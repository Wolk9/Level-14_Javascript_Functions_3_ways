// Functions: Three ways to write them: Exercise

// way 1:

function way1(number1, number2) {
  return Math.sqrt(Math.sqrt(number1) + Math.sqrt(number2));
}
console.log(way1(8, 9));

// way 2:

const way2 = function (number1, number2) {
  return Math.sqrt(Math.sqrt(number1) + Math.sqrt(number2));
};
console.log(way2(8, 9));

// way 3:

const way3 = (number1, number2) => {
  return Math.sqrt(Math.sqrt(number1) + Math.sqrt(number2));
};
console.log(way3(8, 9));
