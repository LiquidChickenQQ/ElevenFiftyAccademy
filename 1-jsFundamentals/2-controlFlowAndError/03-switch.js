/*
Switch
*/

let friend = 'Tom';

switch (friend) {
    case 'Tom':
        console.log('Hey, when are you rack climbing?');
        break;
    case 'Ken':
        console.log('Hey Ken');
        break;
    case 'Carolyn':
        console.log('Funny Funny');
        break;
    default:
        console.log(`I'm sorry, ${friend}, but do I know you?`); // `` let you add code to a string
}

let desert = 'pie';

switch (desert) {
    case 'pie':
        console.log('Pie, pie, me oh my!');
        break;
    case 'cake':
        console.log('cake is great');
        break;
    case 'ice cream':
        console.log('I scream for ice cream');
        break;
    default:
        console.log(`I'm sorry but, ${desert}, SUCKS and is not on the menu!`); // `` let you add code to a string
}

let yep = 0;

switch (true) {
    case (yep < 0 && yep > -10):
        console.log('worked');
        break;
    case (yep > 0):
        console.log('worked here');
        break;
    default:
        console.log('didn\'t work');
}