// EXERCISE ONE
const address = {
    street: 'abc',
    city: 'paris',
    zipCode: 5013
}

const showAddress = (address) => {
    for (const key in address) 
        console.log(key, address[key]);
}

// showAddress(address);

//EXERCISE TWO
function createAddress(street,city,zipCode) {
    return {street,
    city,
    zipCode 
    }
}

const addressOne = createAddress('a', 'b', 500);
const dupilcateAddressOne = addressOne
// console.log(addressOne);

function CreateAddress (street,city,zipcode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipcode;
}
const addressTwo = new CreateAddress('a','b',500);
// console.log(addressTwo);

//EXERCISE THREE

const areEqual = (addressOne,addressTwo) => {
    let propertiesOne = "";
    let propertiesTwo = "";
    for (const key in addressOne)
        propertiesOne += (addressOne[key]);
    
    for (const key in addressTwo)
        propertiesTwo += (addressTwo[key]);
    
    console.log(propertiesOne === propertiesTwo);
}
// areEqual(addressOne,addressTwo)

const areSame = (addressOne,addressTwo) => {
    console.log((addressOne === addressTwo) ? 'yes' : 'no'); 
}

// areSame(addressOne,addressTwo);
// areSame(addressOne,dupilcateAddressOne);

//CHAT GPT SOLN-1
function areObjectsEqual(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
  
    if (keys1.length !== keys2.length) {
      return false;
    }
  
    for (const key of keys1) {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
  
    return true;
}

//CHAT GPT SOLN-2 (deep comparison)
function areEqual1(obj1, obj2) {
const keys1 = Object.keys(obj1);
const keys2 = Object.keys(obj2);

if (keys1.length !== keys2.length) {
    return false;
}

for (const key of keys1) {
    const val1 = obj1[key];
    const val2 = obj2[key];

    if (typeof val1 === 'object' && typeof val2 === 'object') {
    if (!areEqual(val1, val2)) {
        return false;
    }
    } else if (val1 !== val2) {
        return false;
    }
    }

    return true;
}

//EXERSISE FOUR
 
const blogPost = {
    title: 'a',
    body: 'b',
    author: 'xyz',
    views: 500,
    comments:[
         {author: 'abc',body: 'lorem'},
         {author: 'cde',body: 'epsol'},
    ],
    isLive: true
};

// console.log(blogPost);

//EXERCISE FIVE
function CreatePost(title,body,author){
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}

const blogPost1 = new CreatePost('a','b','c');
// console.log(blogPost1);

//EXERCISE SIX
const priceRange = [
    {label:'$', tooltip:'Inexpensive', from: 0, to: 99},
    {label:'$$', tooltip:'Moderate', from: 100, to: 199},
    {label:'$$$', tooltip:'Expensive', from:200, to: 500}
]
console.log(priceRange)