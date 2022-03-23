
// Boolean result

let result = 5 > 4;
console.log(result);

// String comparison

console.log('z' > 'Z'); // true 
console.log( 'Hello' > 'He'); //true
console.log('Game' > 'Gank') // false

// Comparisons of different types

console.log('2' > 1); // true, 2 is converted into a number 2

console.log('01' == 1); // true, 01 is converted to a number 1

console.log( true == 1); // true
console.log( false == 0 ); // true

// Strict equality

console.log( 0 == false); // true,regular equality

console.log('' == false); //true
// operands of different types are converted to numbers by the equality operator, this is where the strict equality operator comes in. It checks equality without type conversion

console.log( 0 === false); // false since types are different

// Comparison with null and undefined

console.log( null === undefined); // false

console.log( null == undefined); // true

// for maths and other comparisons < > <= >=, null/undefined are converted to numbers.
// null becomes 0 and undefined becomes NaN

console.log( null > 0 );  //false
console.log( null == 0 ); //false
console.log( null >= 0 ); // true

// null is converted to 0 only through comparisons not equality operator.
// the equality check is defines that null and undefined equal each other and do not equal anything else

// Don't compare undefined to any other values. 

console.log( undefined > 0 ); // false
console.log( undefined < 0 ); //false
console.log( undefined == 0 ); // false

// comparisons return false because undefined is converted to NaN and NaN is a special numeric value which returns false for all comparisons

// equality check for undefined returns false because undefined only equals null and no other value

// Practice

console.log( 5 > 4); // true
console.log('apple' > 'pineapple'); //false
console.log('2' > '12'); // true, since both types are strings it will compares characters, '2' is greater than '1'
console.log(undefined == null); // true
console.log(undefined === null); // false
console.log( null == '\n0\n'); // false
console.log(null === +'\n0\n'); // false