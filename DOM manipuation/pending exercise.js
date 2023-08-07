const category = document.querySelector('#category');

category.addEventListener('click', (element) => {
  //? if (element.target.tagName == 'LI')
  //# window.location.href = '/' + element.target.id;
  console.log(element.target);
});

//*form validation

const form = document.querySelector('#form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneNumberInput = document.querySelector('#tel');
