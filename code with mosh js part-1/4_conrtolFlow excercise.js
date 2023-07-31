// EXERCISE ONE 
const maxOfTwo =(a,b) => (a>b) ? a : b;

// EXERCISE TWO

const isItLandscape = (width,height) => (width>height);

// EXERCISE THREE (fizzbuzz)


const fizzbuzz = (x) => {
    if (typeof(x) === 'number'){
        switch (true){
            case (x % 5 === 0 && x % 3 === 0):
                return 'FizzBuzz';
                break;

            case (x % 5 === 0):
                return 'Buzz';
                break;

            case (x % 3 === 0):
                return 'Fizz';
                break;

            default: return x;
        }

    } else return 'not a number';
}


// EXERCISE FOUR (Demerit points)

// my soln 
const checkSpeed = (speed) => { 
    let x = Math.floor(speed/5);
    if (x <= 14){
        console.log("OK")}
     else if (x >= 36) {
        console.log ("License suspended")
    } else {
        let j=0;
            for (let i=x;i>14;i--){
                j++;
        }
        //why?
        console.log(j);
    }
}

//mosh soln
const checkSpeed2 =(speed) => {
    const speedLimit = 70;
    const kmPerPoint = 5;
    if(speed < (speedLimit+kmPerPoint)){
        console.log("ok")
        return;
    }
    const points = Math.floor((speed-speedLimit)/kmPerPoint);
    if(points >= 22)
        console.log ("License suspended")
    else
        console.log ("points: ", points)
}

//EXERCISE FIVE (even or odd number) 
const showNumbers = (limit) => {
    for (let i=0; i<=limit; i++){
        // if((i % 2) === 0) console.log (i," EVEN");
        // else console.log (i," ODD");
        let message = ((i % 2) === 0) ? "EVEN" : "odd";
        console.log(i, message);
    }
}

//EXERCISE SIX (count truthy)
const arr = [0,1,2,NaN,null,undefined,5]

const countTruthy = (array) => {
    let numberOfTruthy = 0
    for (const index of array)
        //if (index) ++numberOfTruthy;
        index ? ++numberOfTruthy : numberOfTruthy;
    return numberOfTruthy;
}

//EXERCISE SEVEN (String properties)
const movie = {
    title: "a",
    releaseYear: 2015,
    director: "b",
    rating: 8.9
}

const showStringProperties = (obj) => {
    for (const key in obj)
        if (typeof(obj[key]) === "string") 
            console.log(key, obj[key])
}


//EXERCISE EIGHT (Sum of multiples of 3 and 5)
//my soln
const sumOFMultiplesOFThreeAndFive = (limit) =>{
    let firstValue = 3;
    let secondValue = 5;

    let sumMultiplesOfFirst = 0;
    let sumMultiplesOfSecond = 0;

    for (let i = 0; i <= limit; i++) {
        // or operator
        if ((i % firstValue) === 0)
        sumMultiplesOfFirst += i;
        if ((i % secondValue) === 0)
        sumMultiplesOfSecond += i;
        // ((i % firstValue) == 0) ? (sumMultiplesOfFirst += i) : sumMultiplesOfFirst;
        // ((i % secondValue) == 0) ? (sumMultiplesOfSecond += i) : sumMultiplesOfSecond;
    }
    return (sumMultiplesOfFirst+sumMultiplesOfSecond);
}

// Mosh Soln
const weirdSum2 = (limit) =>{
    let sumValue = 0;
    
    for (let i = 0; i <= limit; i++) 
        if ((i % 3) === 0 || (i % 5) === 0)
        sumValue += i;
    return (sumValue);
}

//EXERCISE NINE (Grade) 

const marks = [80,80,50]

const calculateGrade1 = (marks) => {
    let totalMarks = 0;
    for (const value of marks)
        totalMarks += value;
    let average = totalMarks/marks.length
    // return average>=90 ? "A"
    // :(average < 90 && average >=80) ? "B"
    // :(average < 80 && average >=70) ? "C"
    // :(average < 70 && average >=60) ? "D"
    // : "F"; make it simple
    return average < 60 ? "F"
    :average < 70 ? "D"
    :average < 80 ? "C"
    :average < 90 ? "B"
    :"A"
}

//for function reuseablitity => do it like this

const calculateGrade = (marks) => {
    const average = calculateAverage(marks)
    return average < 60 ? "F"
    :average < 70 ? "D"
    :average < 80 ? "C"
    :average < 90 ? "B"
    :"A"
}

const calculateAverage = (array) => {
    let sum = 0;
    for (const value of array)
    sum += value;
    return sum / array.length;
}

//EXERCISE TEN (Stars)
//my soln
const showStars = (rows) => {
    let stars = "";
    for(let i=0; i < rows; i++){
        stars += "*";
        console.log(stars);
    }
}

//mosh soln
const showStars1 = (limit) => {
    for (let row=1; row <= limit; row++) {
        let pattern = "";
        for(let i=0; i < row; i++)
            pattern += "*";
        console.log(pattern);   

    }
}

//EXERCISE ELEVEN(prime numbers)
const showPrimes = (limit) => {
    for (let number = 2; number < limit; number++)
        if(checkPrime(number)) console.log(number)
}

const checkPrime = (number) => {
    if(number <= 1) return false;
    for(let factor=2; factor < number; factor++)
        if(number % factor === 0) return false

    return true;
}

showPrimes (20);

//OWN EXERCISE ONE(Implement a program that calculates the factorial of a given positive integer using a loop.)

const calculateFactorial = (num) => {
    let factorialResult = 1;
    for(let i=1; i<=num; i++)
        factorialResult *= i;

    return factorialResult;
}



//OWN EXERCISE TWO (Implement a function that generates a random number between 1 and 10 and asks the user to guess the number. The program should provide feedback if the guess is too high or too low until the correct number is guessed.)

const guessTheNumber = (number) => {
    const randomNumber = (getRandomNumber(10) + 1)
    console.log(randomNumber)
    return (number === randomNumber)? "correct"
    :(number > randomNumber)? "too high"
    :"too low";
}

const getRandomNumber = (max) => {
    return Math.floor( Math.random() * max);
}

console.log(guessTheNumber(5))

// using prompt
// const guessTheNumber = () => {
//     const randomNumber = getRandomNumber(10) + 1; // Generate a random number between 1 and 10
//     // console.log("Random Number:", randomNumber);
    
//     while (true) {
//         const userGuess = parseInt(prompt("Guess a number between 1 and 10:"));

//         if (userGuess === randomNumber) {
//             console.log("Congratulations! You guessed the correct number.");
//             break; // Exit the loop if the guess is correct
//         } else if (userGuess > randomNumber) {
//             console.log("Too high. Try again!");
//         } else {
//             console.log("Too low. Try again!");
//         }
//     }
// }

// const getRandomNumber = (max) => {
//     return Math.floor(Math.random() * max);
// }

// guessTheNumber();




