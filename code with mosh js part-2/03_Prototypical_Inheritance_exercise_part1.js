function HtmlElement() {
  this.click = () => console.log('clicked');
}

HtmlElement.prototype.focus = () => console.log('focused');

const e = new HtmlElement();

function HtmlSelectedElement(array = []) {
  this.arr = array;
  this.addItem = x => this.arr.push(x);
  this.removeItem = x => (this.arr = this.arr.filter(item => item !== x));
}

//my soln
// HtmlSelectedElement.prototype = Object.create(e); //# so this like e => {} => HtmlSelectedElement.
//mosh Soln
HtmlSelectedElement.prototype = new HtmlElement(); //# and this like e => HtmlSelectedElement
// or
// HtmlSelectedElement.prototype = e;
HtmlSelectedElement.prototype.constructor = HtmlSelectedElement;
const s = new HtmlSelectedElement([1, 2, 3, 4, 5]);
/* //*EXPLAINATION
    I understand that you're comparing your solution with Mosh's solution for setting up prototype inheritance. Let's break down the differences between the two approaches:
    
    Both your solution and Mosh's solutions are setting up prototype inheritance, but there are some key differences:
    
    1. **Your Solution** (`Object.create()`):
       - In your solution, you're using `Object.create(e)` to create a new object that inherits directly from the `e` instance.
       -//# The `Object.create()` method creates a new object and sets the prototype of that object to the specified object (`e` in this case).
       - This approach avoids calling the constructor function (`HtmlElement`) again, which can be beneficial in terms of performance and avoiding unintended side effects.
    
    2. **Mosh's Solutions** (`new HtmlElement()` or `e`):
       - Mosh's solutions involve creating a new instance of `HtmlElement` using `new HtmlElement()` or directly assigning the `e` instance to the prototype of `HtmlSelectedElement`.
       -//# By using `new HtmlElement()`, you are calling the constructor function `HtmlElement` again to create an instance. This might lead to unintended side effects if the constructor has logic that should not be repeated.
    
    In summary, both approaches achieve prototype inheritance, but your solution (`Object.create(e)`) is generally considered cleaner and more efficient because it directly sets up the prototype chain without invoking the constructor function again. Mosh's solutions work, but they might have potential side effects if the constructor function performs complex operations. Your solution using `Object.create()` is more idiomatic and commonly used for setting up prototype inheritance in JavaScript.
     */
