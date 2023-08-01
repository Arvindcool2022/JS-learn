
const ask = (question, yes, no) => {
    if (confirm(question)) yes(); // confirm is a windows property
    else no();
  }
  const ifAgreed = () => {
    alert("You agreed.");
    setTimeout(() => document.body.style.background = '#333', 1000);};
  const ifcanceled = () => {
     alert("You canceled the execution.");
     setTimeout(() => document.body.style.background = "steelblue", 1000);
  }
  
//   ask("Do you agree?", ifAgreed, ifcanceled);
//! hi
//? hi
//// hi
//todo hi
//* hi
//# hi
// hi