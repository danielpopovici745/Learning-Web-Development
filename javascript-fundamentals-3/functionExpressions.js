// Function Expression

let sayHi = function(){
    alert('Hello');
};

alert(sayHi);

// Functions are a value

// You can print out the value of a function with alert as shown above.

// You must have the parentheses after the function name in order to invoke. 

// Since function is a value it can be copied to other variables

let func = sayHi;

func();
sayHi();

// semi-colon is needed to completed the assignment statement when using function expression

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  function showOk() {
    alert( "You agreed." );
  }
  
  function showCancel() {
    alert( "You canceled the execution." );
  }
  
// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);

// showOk and showCancel arguments are called callback functions.
// We apss a function and expect it to be 'called back' later if necessary.
// So if the user selected 'yes' it would callback showOk(), and if the user selected 'no' it would callback showCancel().

//Function expressions can be used to write the same function but much shorter

ask(
"Do you agree?",
function() { alert("You agreed."); },
function() { alert("You canceled the execution."); }
);

// Function Expressions vs. Function Declaration

/* Function Delcaration: a function, declared as a seperate statement, in the main code flow.

 function sum(a, b) {
    return a + b;
} 

*/

/* Function Expression: a function, created inside an expression or inside another syntax construct.

let sum = function(a, b) {
  return a + b;
};

*/

// A Function expression is created when the execution reaches it and is usable only from that moment.

// A function declaration can be called earlier than when it is defined.

// Function declaration also has block scope. Meaning anything that is defined within that function is not viewable outside of that function.

//Function declaration should be the first to consider to use since its better for readability, better flexibility with code layout since it is hoisted, and are easier to look up in the code.

