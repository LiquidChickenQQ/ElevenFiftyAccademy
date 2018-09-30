/*
FOR IN LOOPS

GREAT FOR ITERATING OVER VALIES IN AN OBJECT
*/

let student = { name: 'Christian', awesome: true, degree: 'JavaScript', week: '1' }

console.log(student.name);

for (let item in student) {
    console.log(item);
    console.log(student[item]);
}

let catArray = ['tabby', 'british shorthair', 'burmser', 'maine coon'];

for (cat in catArray) {
    console.log(catArray[cat]);
}

let studentName = 'paul';
let capName = '';

for (let ch in studentName) {
    if (ch == 0) {
        capName = studentName[ch].toUpperCase();
    } else {
        capName = capName + studentName[ch].toLowerCase();
    }
    console.log(capName);
}

console.log(capName);