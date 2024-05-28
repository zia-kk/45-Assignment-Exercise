"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_album(artist, title) {
    const dictionary = {
        artist: artist.charAt(0).toLocaleUpperCase() + artist.slice(1),
        title: title.charAt(0).toLocaleUpperCase() + title.slice(1)
    };
    return dictionary;
}
let album = make_album("Ali", "Jhoom");
console.log(album);
album = make_album("Ali", "Jhoom");
console.log(album);
album = make_album("Atif", "Doorie");
console.log(album);
album = make_album("Ahmad", "paristish");
console.log(album);
