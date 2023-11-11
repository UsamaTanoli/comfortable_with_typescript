"use strict";
let magicians2 = ["Harry Houdini", "David Blaine", "Doug Henning", "Dai Vernon"];
function show_magicians2() {
    for (let magician of magicians2) {
        console.log(magician);
    }
}
function make_great() {
    for (let i in magicians2) {
        magicians2[i] = `The Great ${magicians2[i]}`;
    }
}
make_great();
show_magicians2();
