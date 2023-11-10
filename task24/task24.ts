let str1 = "apple";
let str2 = "mango";
let str3 = "mango";

console.log(typeof str1 === typeof str2);
console.log(str1 === str2);
console.log(str2 === str3);

let str4: string = str2.toUpperCase();
console.log(str3 === str4);
console.log("..........................................................");

// number
console.log(`            Test For Number`);

let num1 = 9;
let num2 = 6;

console.log("Numerical equality test: ", num1 === num2);
console.log("Numerical inequality test: ", num1 !== num2);
console.log("Greater than test: ", num1 > num2);
console.log("Less than test: ", num1 < num2);
console.log("Greater than or equal to test: ", num1 >= num2);
console.log("Less than or equal to test: ", num1 <= num2);

//      Tests using "AND" and "OR" operators
console.log("..........................................................");
console.log(`                Tests using "and" and "or" operators`);

let val1 = true
let val2 = false

console.log("Using && statement", val1 && val2);
console.log("Using || statement", val1 || val2);

let digit1: number = 8;
let digit2: number = 10;

console.log("Using && statement", typeof digit1 === typeof digit2 && digit1 === digit2);
console.log("Using || statement", typeof digit1 === typeof digit2 || digit1 === digit2);

//     Testing Array
console.log("..........................................................");
console.log(`                 Test For Array`);

let item:number [] = [1,2,3,4,5,6];
console.log(Array.isArray(item));

let item2: number = 345;
console.log(Array.isArray(item2));


