let num1 = 1;
let num2 = num1;

// primitive types: boolean, numbers, and strings
console.log(num1, num2);

num1 = 2;
console.log(num1, num2);
let num3 = num1;
num1 = 3;
console.log(num1, num2, num3);


// objects & arrays = reference types
const person1 = {
  name: "Max"
};

// person1 data (object stored in memory. Person1 const POINTS to the memory location
// person2 just copies the pointer that person1 has, that points to the object data
let person2 = person1;
console.log(person1, person2)
person1.name = "Sydney";  // this will change the value for BOTH
console.log(person1, person2);

person2.name = 'Max'  // even changing the name on person2, just changes both
console.log(person1, person2);

// person1 = {name: "Sydney"};  // can't do this as it is a CONST, so once assigned, always assigned, SOOO
person1.name = 'Max';
person2 = {name: 'Sydney'}; // this will change person2 as it is NOT a CONST
console.log(person1, person2);

// OR, just use the SPREAD OPERATOR....
const person3 = {...person1};
console.log(person1, person2, person3);
person3.name = 'Ginny';  // now will only change the value for person3, not person1
console.log(person1, person2, person3);