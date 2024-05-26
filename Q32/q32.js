"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let current_users = ["Taha", "shehzad", "Admin", "Faisal", "Imran"];
let new_users = ["Khalid", "shehzad", "Admin", "Usama", "Zia"];
new_users.forEach((new_users) => {
    if (current_users.some((current_users) => current_users.toLowerCase() === new_users.toLowerCase())) {
        console.log(`${new_users} We need to enter a new username.`);
    }
    else {
        console.log(`${new_users} is available. `);
    }
});
