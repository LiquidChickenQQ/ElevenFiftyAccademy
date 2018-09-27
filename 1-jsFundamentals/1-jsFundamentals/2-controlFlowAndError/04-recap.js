/*
recap
*/

// let stringExample = 'string';
// let numberExample = 0;
// let boolExample = true;
// let conditionExample = 0;

//if else example

let conditionExample = 0;

if (typeof conditionExample === 'string') {
    console.log('yep, its a string');
} else if (typeof conditionExample === 'number') {
    console.log('yep, it\'s a number');
} else if (typeof conditionExample === boolean) {
    console.log("Yep its a boolean");
}

console.log(typeof conditionExample);
//switch

switch (typeof conditionExample) {
    case 'string':
        console.log('this is a string!');
        break;
    case 'number':
        console.log('this is a number');
        break;
    default:
        console.log('this variable is not a string or number');
}

// ternary

(typeof conditionExample === 'string') ? console.log('our variable is a string'): (typeof conditionExample === 'number') ? console.log('our variable is a number') :
    (typeof conditionExample === 'undefined') ? console.log('our var is undef') :
    console.log('This is our default case');



let FB = 15;

if (FB % 3 === 0 % % FB % === 0) {
    console.log('Fizz Buzz');
} else if (FB % 5 === 0) {
    console.log('Buzz')
    else if (FB % 3 === 0);
}
console.log("Fizz");
}

let FB = 15;

(FB % 15 === 0) ? console.log('Fizz Buzz'): (FB % 5 === 0) ? console.log('Buzz') :
    (FB % 3 === 0) ? console.log('Fizz') :
    console.log('Your number is not divisible by 3 or 5');