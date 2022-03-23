const name = "Front ";
const number = 242;
console.log(`${name}${number}`);

//

let text = 'Hello world WoRlD WORLD worlD';

let newtext = text.replace(/world/ig,'everyone');

console.log(`${text}
${newtext}`);

//

let textU = text.toUpperCase();

console.log(`${textU}`);

//

let textL = text.toLowerCase();

console.log(`${textL}`);

//

let text1 = 'joining';
let text2 = 'strings';
let text3 = 'together';
let text4 = text1.concat(' ',text2,' ',text3);
let text5 = 'joining' + ' ' + 'strings' + ' ' + 'together lol';

console.log(`${text4}`);
console.log(`${text5}`);

//

let text11 = '      hi      ';
let text22 = text11.trim();

console.log(`${text22}`);

// 

let text123 = '5';
let padded = text123.padStart(4,0);

let padded1 = text123.padEnd(4,0);

console.log(`${padded}`);
console.log(`${padded1}`);

//

let text12 = 'elden ring';
let char = text12.charAt(4);
let char1 = text.charCodeAt(4);

console.log(`${char}`);
console.log(`${char1}`);

//

let text13 = 'tiny tina';
let char2 = text13[0];

console.log(`${char2}`);

//

let text14 = 'testing string to array';
let char3 = text14.split(' ');

console.log(char3[2]);