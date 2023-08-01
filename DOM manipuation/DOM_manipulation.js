// const body = document.body
// // body.append('hello', 'bye);

// const h1 = document.createElement('h1')
// body.appendChild(h1);

// h1.innerText = "hello";

const section = document.querySelector('section');

// console.log(section.textContent); // text alone with indents and space.
// console.log(section.innerText); // only text in and as shown in viewport.
// console.log(section.innerHTML); // all tags and text inside it.
// console.log(section); //show from dom tree not from actual html.

const lastChild = section.lastElementChild;
lastChild.innerText = "mahola!"; 
// console.log(lastChild) //shows from dom

const span = document.createElement('span');
span.innerText = 'aloha!';
section.appendChild(span);

// lastChild.remove();
// section.removeChild(lastChild); // to remove from parent element.
// section.appendChild(lastChild);  // can be appended back.

const box = document.querySelector('.box');
const smallBoxOne = box.firstElementChild;
const smallBoxTwo = box.lastElementChild;

// console.log(smallBoxOne.title);
// console.log(smallBoxOne.className); // or smallBoxOne.getAttribute('class');

const firstChild = section.firstElementChild;
console.log(firstChild.dataset);
console.log(firstChild.dataset.active);
lastChild.dataset.name = 'last name';

firstChild.classList.add('add');
firstChild.classList.remove('add');
firstChild.classList.toggle('hello', true); // ('hello', true) to add or not delete by default(on start)
//('hello', false) to not add or remove by default at the start.


smallBoxOne.setAttribute ('style', 'width: 100px');
smallBoxOne.setAttribute ('style', 'background-color: black; height: 100px;'); //overwrites prevoius inline style
smallBoxTwo.removeAttribute('style');
//* easier way is as follows.
smallBoxOne.style.backgroundColor = 'red';