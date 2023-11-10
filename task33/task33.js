"use strict";
let ordinalNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let ordinalValue;
for (let number of ordinalNumber) {
    if (number === 1) {
        ordinalValue = "st";
    }
    else if (number === 2) {
        ordinalValue = "nd";
    }
    else if (number === 3) {
        ordinalValue = "rd";
    }
    else {
        ordinalValue = "th";
    }
    console.log(`${number}${ordinalValue}`);
}
