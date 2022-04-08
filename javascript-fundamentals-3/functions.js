/* 

Functions!

They allow us to store a piece of code that does a single task inside a defined block. Then call that code whenever you need it using a single short command.

Functions that are part of objects are called methods.

To actually use a function you;ve got to run or invoke it. This is done by including the name of the function in the code somewhere, followed by parentheses.
*/

function myFunction(){
    console.log('My first function!');
}

myFunction();

/* 

This form of creating a function is also known as function declaration. 

It is always hoisted, so you can call a fucntion above function 
definition and it will work fine.

Some functions require parameters to be specified when you are invoking them - these are values that need to be included inside the function parentheses, which it requires to invoke (run).

Sometimes parameters are called arguments, properties, or even attributes.


*/

const myNumber = Math.random();

console.log(myNumber);

    // the browsers built-in Math.random() function doesn't require any parameters when its invoked. It will always return a random number between 0 and 1.

const myText = 'I am a string';
const newString = myText.replace('string','sausage');
console.log(myText);
console.log(newString);

    // the built-in replace() function requires 2 parameters. the substring to find in the main string and the substring to replace that string with.

const myArray = ['I','love','chocolate','frogs'];
const madeAString = myArray.join(' ')
console.log(madeAString);

const madeAnotherString = myArray.join();
console.log(madeAnotherString);


// the join() function creates and returns a new string by concatenating all of the elements in an array. By default, each element is seperated by a comma unless you enter a specified seperator string (like a space). This function in particular has an optional parameter so it isn't required to invoke.

function hello(name='Daniel'){
    console.log(`Hello ${name}!`);
}

hello('Steve');
hello();

// If you are creating your own function you can specify your own default value by adding = after the name of the parameter.