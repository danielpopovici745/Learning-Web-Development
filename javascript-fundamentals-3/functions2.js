// Function Declaration

function showMessage(){
    console.log('Hello World!');
}

showMessage();

// Local Variables

// These are variables that are declared within a function that can only be viewed inside of that function.

//Global variables, a function can access these anytime. It's a variable that's declared outside of a function. It can even modify them.

//Parameters
// This is data that the function requires in order to run.

//When a value is passed as a function parameter, it's also called an argument. i.e myFunction('hello',x). 'hello' and x are passed into the function.

/*Default Values

If a function is called , but not passed an argument, then the corresponding parameter will become undefined.

We can declare a default value within the function declaration with =.

functiom myFunction(x,y = 'example'){
    return y;
}

You can set a default value to be a more complex expression like another function.

If need be, you can assign default values for parameters later on in the function. By using an if statement or a logical OR ||.
*/

/* Return Values

A function can return a value back into the calling code as the result of the return statement.

If a return statement is empty, it will become undefined. It will also  return undefined if it does not have a return statement.

make sure to include parentheses in the return statement if puting the return value on seperate lines

return (
    'long expression'
    + ' very long'
)


*/

/* Naming a Function

It's widespread practice to start a function with a verbal prefix which vaguely describes the action.

examples:
    showMessages() shows a message
    getAge() returns age
    calcSum() calculates a sume
    createForm() creates a form
    checkPermission() checks a permission 
    and so on...

When creating functions be sure to have it perform only 1 task. For example, if getAge() gets the age of the user it shouldn't also display it.

Splitting multiple tasks into seperate functons also helps with debugging and readability.
*/