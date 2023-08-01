const changeColor = (element, color) => element.style.color = color;
const changeFontWeight = element => element.style.fontWeight ='700';

const grandParent = document.querySelector('.characters');

// changeColor(grandParent, 'pink');

const parents = grandParent.children;


// changeColor(parents[1],'seagreen');

const humans = Array.from(document.querySelectorAll('.humans'));

// changeColor(humans[0],'teal');

const hobbits = parents[0];
// changeColor(hobbits, 'seagreen');

const merry = (hobbits.children)[2];
// changeFontWeight(merry);

const allLiElements  = Array.from(document.querySelectorAll('li'))
// allLiElements.forEach(element => changeColor(element,'#f1f1f1'))

const souron = allLiElements[14];
// console.log(souron)

const enemies = souron.parentElement
// changeColor(enemies, 'khaki')

const nazgul = allLiElements[15];
const closest= nazgul.closest('.characters');

const glorfindel = allLiElements[11];

const legolas = glorfindel.previousElementSibling;
const elrond = glorfindel.nextElementSibling;
const arwen = glorfindel.parentElement.children[3];

// console.log(arwen);