"use strict";
function make_shirt(size, message) {
    console.log(`Shirt size ${size}`);
    console.log(`Message: ${message}`);
    console.log("Shirt created successfully!\n");
}
make_shirt("small", "smalls are comfertable");
make_shirt("large", "large people carry lage things");
make_shirt("XL", "where are small kids");
//###################### 37 ########################
function make_shirt2(size, message) {
    if (size === "Large") {
        message = "I love typescript";
        console.log(`Shirt size is ${size}`);
        console.log(`${message} \n`);
    }
    else if (size === "medium") {
        message = "I love typescript";
        console.log(`Shirt size is ${size}`);
        console.log(`${message} \n`);
    }
    else {
        console.log(`Shirt size ${size}`);
        console.log(`Message: ${message}`);
    }
}
make_shirt2("Large", "");
make_shirt2("medium", "");
make_shirt2("small", ""); // here it also required second argument
