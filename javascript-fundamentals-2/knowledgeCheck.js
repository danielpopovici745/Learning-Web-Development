/*

1.What are the eight data types in JavaScript?

    number, bigint, string, boolean, null, undefined, object, symbol

2. Which data type is NOT primitive?

    object, since it can store collections of data and more complex entities. The other data types are primitive since they can only contain one thing

3. What is the relationship between null and undefined?

    null represents 'nothing', 'empty' or 'value unknown'

    undefined means 'value is not assigned'

4. What is the difference betwee single, double, and backtick quotes?

    single and double quotes are same in that they are used to create a string. backticks are used for string concatenation and are called template literal.

5. What is the term for embedding variables/expressions in a string?

    concatenating

6. Which type of quote lets you embed variables/expressions in a string?

    backticks

7. How do you embed variables/expressions in a string?

    let word = 'that is awesome'
    let response = `WOW!, ${word}.`

8. How do you escape characters in a string?

    let response = ' I\'m happy today.'

9. What is the difference between slice/substring/substr string methods?

    slice extracts part of a string and returns the extracted part in a new string. slice(start, end). does not include the end position.

    substring(start,end) is similar to slice except taht substring cannot accept negative indexes.

    substr(start,length) is similar to slice() but the second parameter specifies the length of the exracted string.

10. What are the three logical operators?

    AND && , OR || , NOT !

11. What are the comparison operators?

     == === >= <= !=

12. What are truthy and falsy values?

    Falsy values are values if converted to Boolean will be false. truthy values are values if converted to Boolean will be true.

13. What are the falsy values?

    0, '', null,undefined, NaN

14. What are conditionals?

    Conditionals are statements used to preform different actions based on different conditions

15. What is the syntax for an if/else conditional?

    if (condition){
        code;       
    }
    else{
        code;
    }

16. What is the syntax for a switch statement?

    switch (expression){
        // Have as many cases as youd like
        case choice1:
            code;
            break;
        case choice2:
            code;
            break;
        default: 
        code;
        //runs if no case matches the expression, doesn't require a break since its the end of the switch statement
    }

17. What is the syntax for a ternary operator?

    let value = (a < b) ? alert('wow') : alert('unlucky');
    if a < b is true it will run the code after the ?. If the condition is false it will run the code after the colon.

18. What is nesting?

    nesting is when you have to put multiple conditionals within one another

    if (true){
        if (a < b){
            code;
        }
    }





*/