// DESTRUCTURING - Extract array elements/obj properties, and store in variables

// ARRAY::: assign respectively (uses indx pos)
let [a, b] = ['Hello', 'Max'];
console.log(a, b);
let [c, d, e] = ['Dude', 'what'];
console.log(c, d, e); // e is UNDEFINED since nothing is assigned

// OBJECT
// let {name} = {name: 'Max', age: 22};  // Age will break this
let {name} = {name: 'Max'};  // Age will break this
console.log(name)

// more array stuff
let numbers = [1, 2, 3, 4]
let [n1, n2] = numbers; // assigns based on index position
console.log(n1, n2)
let [num1, , num3] = numbers; // skips number 1, as nothing is being assigned
console.log(num1, num3);

