//RETURNS
function fullname(firstName, lastName) {
    return firstName + ' ' + lastName;

}

var fullName = fullname("Alexc", "Moritz");
console.log(fullName);

function addNums(firstNum, secondNum) {
    return firstNum + secondNum;
}

console.log(addNums(2, 3));


let cost = 45;
let tip = .20;

function tipCalc(cost, tipAmount) {
    tipAmount = cost * tip
    return cost + tipAmount;
}

console.log(tipCalc(cost, tip));