"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let number_order = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < number_order.length; i++) {
    if (number_order[i] === 1) {
        console.log(`${number_order[i]}st`);
    }
    else if (number_order[i] === 2) {
        console.log(`${number_order[i]}nd`);
    }
    else if (number_order[i] === 3) {
        console.log(`${number_order[i]}rd`);
    }
    else if (number_order[i] >= 4 && number_order[i] <= 9) {
        console.log(`${number_order[i]}th`);
    }
}
