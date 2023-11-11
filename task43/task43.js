"use strict";
let magicians3 = ["Harry Houdini", "David Blaine", "Doug Henning", "Dai Vernon"];
function show_magicians3(magiciansArray) {
    for (let magician of magiciansArray) {
        console.log(magician);
    }
}
function make_great3(magiciansArray) {
    let modifiedArray = [];
    for (let magician of magiciansArray) {
        modifiedArray.push("Great " + magician);
    }
    return modifiedArray;
}
let modifiedMagiciansArray = make_great3([...magicians3]);
show_magicians3(magicians3);
show_magicians3(modifiedMagiciansArray);
