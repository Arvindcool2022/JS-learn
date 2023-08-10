//* Function bundled along with it's lexical scope is closure.

let b = 10;
function x() {
  function y() {
    let a = 10;
    let c = [10, 20, 30, 40];
    function z1(i) {
      console.log(a); //! if we remove this line of code then 'a' will be removed from tthe closure.
      console.log(c[i]);
    }
    z1(0);
    return z1;
  }
  let inner = y();
  console.log(inner);
  return inner;
}

let z = x();

z(2);

// Script
// b: 10
// z: ƒ z1(i)
// Scopes[3]
// 0: Closure (y) //#A closure is a function
// a: 10
// c: (4) [10, 20, 30, 40]

// that has access to its outer function scope even after the function has returned.Meaning, A closure can remember and access variables and arguments reference of its outer function evenafter the function has returned.

for (var i = 1; i < 6; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}

//In this case, the variable i is declared using var, which has function scope, not block scope. This means that there's only one instance of i that is shared across all iterations of the loop and the setTimeout callbacks. When the callbacks execute after the loop has finished, they reference the same variable i, which has already been incremented to 6 by that time. So, the output is five 6s after a delay.

//#tldr: var i was stored in global object (in only one place) all the instance refer to the same(one) i which finally 6

for (let i = 1; i < 6; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}

//In this case, the variable i is declared using let, which has block scope. Each iteration of the loop creates a new scope for i, effectively "capturing" the value of i for that specific iteration. When the setTimeout callbacks execute, they reference the separate instances of i, each with their own value (1, 2, 3, 4, 5). This is because the let declaration creates a new scope for each iteration of the loop, preventing the value of i from being shared across iterations.
//#tldr: let i was stored in the block scope they were 5 instances of block created and refernce to 5 different block instances were captured(that is for each iteration). thus when settimeout refers to 5 diff instances.

for (var a = 1; a < 6; a++) {
  function inner(arg) {
    setTimeout(function () {
      console.log(arg);
    }, arg * 1000);
  }
  inner(a);
}
//# now the function 'inner' is redefined with each iteration and each instance is captured
