"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function create_car(manufacture, modle, optional) {
    return {
        manufacture,
        modle,
        ...optional,
    };
}
const mycar = create_car("Toyota", "Crown", {
    color: "Gray",
    year: "2024",
});
console.log(mycar);
/////////////////////////////////////////Al humdulilah completed All  45 Exercise/////////////////////////////
