function HtmlElement() {
  this.click = () => console.log('clicked');
}

HtmlElement.prototype.focus = () => console.log('focused');

const e = new HtmlElement();

function HtmlSelectedElement(array = []) {
  this.arr = array;
  this.addItem = x => this.arr.push(x);
  this.removeItem = x => (this.arr = this.arr.filter(item => item !== x));
  this.render = () =>
    `<select>\n${this.arr
      .map(x => `<option>${x}</option>`)
      .join('\n')}\n</select>`;
  // this.render = () =>
  //   console.log(
  //     `"<select>\n${this.arr
  //       .map(x => `<option>${x}</option>`)
  //       .join('\n')}\n</select>"`
  //   );
}

function setPrototypeToNewSource(target, source) {
  target.prototype = new source();
  target.prototype.constructor = target;
}

setPrototypeToNewSource(HtmlSelectedElement, HtmlElement);

const s = new HtmlSelectedElement([1, 2, 3, 4, 5]);

//ADD RENDER METHOD TO HTML-SELECT-ELEMENT
function HtmlImageElement(src, alt = 'none set') {
  this.src = src;
  this.alt = alt;
  this.render = () => `<img> src="${this.src}" alt="${this.alt}" >`;
  // this.render = () =>
  //   console.log(`"<img> src="${this.src}" alt="${this.alt}" >"`);
}
setPrototypeToNewSource(HtmlImageElement, HtmlElement);

const myImage = HtmlImageElement('https:/');
console.log(myImage);

let elements = [
  new HtmlSelectedElement([8, 7, 9, 6]),
  new HtmlImageElement('https:lorem')
];

for (const element of elements) console.log(element.render());
