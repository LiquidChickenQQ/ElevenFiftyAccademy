/*
variables
notes on variable:
1) variable must begin with a letter or $
2) you can use numbers but they must follow one of the above
3) JavaScript is case sensitive-- 'hello' and 'Hello' is different
*/

var a = 1;
var b = 2;

console.log(a + b);

/* 
DECLARATIONS    

Delclarations are the left side of the variable.  it is simply the var x
It is on the left side of the assignment operator (=)

Initializations are the RIGHT SIDE of a variable
 set the value of the variable
 inclides the variable name (x), the assignment operator (=), and the navlue (10) => x = 10.
*/

var x;
console.log('Declaration:', x);

x = 10;
console.log('Initialization 1:', x)

x = 33;
console.log('Initialization 2:', x)

/*
Var, Let, and Const:
var = 'old' js keyword for variables (introduced in ES6)
const = also 'new'; declates unchangeable variables
*/

let today = 'great!';
const elevenFifity = 'Wonderfully!';
console.log(today, elevenFifity);

today = "lovely!";
console.log(today, elevenFifity);

//elevenFifity = "super";
console.log(elevenFifity);