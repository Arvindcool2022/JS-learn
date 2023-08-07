// IF ELSE
greet(0);
function greet (hour) {
    if (6 <= hour && hour < 12)
        console.log("Good morning");
    else if (12 <= hour && hour < 18)
        console.log("Good afternoon");
    else if (18 <= hour && hour < 24)
        console.log("Good night");
    else
        console.log("invalid");
}

// greet1(23); 
// cannot access before initialization
const greet1 = (hour) => {
    if (6 <= hour && hour < 12)
        console.log("Good morning");
    else if (12 <= hour && hour < 18)
        console.log("Good afternoon");
    else if (18 <= hour && hour < 24)
        console.log("Good night");
    else
        console.log("invalid");
    }
greet1(23);

// SWITCH CASE

const greet2 = (hour) => {
    switch (true) {
        case (6 <= hour && hour < 12):
            console.log("Good morning");
            break;

        case (12 <= hour && hour < 18):
            console.log("Good afternoon");
            break;

        case (18 <= hour && hour < 24):
            console.log("Good night");
            break;
        
        default:
            console.log("invalid");
    }
}
// not an ideal use case for switch case 
greet2(15);

const userRole = (a) => {
    switch (a) {
        case ("guest"):
        console.log("guest user");
        break;

        case ("moderator"):
        console.log("moderator user");
        break;
        
        case ("admin"):
        console.log("admin user");
        break;

        default:
        console.log("unknown user");
    }
}

let role = "guest";
userRole(role);
let role1;
userRole(role1);

// FOR LOOP

let color = ['red', 'green', 'blue', 'orange', 'yellow','black']
console.log("FOR LOOP")
for(let i=0; i<5; i++) {
    console.log("color",i+1,"is",color[i]);
}

// WHILE LOOP
console.log("WHILE LOOP")
let i = 0;
while(i<5) {
    console.log("color",i+1,"is",color[i]);
    i++;
}

// DO...WHILE LOOP
console.log("DO...WHILE LOOP")
i=5;
do {
    console.log("color",i+1,"is",color[i]);
    i++;
} while(i<5);

// FOR-IN LOOP
console.log("FOR-IN LOOP")
let person = {
    name:"arvind",
    age:29,
    status:true,
    verfiy:undefined,
    job:null
}

let text="";
for (let key in person){
    text += person[key] + " ";
    console.log("number", parseInt(key)+1,"=",key, person[key]);
}
// array is also a object in javascript where key is the index number.
// that why i+1 worked in array and not in this object.
document.getElementsByClassName("p")[0].innerHTML = text;
text="";
for (let i in color){
    text += color[i] + " ";
    console.log(parseInt(i)+1,"=",color[i])
}
// we use parseInt(i) to convert the i value (which is a string representing the index) to an integer 
document.getElementsByClassName("p")[1].innerHTML = text;

// FOR-OF LOOP
console.log("FOR-OF LOOP")
text="";
for (let colour of color){
    text += colour + ", ";
    console.log(colour);
}
document.getElementsByClassName("p")[2].innerHTML = text;

let newPElem = document.createElement("p");
newPElem.setAttribute("class", "p");
let newText = document.createTextNode("This is the new p element with class 'p'.");
newPElem.appendChild(newText);

// Append the new p element to the body
document.body.appendChild(newPElem);

const pw = (x, n) =>{
    let result = 1;
    for (let i = 0; i < n; i++)
        result *= x;

    return result
}


let pw1 = (x, n) => (n===1) ? x : x * pw1(x, (n-1)); 

console.log(pw(2,8))
console.log(pw1(2,2))