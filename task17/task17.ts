console.log(" you can invite only two people for dinner.\n")

let reduceGuest: string[] = [ 'kazi', 'Okasha', 'Nasir', 'Shaban', 'Waseem', 'Farhan' ];

let reduceFirst = reduceGuest.pop()
console.log(`${reduceFirst} We are extremely sorry, we don't have dinner table so we can't invite you\n`);

let reduceSecond = reduceGuest.pop()
console.log(`${reduceSecond} We are extremely sorry, we don't have dinner table so we can't invite you\n`);

let reduceThird = reduceGuest.pop()
console.log(`${reduceThird} We are extremely sorry, we don't have dinner table so we can't invite you\n`);

let reduceFourth = reduceGuest.pop()
console.log(`${reduceFourth} We are extremely sorry, we don't have dinner table so we can't invite you\n`);

console.log(`${reduceGuest[0]} and ${reduceGuest[1]} you are still invited\n`);

reduceGuest.splice(0,reduceGuest.length)

console.log("program end", reduceGuest);


