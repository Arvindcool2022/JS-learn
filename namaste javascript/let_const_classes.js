//* let and const behavior.
// console.log(a); // ReferenceError: Cannot access 'a' before initialization
// console.log(b); // ReferenceError: Cannot access 'a' before initialization
console.log(c); // prints undefined as expected
let a = 10;
let b; //! gets intialized to undefined itself
console.log(a); // 10
console.log(b); //! prints undefined
var c = 15;
console.log(window.a); //! undefined
console.log(window.c); // 15

// console.log(d); // ReferenceError: Cannot access 'd' before initialization
const d = 5;
console.log(d);

//* In the code you provided, you're demonstrating the behavior of variables declared with `let` and how they relate to the global object (`window` in a browser context) when compared to variables declared with `var`.

window.x = 'var-scoped a'; //#same as var a = 'var-scoped a';
let x = 'lexically-scoped a'; //#This variable shadows the global `a` inside the current scope
console.log(x); // "lexically-scoped a"
console.log(window.x); // "var-scoped a"

let z = 'lexically-scoped b';
window.z = 'var-scoped b';
console.log(z); // "lexically-scoped b"
console.log(window.z); // "var-scoped b"

// Here's what's happening step by step:

// 1. `window.a = "var-scoped a";`: You're assigning the string `"var-scoped a"` to the property `a` on the global object (`window`). This creates a global variable accessible throughout your code.

//! 2. `let a = "lexically-scoped a";`: You're declaring a new variable `a` with block scope (limited to the block it's defined in). This variable shadows the global `a` inside the current scope (e.g., a function or block), but it does not overwrite the global `a` property on the global object (`window`).

// 3. `console.log(a);`: This logs the value of the block-scoped variable `a`, which is `"lexically-scoped a"`.

// 4. `console.log(window.a);`: This logs the value of the global variable `a` that you assigned to the `window` object, which is `"var-scoped a"`.

// 5. `let b = "lexically-scoped b";`: Similar to the previous example, you're declaring a new variable `b` with block scope.

// 6. `window.b = "var-scoped b";`: You're assigning the string `"var-scoped b"` to the property `b` on the global object (`window`).

// 7. `console.log(b);`: This logs the value of the block-scoped variable `b`, which is `"lexically-scoped b"`.

// 8. `console.log(window.b);`: This logs the value of the global variable `b` that you assigned to the `window` object, which is `"var-scoped b"`.

//? https://stackoverflow.com/questions/40685277/what-is-the-purpose-of-the-script-scope

// to summaraize

// JavaScript's original globals (var-scoped bindings) had issues such as being both globally available identifiers and properties of the global object, and repeated declarations were not errors.

// The introduction of lexically-scoped bindings (let, const, class) created a new style of globals with better semantics.

//# The global environment has two parts: one for the old style of globals (var-scoped bindings) and another for the new style (lexically-scoped bindings).

// The two parts of the global environment are "logically" a single record, allowing only one declaration of a particular identifier within both parts.

//# The new style globals use the "declarative Environment Record" and hold lexically-scoped bindings directly.

//# The old style globals use the "object Environment Record" and are properties of the global object.

//# Using var at global scope creates properties on the global object. Using let or const at global scope creates lexically-scoped bindings.

// Module scope is another type of scoping in JavaScript, separate from script scope.

// This detailed explanation provides valuable insights into the design and historical context of JavaScript's scoping and global environment, which is excellent for understanding how JavaScript works under the hood.
