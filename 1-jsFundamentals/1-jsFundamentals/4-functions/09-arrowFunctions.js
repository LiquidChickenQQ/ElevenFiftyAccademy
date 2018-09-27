// ARROW FUNCTIONS
function coffee() {
    console.log("coffee rules.")
}

let tea = () => {
    console.log("tea is awersome.")
}

coffee();
tea();

var cats = (ketten, puppy) => {
    console.log(`I have ${ketten}, cats, and ${puppy} dogs.`);
}

cats(2, 3);

//Arrow Function Body Styles
//Conscise
let apples = x => console.log(`There are ${x} apples.`);
apples(5);

let peaches = (x) => { console.log(`There are ${x} peaches.`) }
peaches(6);