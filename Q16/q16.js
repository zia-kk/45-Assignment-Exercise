"use strict";
let myguests_List = ["Sir Zia Khan", "Sir Ameen Alam", "Sir Mobashir Ali", "Sir Usama",];
// for (let i = 0; i<myguests_List.length; i++) {
//   console.log(`\n Dear Respected Sir!:` + myguests_List[i] +`,\n we invited you on a Dinner.\n Thank You \n`);};
//refrence from Q#14//
let no_Commimg = "sir Usama";
let new_guest = "Sir Hamza Syed";
myguests_List[3] = new_guest;
for (let i = 0; i < myguests_List.length; i++) {
    console.log("Dear Respected Sir!:" + myguests_List[i] + `,\n we invited you on a Dinner.\n Thank you\n`);
}
console.log(`${no_Commimg} is Will not Comming for Dinner Party.\n`);
//continue from Q#14,Q#15/////////////////////////
myguests_List.unshift("Sir Faisal", "Sir Ukasha", "Sir Daniyal");
for (let i = 0; i < myguests_List.length; i++) {
    console.log("Dear Respected Sir!:" + myguests_List[i] + `,\n we invited you on a Dinner, Now we have king Table for Dinner so We Decided to invite more 3 person\n Thank you\n`);
}
