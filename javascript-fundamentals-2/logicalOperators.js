// Logical Operators

// || OR

if (1 || 0 ){
    console.log('truthy');
}

// Evaluates operands from left to right
// Converts each operand to boolean, if the results is true, stops and returns the original value of that operand
// If all operands have been evaluated (all false) returns the last operand
// A value is return in its original form, without the conversion

console.log( null || 0 || 1); // will return 1 

let firstName = '';
let lastName = '';
let nickName = 'dannyp';

console.log(firstName||lastName||nickName||'Anonymous'); // This will return 'dannyp' since it has a truthy value. If all 3 varaibles were falsy (empty), it would return 'Anonymous'

// && AND

let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30){
    console.log('The time is 12:30');
}

// Evaluates operands from left to right
// Converts each operand to boolean, if the result is false, it stops evaluating and returns the original value of that operand
// If all operands have been evaluated (all were truthy), it will return the last operand

console.log( 1 && 0); // will return 0 since 1 is truthy and 0 is false. AND operator returns first falsy value

console.log( 1 && 5); // will return 5 since no operands are falsy AND will return the value of the last operand

// AND && has higher precedence than OR ||
// Dont us an && operator to replace an if. if is more readable and more obvious the intention

// ! NOT
// Operator accepts a single argument
// Returns the inverse value

console.log(!true); // returns false
console.log(!0); // true

// a double NOT !! is sometimes used for converting a value to boolean type

console.log( !!"non-empty string"); // true
console.log(!!null); // false

// the first not converts the value to boolean and returns the inverse. then the second not inverses it again

// Theres a more verbose way to do the same thing - a built-in Boolean function

// The precedence of NOT ! is the highest of all logical operators.

// Practice

console.log( null || 2 || undefined); // returns 2

console.log( alert(1) || 2 || alert(3)); // alerts 1 then returns 2

console.log( 1 && null && 2); //returns null

console.log( alert(1) && alert(2)); // alerts 1 then undefined (alert returns undefined)

console.log( null || 2 && 3 || 4); // return 3

let age1 = 90;

if (age1 >= 14 && age1 <=90){
    console.log('Age between 14 and 90 inclusively')
}
else{
    console.log('Age doesn\'t meet requirement');
}

let age2 = 91;

if (!(age2 >=14 && age2 <=90)){
    console.log('Age not between 14 and 90 inclusively.');
}

if (age2 < 14 || age2 > 90){
    console.log('Age not between 14 and 90 inclusively.');
}

// Check the Login

let username = prompt('Please enter username.'); // Asks the user to enter their username

if (username == 'Admin'){
    let password = prompt('Enter your password.'); // Asks user to enter their password
    if (password == 'TheMaster'){
        alert('Welcome!');
    } // if 
    else if(Boolean(password)){
        alert('Wrong Password');
    }
    else{
        alert('Canceled')
    }
    // If password is 'TheMaster' 'Welcome!' will be alerted, if the password isn't correct it will print 'Wrong Password'. If nothing is entered or the user hits ESC it will alert 'Canceled'
}
else if(Boolean(username)){
    alert('I don\'t know you');
} // If username doesn't match 'Admin' it will alert 'I don't know you'
else{
    alert('Canceled')
}
// If username is empty or the ESC key is pressed. It will alert Canceled

