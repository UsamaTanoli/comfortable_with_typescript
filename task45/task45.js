"use strict";
function createCar(manufacturer, modelName, options = {}) {
    const car = {
        manufacturer,
        modelName,
        color: options.color,
        optionalFeature: options.optionalFeature
    };
    return car;
}
const myCar = createCar("Toyota", "Camry", { color: "Blue", optionalFeature: "Sunroof" });
console.log(myCar);
