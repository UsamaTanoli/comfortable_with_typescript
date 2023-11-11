"use strict";
let animals = ["Dog", "Cat", "Rabit"];
console.log(`........Animal's Names........`);
for (let animal of animals) {
    console.log(animal);
}
console.log(`......Satement About Animals.....`);
for (let animal of animals) {
    if (animal === "Dog") {
        console.log(`A ${animal} would make a great loyal companion.`);
    }
    else if (animal === "Cat") {
        console.log(`A ${animal} is an independent and playful pet.`);
    }
    else if (animal === "Rabit") {
        console.log(`A ${animal} is a cute and gentle animal.`);
    }
}
console.log(`.........Common Characteristic:.........`);
console.log("Any of these animal can be a good pet");
