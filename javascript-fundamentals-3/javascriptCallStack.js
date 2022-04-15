//JavaScript Call Stack

// JavaScript engine uses a call stack to manage execution contexts: the Global Execution Context and Function Execution Contexts.

// The call stack works based on the LIFO principle, last-in-first-out.

/* When you execute a script JavaScript engine creates a Global Execution Contexts and pushes it on top of the call stack. 

Whenever a function is called, the JavaScript Engine creates a function execution context for the function, pushes it on top of the call stack, and starts executing the function.

If a function calls another function, the JavaScript engine creates a new function execution context for the function that is being called and pushes it on top of the call stack.

When the current function completes, the JavaScript engine pops it off the call stack and resumes the execution where it left off.

The script will stop once the call stack is empty.
*/

//Example

function add(a,b){
    return a+b;
}

function average(a,b){
    return add(a,b) / 2;
}

let x = average(10,20);

/* When the JavaScript engine executes the script, it places the global execution context on the call stack.

    CALL STACK
    


    global()

Now the global execution context begins to execute and executes the called to the average(10,20) function and creates a function execution context for the average() function and pushes it on top of the call stack.

    CALL STACK


    average()
    global()

Now JavaScript engine starts to execute average() since its at the top of the call stack.

The average() function calls add() function. 

Now the JavaScript engine creates another function execution context for the add() function and places it on top of the call stack.

    CALL STACK

    add()
    average()
    global()

Now JavaScript Engine executes the add() function and removes it from the stack. 

    CALL STACK


    average()
    global()

Then, it executes the average() function and removes it off the stack. 

    CALL STACK



    global()

Finally, it executes the rest of global() and stops executing since the call stack is now empty.

    CALL STACK



*/
/* Stack Overflow

The call stack has a fixed size, depending on the implementation of the host enviornment, either the web browser or Node.js.

If the number of the execution contexts exceeds the size of the stack, a stack overflow error will occur.

For example, if you execute a recursive function that has no exit condition, the JavaScript engine will issue a stack overflow error.
*/

/* Asynchronous JavaScript

JavaScript is a single-threaded programming language. This means the JavaScript engine has only one call stack. Therefore, it can only do one thing at a time.

When executing a script, the JavaScript engine executes code from top to bottom, line by line. In other words, it is synchronous.

Asynchronous means the JavaScript engine can execute other tasks while waiting for another task to complete.

For example, JavaScript can:
    Request for data from a remote server
    Display a spinner
    When the data is available, display it on the webpage.

To do this, the JavaScript engine uses an event loop.