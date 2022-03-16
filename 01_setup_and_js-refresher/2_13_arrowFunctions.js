// typical:
function myFnc() {}

// arrow:
const myFnct = () => {};
// in the arrow function, the "this" keyword does not change. It works as you think it should

function printMyName(name) {
  console.log(name);
}

printMyName("Max");

const printMyBike = (bike) => {
  console.log(bike);
};

printMyBike("KLR650");

// ^^^^ Shorter version below!
// 1. can omit () around parameter passed to function if only 1
//    a. if passing nothing, use an empty ()

const printMyCar = (car) => console.log(car);

// if returning a value on a single line, omit the 'return'

const multByTwo = (number) => {
  return number * 2;
};

// This can be reduced....
const multByThree = (number) => number * 3;
// const multByThree = number => number * 3;

// ^^^^ FYI: The "Prettier" extension automatically puts the () around the parameter passed to the function
