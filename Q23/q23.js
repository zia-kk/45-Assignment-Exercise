"use strict";
// 5 true conditio & 5 false conditiobn
Object.defineProperty(exports, "__esModule", { value: true });
let two = 2;
let three = 3;
////Test 1 Condition: equal  /////
console.log("Two is equal to 2?");
console.log(two === 2); /////true
////Test 2 Condition: not equal  /////
console.log("Two is not equal to three?");
console.log(two !== three); /////true
////Test 3 Condition: logical  /////
console.log("Two is lessthen to 3?");
console.log(two < three); /////true
////Test 4 Condition: logical  /////
console.log("Three is greaterthen  to 2?");
console.log(three > two); /////true
////Test 5 Condition: logical  /////
console.log("Two is greaterthen to three?");
console.log(!(two >= three)); /////true
////Test 6 Condition: logical  /////
console.log("Three is lessthen to Two?");
console.log(three < two); /////false
////Test 7 Condition: logical  /////
console.log("Two is greaterthen  or equal to Three?");
console.log(two >= three); /////false
////Test 8 Condition: logical ||  /////
console.log("Three is lessthen to 2 OR Two is greaterthen to 3?");
console.log(three < two || two > three); /////false
////Test 9 Condition: logical || !() /////
console.log("Three is not equal to 2 OR Two is lessthen from 3?");
console.log(!(three !== two || two < three)); /////false
////Test 10 Condition: logical && /////
console.log("Three is lessthen to 2 and Two is lessthen to 3?");
console.log(three < two && two < three); /////false
