//* https://www.w3.org/TR/DOM-Level-3-Events/#event-flow
const colorChange =(element, color) => element.style.backgroundColor = color;

const grandparent = document.querySelector('.grandparent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');
const childStyle = window.getComputedStyle(child);

const colorToggle =(element, color) => {
    let bgColor = element.getAttribute('style');

    (bgColor === null) ?  element.style.backgroundColor = color : element.removeAttribute('style');
};

// grandparent.addEventListener('click', e => {
//     console.log(e);
// });
    
// parent.addEventListener('click', e => {
//     console.log(e);
// });

// child.addEventListener('click', e => {
//     console.log(e);
// });

// document.addEventListener('click', e => {
//     console.log(e);
// });
                
//# without event.stopPropagation();
// child.addEventListener('click',() => colorToggle(child, 'white'));
// parent.addEventListener('click',() => colorToggle(parent, 'white'));
// grandparent.addEventListener('click',() => colorToggle(grandparent, 'white'));

//# with event.stopPropagation();
// child.addEventListener('click', (event) => {
//     event.stopPropagation();
//     colorToggle(child, 'white');
//     console.log('child clicked!');
// });

// parent.addEventListener('click', (event) => {
//     event.stopPropagation();
//     colorToggle(parent, 'white');
//     console.log('parent clicked!');
// }/*, true */); //event happens on capture phase and using stop on capture phase prevents it then and there so event object might not reach the event target.

// grandparent.addEventListener('click', (event) => {
//     event.stopPropagation();
//     colorToggle(grandparent, 'white');
//     console.log('grandparent clicked!');
// });

//# event delegation with target
function random(number) {
    return Math.floor(Math.random() * number);
}
  
function bgChange() {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    return rndCol;
}

const container = document.querySelector("#container");

const bgChangeMouseOver = (event) => {
    event.target.style.backgroundColor = bgChange();
    console.log(event.target);
};

const bgChangeMouseOut = (event) => {
    event.target.removeAttribute('style');
    console.log(event.target);
};
  
container.addEventListener("mouseover", bgChangeMouseOver);
container.addEventListener("mouseout", bgChangeMouseOut);

grandparent.addEventListener('mouseover', bgChangeMouseOver);
grandparent.addEventListener("mouseout", bgChangeMouseOut);