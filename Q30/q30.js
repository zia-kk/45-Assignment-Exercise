"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user_data = ["Hamza", "Ali", "Zia", "Admin", "Bilal"];
user_data.forEach((oneuser) => {
    if (oneuser === "Admin") {
        console.log(`Hello ${oneuser} would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${oneuser} Thank you for logging in again.`);
    }
});
