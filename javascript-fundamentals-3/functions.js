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

/*function() {
    console.log('Anonymous function')
}
*/

    //This is called an anonymous function, because it has no name. You will often see anonymous functions when a function expects to recieve another function as a parameter. This form of creating a function is also known as function expression. It is NOT hoisted.

let textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");

textBox.addEventListener('keydown', event => output.textContent = `You pressed "${event.key}".`);

// If you pass an anonymous, there's an alternative form you can use called an arrow function. If possible used arrow functions over function declaration ( function() ). They can make code shorter and more readable.
    
// When you create a function, the variables and other things defined inside the function are inside their own seperate scope, meaning they are locked away in their own seperate compartments, unreachable from code outside the functions.

// The top level outside of all your functions is called the global scope. Values defined in the global scope are accessible from everywhere in the code

//JavaScript is set up like this for various reason but mainly for security and organization. Calling external scriots could cause problems if you happened to be using same variable names as other parts of the code.

//Keeping parts of your code locked away in functions avoids such problems, and is considered the best practice.
    

