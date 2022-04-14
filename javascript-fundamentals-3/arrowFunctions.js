// Arrow functions

/* Syntax:

let func = (arg1,arg2,...) => expression;

*/

//Example

let sum = (a,b) => a + b;

console.log(sum(1,2));

//Mutli-line arrow functions
// Sometimes for a more complex arrow function you will need multiple lines, you must use curly braces like in function declaration and a return statement must be used to return a value

let sum2 = (a,b) => {
    let result = a+b;
    return result;
};

console.log(sum2(5,5));