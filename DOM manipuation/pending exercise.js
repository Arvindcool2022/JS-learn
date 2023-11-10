const category = document.querySelector('#category');

category.addEventListener('click', element => {
  if (element.target.tagName == 'LI') {
    window.location.hash = '#';
    window.location.href += element.target.id;
  }
  console.log(element.target.tagName, element.target.id, window.location);
});

//*form validation

const form = document.querySelector('#form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneNumberInput = document.querySelector('#tel');
