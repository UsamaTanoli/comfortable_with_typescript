"use strict";
function describe_city(nameOfCities, itsCountry = "pakistan") {
    console.log(`${nameOfCities} is in ${itsCountry}`);
}
describe_city("karachi"); // using default countr
describe_city("new york", "Usa");
describe_city("Paris", "France");
console.log("\n............ Second Method ..............\n");
function describe_city2(name, country) {
    country = country || "pakistan";
    console.log(`${name} is in ${country}`);
}
describe_city2("karachi"); // using default countr
describe_city2("new york", "Usa");
describe_city2("Paris", "France");
