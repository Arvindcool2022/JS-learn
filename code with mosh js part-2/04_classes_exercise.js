const _stack = new WeakMap();
//my soln
class Stack {
  constructor() {
    _stack.set(this, []);
  }

  get stackArr() {
    return _stack.get(this);
  }

  get count() {
    return this.stackArr.length;
  }

  peek() {
    if (this.stackArr.length === 0) throw new Error('stack is empty');
    return this.stackArr[this.stackArr.length - 1];
  }
  pop() {
    if (this.stackArr.length === 0) throw new Error('stack is empty');
    this.stackArr.pop();
  }
  push(element) {
    this.stackArr.push(element);
  }
}

const s = new Stack();
