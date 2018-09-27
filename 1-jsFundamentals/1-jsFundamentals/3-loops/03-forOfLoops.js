/*
for of loops

better for arrays
*/

// let student ={name: 'Emily', awesome: true, degree: 'JavaScript', week: 1};
// for (let key of student) {
//     console.log(key);
// }

let catArray = ['tabby', 'british shorthair', 'burnese', 'maine coon'];

for (cat of catArray) {
    console.log(cat, 'says meow');
}