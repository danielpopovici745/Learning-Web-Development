// Problem Solving

/* The best way to improve your problem solving ability is by buidling experience by making lots and lots of programs. The more practice you have the better you'll be prepared to solve real world problems.*/

// Understand the Problem

/* The first step to solving a problem is understanding exactly what the problem is. If you don't understand the problem you won't know when you've successfully solved it.

To gain clarity and understanding of the problem, write it down on paper,reword it in plain English until it makes sense to you, draw diagrams if it helps. When yu can explain the problem to someone in plain English, you understand it.
*/

//Plan

/* Now that you know what you're aiming to solve, don't jump into coding just yet. It's time to plan out how you're going to solve it first. 

Some of the questions you should answer at this stage of the process:

    Does your program have a user interface? What will it look like? What functionality will the interface have? Sketch it out on paper.

    What inputs will your program have? Will the user enter data or will you get input from somewhere else?

    What's the desired output?

    Given your inputs, what are the steps necessary to return the desired output?

The last question is where you will write out an algorithm to solve the problem. You can think of an algorithm as a recipe for solving a particular problem. It defines the steps that need to be taken by the computer to solve a problem in pseudocode.
*/

// Pseudocode

/* Pseudocode is writing out the logic for your program in natural language instead of code. It helps you slow down and think through the steps your program will have to go through to solve the problem.

Example of what pseudocode for a simple program that prints all numbers up to an inputted number might look like:

    When the user inputs a number, initalize a counter variable and set its value, while counter is smaller than user inputted number, print the value of the counter value
*/

// Divide and Conquer

/* From your planning, you should have identified some subproblems of the big problem you're solving. Each of the steps in the algorithm
*/

// FizzBuzz problem

/* Write a program that takes a user's input and prints the numbers from one to the number the user entered. However, for multiples of three prind out Fizz instead of the number and for multiple of five print out Buzz. For numbers which are multiple of three and five print out fizzbuzz
*/

// Reword the problem if neccessary

/* Write a program that allows the user to enter a number, print each number from 1 to the user's number. Any number that is divisible by three without a remainder print out Fizz instead. Any number that is divisible by five without a remainder print out Buzz instead. Any number divisble by 3 and 5 without a remainder print out FizzBuzz instead.*/

// Plan

/* Does your program have an interface? What will it look like? 
    An interface isn't necessary since it will be completed in the browser console. 

What inputs will your program have? Will the user enter data or will you input data from somewhere else? 
    The user will enter a number from a prompt

What's the desired output?
    The desired output is a list of numbers from 1 to the user's number. Except each number that is divisible by 3 will print out Fizz instead. Each number divisible by 5 will print Buzz instead and each number divisible by 3 and 5 will print FizzBuzz instead.

Given your inputs, what are the steps necessary to return the desired output? 
    The algorithm in pseudocode for this problem:

    User inputs a number
    Loop from 1 to the entered number
    If the current loop iteration number is divisible by 3 then print Fizz
    If the current loop iteration is divisible by 5 then print Buzz
    If the current loop iteration is divisible by 3 and 5 print out FizzBuzz
    Otherwise, print the current loop iteration
*/

let answer = parseInt(prompt('Please enter a number you would like to FizzBuzz up to: '));

for (let i =1; i <= answer; i++){
    switch(true){
        case ((i % 3 ===0 ) && (i % 5 === 0)):
            console.log('FizzBuzz');
            break;
        case i % 3 === 0:
            console.log('Fizz');
            break;
        case i % 5 === 0:
            console.log('Buzz');
            break;
        default:
            console.log(i);
    }
}

