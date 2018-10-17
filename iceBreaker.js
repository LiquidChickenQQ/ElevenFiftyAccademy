// // code challenge 1 - objects


// let a = {
//     label: "1",
//     active: false,
// };

// let b = {
//     label: "2",
//     active: true,
// };

// console.log("Before swap");
// console.log(a);
// console.log(b);

// [a, b] = [b, a];

// console.log("After swap");
// console.log(a);
// console.log(b);

// //play code

// let newObj = {};

// newObj.name = 'Godzilla';
// newObj.age = '270,000,000';

// console.log(newObj);

// let key = 'name';

// console.log(newObj[key]);

// for (let key in newObj) {
//     console.log(newObj[key]);
// }

// /*
// BRONZE
// Given a parameter of an array  [ 40, 17, 10, 76, 22 ] 
// Create a function that returns the product of every element in the array
// */
// firstArr = [40, 17, 10, 76, 22];
// secondArr = [1, 2, 3, 4, 5];

// function multiply (array) {
//     var sum=1;
//     for (var i=0; i<array.length; i++) {
//         sum = sum * array[i];
//     } 
//     return sum;
// }
// console.log(multiply(secondArr));

// //Tylers solution
// let arr = [40, 17, 10, 76, 22];

// function multiply(inputArr) {
//     return inputArr.reduce((accumulator, current) => accumulator * current);
// }

// /* 
// SILVER
//   Given two arrays 
//           EX::  const firstArr = [ 1, 2, 3, 4, 5];
//                 const secondArr = [ 1, 2, 3, 4, 5];
//                 Create a function that checks to make sure the arrays are the same length
                
//                 Then returns an array of the products of the elements with matching indexes 
//                 ( multiply 0 with 0, 1 with 1, etc.).
//                 EX :: the example arrays should return  [ 1, 4, 9, 16, 25 ]
//                 If the arrays are not the same length, return an error message
//                 EX:: 'Please provide valid arrays'
// */

// const firstArr = [ 1, 2, 3, 4, 5];
// const secondArr = [ 1, 2, 3, 4, 5];

// function multipleArray(array1, array2) {
//     if (array1.length == array2.length) {
//         let p = [];
//         for (let i = 0; i < array1.length; i++){
//             p[i] = array1[i] * array2[2];
//         }
//         return p;
//     } else {
//         console.log('Please provide valid array');
//     }
// }

// console.log(multipleArray(firstArr, secondArr));

// /*
// GOLD 
//   Given 2 arrays:
//   [10,20,30,40,50,70]
//   [5,3,2,5]

//   Create a function that multiplies 'like' indexes (0 with 0, 1 with 1, etc.) together then place the value in a new array. 

//   The function you create should return [50, 60, 60, 200, 50, 70] based on the arrays above.

//   Make sure the values given to the function are an array type and they have data inside of them.

//   If the first array has more values than the second, return that same number
// */

// let first = [10,20,30,40,50,70];
// let second = [5,3,2,5, 1, 1];

// function goldExperience(a, b){
//   let newArray = [];
//   if (a.length != b.length){ //insures the arrays are of equal length
//     b.length = a.length;
//   }
//   for (let i = 0; i < a.length; i++){
//     if (b[i] == undefined){ //sets undefined values to 1
//       b[i] = 1;
//     }
//     newArray.push(a[i] * b[i]); //fills newArray with our products
//   }
//   console.log(newArray);
// }

// goldExperience(first, second);

// //notes below
// console.log([] instanceof Array); // returns a boolean
// console.log(typeof []); // returns a string of that type

// console.log([] instanceof Array);
// console.log(typeof []);

// function simple(input) {
//     if (typeof input != 'string') {
//         console.log('this input is wrong');
//     } else {
//         console.log('hooray');
//     }
// }

// simple(10);

// let arr = new Array(10);
// console.log(arr.length);

/** BRONZE
Give a string parameter, create an arrow function that checks if the string meets these requirements
 - is of type string
 - is at least 30 characters long
 - is not full of whitespace

If the string does not pass the tests, return 'Parameter does not meet requirements'
If the string passes, return true;

const arrowFunction = () => {
    // Code logic
}
 */

let myVar= 'hahahahahahahahahahahahahahahaha';  //my first attempt

const arrowFunction = (myVar) => {
    let a = (typeof myVar === 'string' && myVar.length >= 30 && myVar.trim() !== null) ?
        console.log("true") : console.log('string does not meet the requirements');
};

arrowFunction(myVar);

//class try

const firstTest = "hahahahahahahahahahahshshshshshshshshshshshshshshahahahahahah";

const bronze = (string) => {
    if(string.length > 29 && /\s/.test(string)) {
        return true;
    } else {
        return "Parameter does not meet requirements"
    }
}
console.log(bronze(firstTest));

  /** SILVER
Given a string parameter "I love .NET!!" create an arrow function that check to make sure our parameter is a string,
then replace instances of .NET with React.

If the parameter is not a string, it should return an error message

If the string -does not- contain .NET, return a message saying 'Nothing to change'

"I love .NET!!" => "I love React!!"
 */

let exampleTwo = ("I love .NET!!");

const checkAgain = (testTwo) => {
    if(typeof testTwo != 'string'){
        return console.log("not a string");
    } else if (testTwo.includes(".NET") === false){
        console.log("Noting to be changed")
    } else {
        let str = testTwo;
        let replace = str.replace('.NET', 'React');
        return replace;
    }
}

console.log(checkAgain(exampleTwo));

  /** GOLD
Given the string -> 'Welcome to eleven fifty'

Create a function that accepts a string. 
    
In the function check to see if the value of the string is: 
- of type string
- has a length greater than zero
- has a length less than 30

If any of these are invalid send it to the else condition and show the message -> 'String must not be empty, null, or exceed 30 characters'

If the string is valid, change the string so that the 'e' and the first 'f' in 'eleven fifty' is capitalized

Make sure that trailing whitespace is trimmed off of the string. 

If finished, add a second param to the function for a callback function and instead of returning the data, place it inside of the callback arguments 
 */


let string = "  welcome to eleven fifty   ";

const goldFunction = (input, callback) => {
    if(input.length > 0 && input.length <= 30 &&typeof input == 'string'){
        let efCheck = 'eleven fifty';
        if(input.includes(efCheck)){
            let output = input.replace(efCheck, "Eleven Fifty").trim();
            return callback(output);
        } else {
            return "String must not be null, empty, or exceed 30 characters."
        }
    }
}

const actualReturn = function(x) {
    return x;
}