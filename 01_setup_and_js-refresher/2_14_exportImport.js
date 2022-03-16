const person = {
  name: "Max",
};

// example export statements
export default person;
export const clean = () => {
  let a = 1;
};
export const baseData = 10;

// IMPORTS
// default export being imported
import person from "./person.js";

// named export being imported
import { baseData } from "./utility.js";
import { clean } from "./utility.js";

// assign alias to Named Exports
import { baseData as item } from "./another.js";

// import ALL exports from a file:
import * as bundled from "./utility.js";

//
/*
There are two types:
1. Named Exports (zero or more exports per module)
    -Named exports are useful to export several values. 
        During the import, it is mandatory to import them within curly braces with the same name of the corresponding object.
2. Default Exports (one per module)
    But a default export can be imported with any name

FROM MDN:
https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export
====================================================
// Exporting individual features
export let name1, name2, …, nameN; // also var, const
export let name1 = …, name2 = …, …, nameN; // also var, const
export function functionName(){...}
export class ClassName {...}

// Export list
export { name1, name2, …, nameN };

// Renaming exports
export { variable1 as name1, variable2 as name2, …, nameN };

// Exporting destructured assignments with renaming
export const { name1, name2: bar } = o;

// Default exports
export default expression;
export default function (…) { … } // also class, function*
export default function name1(…) { … } // also class, function*
export { name1 as default, … };

// Aggregating modules
export * from …; // does not set the default export
export * as name1 from …; // ECMAScript® 2O20
export { name1, name2, …, nameN } from …;
export { import1 as name1, import2 as name2, …, nameN } from …;
export { default, … } from …;
====================================================


with lines 1-3, 6, and 13...
Lets say the following is in "person.js":
------
    const person = {
    name: "Max",
    };

    export default person;
------
^^ The 'person' constant will ALWAYS be the default export
This allows the variable to be renamed to whatever you want

Now this is a file called 'app.js':
------
    import person from "./person.js";
    import psn from "./person.js";
           ^^^ THIS can be anything you want to call it since it is part of a default export
------

In this case, Imports default and ONLY export of the file
*/
