interface Cars {
    name: string,
    brand: string
}

//  an interface is a way to define a contract in your code. It specifies the structure that an object should have. Interfaces allow you to define the shape of an object, including the names and types of its properties.

let car1: Cars = {
    name: "Lx600",
    brand: "Lexus"
}

let car2: Cars = {
    name: "s600",
    brand: "mercedes"
}

console.log(car1);
console.log(car2);

