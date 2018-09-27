/*
Intro to arrays

have squarae brackets
can hold multiple data types
great for listing


*/

//overview

let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Ryan', 'Iesha']];

console.log(students[2]); //Rhys 



let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Ryan', 'Iesha']];

console.log(`Hello ${students[6][1]}, you look nice`);

let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hotdog'];


// for (let i = 0; i < food.length; i++) {
//     console.log(food[i]);
// }

// for (let f of food) {
//     console.log(f);
// }

food.push('Pizza')

// console.log(food);

food.splice(1, 1, 'Bananas'); //first number index to start, second nu: number of things to remove, third num: replacement value

// console.log(food);

food.splice(2, 0, 'Sweet Potato Pie');
console.log(food);

food.pop() // removes last item