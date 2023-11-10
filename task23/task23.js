"use strict";
// All True Statements
let student1 = "usama";
console.log("Is student1 == 'usama'? I predict True. ");
console.log(student1 == "usama");
let student2 = "anas";
console.log("Is student2 == 'anas'? I predict True. ");
console.log(student2 == "anas");
let student3 = "okasha";
console.log("Is student3 == 'okasha'? I predict True. ");
console.log(student3 == "okasha");
let student4 = "abubakar";
console.log("Is student4 == 'abubakar'? I predict True. ");
console.log(student4 == "abubakar");
let num = 6;
console.log('is type of num == "number"? I predict True. ');
console.log(typeof num === 'number');
// All Fals statements
let person = "Kamran";
console.log('is type of person == "number"? I predict Falss. ');
console.log(typeof person === 'number');
let myBool1 = true;
let myNum = 44;
console.log('is typeof myBool1 === myNum? I predict False. ');
console.log(typeof myBool1 === typeof myNum);
let name2 = "karachi";
console.log('is typeof name2 === myNum? I predict False. ');
console.log(typeof myNum === typeof name2);
let undef = undefined;
let nul = null;
console.log('is typeof null === undef ? I predict False. ');
console.log(nul === undef);
let obj = {
    age: 22,
    pName: "shaban"
};
let func = () => ({});
console.log('is typeof obj === func ? I predict False. ');
console.log(typeof func === typeof obj);
