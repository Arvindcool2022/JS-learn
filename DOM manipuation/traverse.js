const changeColor = (element, color) => element.style.background = color;

//! ID are just a straight forward
// const grandparent = document.getElementById('grandParent');
// changeColor(grandparent, 'springgreen');


//? collection of classes will be returned in an object so change it to array like this
// const parents = Array.from(document.getElementsByClassName('parents'));
//? use for each method to iterate through the function
// parents.forEach(element => changeColor(element,'salmon'));
// console.log (parents[0]);


// const firstChild = document.querySelector('.child');
//! only one and first child is selected because of queryselector (singluar not plural)
// changeColor(firstChild,'firebrick');


// const allChild = document.querySelectorAll('.child');
// // ? no need Array.from for this
// console.log (allChild);
// allChild.forEach(element => changeColor(element, 'gold'));


// const grandparent = document.querySelector('.grandParent');
// //? need Array.from for this
// const parents = Array.from(grandparent.children);
// // parents.forEach(element => changeColor(element,'#555'))
// const parentOne = parents[0];
// changeColor(parentOne,'seagreen');
// const childrenOfParentOne =Array.from(parentOne.children);
// childrenOfParentOne.forEach(element => changeColor(element,'orchid'));

const childOne = document.querySelector('#child-1')
// changeColor(childOne, '#333');
// const firstParent = childOne.parentElement;
// changeColor(firstParent, 'seagreen');
// const grandparent = firstParent.parentElement;
// changeColor(grandparent, 'firebrick');
//? 'closest gives the nearest ancestor with said selector.
// const grandparent = childOne.closest('.grandParent');
// changeColor(grandparent, 'peru');

const childTwo = childOne.nextElementSibling;
changeColor(childTwo.previousElementSibling, '#333');

