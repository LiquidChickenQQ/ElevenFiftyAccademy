/*

Expressions

*/
console.log(typeof hi); // expectation: function, output: underfined
var hi = function hi() {
    console.log('Hello');
}
hi(); // this output --> 'hello'

console.log(test);
var test = 2;