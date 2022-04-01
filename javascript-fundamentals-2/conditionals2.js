// switch statements
// pseudocode 

/* 
switch (expression){
    case choice1:
        run this code;
        break;

    case choice2:
        run this code;
        break;

    (include as many cases as you want)

    default:
        actually, just run this code;
}
*/

let choice = 'thunderstorm';

switch (choice){
    case 'sunny':
        console.log('Great weather today!');
        break;
    case 'cloudy':
        console.log('Gloomy out there today!');
        break;
    case 'thunderstorm':
        console.log('Get indoors! Heavy rain should be expected with thunder.');
        break;
    default:
        console.log('I\'m not sure what kind of weather that is but I hope it\'s good');
    
}

/* Ternary operator
    Pseudocode
(condition) ? run this code (if true) : run this code instead  (if false)
*/


