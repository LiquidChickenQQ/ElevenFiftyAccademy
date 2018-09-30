/*
IF ELSE
*/

weather = 75;

if (weather < 70) {
    console.log('Wear a jacket!');
} else {
    console.log('No jacket required');
}

Name = 'John';

if (Name == 'Kerry') {
    console.log('Hello, may name is Kerry!');
} else {
    console.log('Hello, what is your name?');
}

/*
challenge:
Capitalize the FIRST LETTER of name ONLY
*/

let name = 'cRaZy' //output C

function name(string) {
    console.log(string, charAt(0).toUpperCase());
    console.log(string.slice(1));
    //    return string.charAt(0).toUpperCase() + string.slice(1);
}
console.log(name('josh'));

let name = 'tYlEr';

if (name[0] == name[0].toUpperCase()) {
    firstLetter = name[0] + name.slice(1).toLowerCase();
    console.log(firstLetter);
} else {
    otherLetters = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    console.log(otherLetters);
}

/*
Challenge:
Set a variable age and give it an age of your choice
Set an else if statment that convey the following:
If the age is 17 or younger, console.log sorry, your too young to to anything
If the age is at least 18, consol.log 'Yay! You can vote!
if the age is at least 21, consol.log 'Yay! You can drink!
If the age is at least 25, consol.log 'Yay! You can rent a car!
*/

let age = 26;

if (age <= 17) {
    console.log('Sorry, you are too young to do anything.')
} else if (age == 18) {
    console.log('Yay, You can Vote!');
} else if (age == 21) {
    console.log('Yay! You can drink');
} else {
    console.log('Yay! You can rent a car');
}