/*

Iterating

*/

let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hotdog'];

//food.forEach(f => {console.log(f)})

food.forEach((food, number) => {
    console.log(food);
    console.log(number);
})

let movie = ['Scareface', 'porkeys', 'Smokey and the Bandit', 'Star Wars'];

movie.forEach((movie) => {
    console.log(movie);
})
movie.push('Best little WH house in Texas');

let long = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(long.length);

let newArray = new Array(73);
console.log(newArray.length);
newArray.forEach(el => {
    console.log(el);
})