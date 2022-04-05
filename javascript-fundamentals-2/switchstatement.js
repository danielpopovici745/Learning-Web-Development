// The switch statement evaluates an expression and executes code as a result of a matching case


/*
switch (expression) {
	case x:
		// execute case x code block
		break;
	case y:
		// execute case y code block
		break;
	default:
		// execute default code block
}
*/

// Set the current day of the week to a variable, with 0 being Sunday and 6 being Saturday
const day = new Date().getDay();

switch (day) {
	case 0:
		console.log("It's Sunday, time to relax!");
		break;
	case 1:
		console.log("Happy Monday!");
		break;
	case 2:
		console.log("It's Tuesday. You got this!");
		break;
	case 3:
		console.log("Hump day already!");
		break;
	case 4:
		console.log("Just one more day 'til the weekend!");
		break;
	case 5:
		console.log("Happy Friday!");
		break;
	case 6:
		console.log("Have a wonderful Saturday!");
		break;
	default:
		console.log("Something went horribly wrong...");
}


//Sometimes you want multiple cases to have the some output. Heres an example of how it is done

let x = 2;

switch (x){
    case 0:
    case 1:
        console.log('1');
    case 2:
        console.log('Multiple Cases with the same response.');
    case 3:
    case 4:
            console.log('reee');
}