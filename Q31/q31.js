"use strict";
//////////////////////Ref from Excercise 30/////////////////
Object.defineProperty(exports, "__esModule", { value: true });
// let user_data: string[] = ["Hamza", "Ali", "Zia", "Admin", "Bilal"];
// user_data.forEach((oneuser) => {
//   if (oneuser === "Admin") {
//     console.log(`Hello ${oneuser} would you like to see a status report?`);
//   } else {
//     console.log(`Hello ${oneuser} Thank you for logging in again.`);
//   }
// });
////////////////////////////////////////Now Start Excercise 31///////////////////////////////////////////////////
// • If the list is empty, print the message We need to find some users!
let user_data = ["Hamza", "Ali", "Zia", "Admin", "Bilal"];
if (user_data.length === 0) {
    console.log("We need to find some users! ");
}
// • Remove all of the usernames from your array,
//  and make sure the correct message is printed.
else {
    user_data = [];
    console.log("All User have been removed " + user_data.length);
}
