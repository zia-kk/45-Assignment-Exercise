"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function show_magician(magicians) {
    for (const magician of magicians) {
        console.log(magician.charAt(0).toLocaleUpperCase() + magician.slice(1));
    }
}
;
const magician = ["Mr.Harry Houdini", "Mr.Criss Angel", "Mr.David Blaine", "Mr.Derren Brown"];
show_magician(magician);
