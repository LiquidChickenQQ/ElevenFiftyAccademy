/*
TYPES
*/

//BOOLEANS

let on = true;
console.log(on); // output -> true

let off = false;
console.log(off);

// boolean can represent; true/false, on/off, yes/no

//null 

/*
Null =empty value(not 0)

it is an empty container; nothing is in it, but it still exists as a space to fill
*/

let empty = null;
console.log(empty);

//Undefined
/*
undefined = no value is defined (not even an empty container)
undefined is not an error
*/

let undef = undefined;

console.log(undef);

/*
think of undefined and null as packages in UPS
null -> package deliberately sent out from UPS as empty
undefined -> package that was forgotten, or a package that has not yet been used
*/

//Numbers
let degrees = 65;
console.log(degrees);

let precise = 9999999999999999;
console.log(precise)

let rounded = 9999999999999999;
console.log(rounded);

let notquite = 0.2 + 0.1;
console.log(notquite.toFixed(2));

let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard);

// use .toFixed(2) to truncate

//strings = any value within quotes; JS spit out the nalue within the quotes

let stringOne = "double quotes";
let stringTwo = 'single quotes';
console.log(stringOne, stringTwo);

let first = 1050 + 100;
let second = '1050' + '100';
console.log(first);

console.log(second);

console.log(typeof first);

console.log(typeof second);

//What's going on here?
// + -> addition when given 2 numbers, concatenation when given 2 strings

/*Challenge:
set 7 (or 8) variables:
firstname
lastname
houseNumber
aptNumber
street
city
zipcode

set each variable to its respective type.

consol.log your whole address (with the space between variables).
*/

let firstName = 'Kerry';
let lastName = 'Bodle';
let houseNumber = '14905';
let street = 'Maggie Ct';
let city = 'Westfield';
let state = 'IN'
let zipcode = '46074'
    /*
    console.log(firstName, lastName, +","
        houseNumber, +","
        street, +","
        city, +","
        state, +","
        zipcode);
    */
    //object
    /*
What is an object?

a container that can hold multiple datatypes

denoted by {}
has keys and values (colors (key): 'blue' (value)), separated with a colon
Each key separated with a comma  
*/

let burritosNow = {
    size: 'large',
    quantity: 4,
    now: true
}
console.log(burritosNow);
console.log(typeof burritosNow);

//Arrays

/*
Arrays are great for lists

denoted by []
have values separated by commas -> ['blue', 'green', 'yellow']
*/

let burritos = ['large', 4, true];

console.log(burritos);
console.log(typeof burritos);