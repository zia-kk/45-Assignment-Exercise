"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function show_magician(magicians) {
    for (const magician of magicians) {
        console.log(magician.charAt(0).toLocaleUpperCase() + magician.slice(1));
    }
}
;
const magician = ["Mr.Harry Houdini", "Mr.Criss Angel", "Mr.David Blaine", "Mr.Derren Brown"];
// show_magician(magician)
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " The Great";
    }
}
;
const magicians_2 = ["Mr.Harry Houdini", "Mr.Criss Angel", "Mr.David Blaine", "Mr.Derren Brown"];
make_great(magicians_2);
show_magician(magicians_2);
