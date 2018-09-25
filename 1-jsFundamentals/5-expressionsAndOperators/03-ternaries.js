// Ternaries

var x = 6;

(x > 0) ? console.log("x is greater than 0."): console.log("x is not greater than 0");

(x == 0) ? console.log('x equals 0'): (x > 0) ? console.log("x is less than 0") : console.log("x is greater than 0")

var age = 25;

(age == 17) ? console.log('You can\'t do crap!'): (age == 18) ? console.log('Yay, You can vote!') : (age == 21) ? console.log('Yay!, You can drink!') : (age == 25) ? console.log('Yay!, You can rent a car!') : console.log('You are too old to do crap!')