// SPREAD OPERATOR ----------------------

let array1 = ['a', 'b', 'c'];
let array2 = [...array1, 'd', 'e'];

console.log(array1);
console.log(array2);

const obj1 = { name: "Mike", age: 32}
const obj2 = { ...obj1, gender: 'male'}
const obj3 = { ...obj2, gender: 'female', name: 'Susan'};

console.log(obj1);
console.log(obj2);
console.log(obj3);

// REST OPERATOR -- Used to merge a list of function arguments into an array
// can be an unlimited amount of arguments (rest must come before assigned)
const sortArgs = (...args) => {
  return args.sort();
};

const arr1 = [1, 2, 6, 4, 3, 5];

let sort1 = sortArgs(1, 2, 6, 4, 3, 5);
console.log(sort1);
// NOTE: passing an ARRAY to it will NOT WORK, ie: sortArgs(arr1);


