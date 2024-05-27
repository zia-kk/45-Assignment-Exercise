"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}`);
}
describe_city("karachi");
describe_city("Dehli", "India");
describe_city("Manila", "Philipine");
describe_city("Muscat", "Oman");
