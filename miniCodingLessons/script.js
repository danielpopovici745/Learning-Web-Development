const container = document.querySelector('#container');

//add a paragraph element to container and make it red

let para = document.createElement('p');
para.style.cssText = 'color: red'
para.textContent = 'Hey I\'m red!';
container.appendChild(para);

//add a h3 element to container and make it blue

let h3 = document.createElement('h3');
h3.style.cssText = 'color: blue';
h3.textContent = 'I\'m a blue h3';
container.appendChild(h3);

//add a div element with a black border and pink background

let div = document.createElement('div');
div.style.cssText = 'border: 2px solid black ; background: pink;';


//create a h1 and p element within this new div

let h1 = document.createElement('h1');
let para1 = document.createElement('p');

h1.textContent = 'I\'m in a div';
para1.textContent = 'ME TOO!';
div.appendChild(h1);
div.appendChild(para1);

container.appendChild(div);


