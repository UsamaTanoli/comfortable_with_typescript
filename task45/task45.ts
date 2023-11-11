interface Car {
    manufacturer: string;
    modelName: string;
    color?: string;
    optionalFeature?: string;
}

function createCar(manufacturer: string, modelName: string, options: { color?: string; optionalFeature?: string } = {}): Car {
    const car: Car = {
        manufacturer,
        modelName,
        color: options.color,
        optionalFeature: options.optionalFeature
    };

    return car;
}

const myCar: Car = createCar("Toyota", "Camry", { color: "Blue", optionalFeature: "Sunroof" });

console.log(myCar);
