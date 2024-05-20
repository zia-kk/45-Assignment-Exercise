

let Orange= "Orange"

///Test 1 Condition: Test for Equality

console.log("Oranage is equal to orange:?");
console.log(Orange=="Orange");/////true

///Test 2 Condition: Test for Enequality

console.log("Oranage is not equal to orange:?");
console.log(Orange !=="Orange");/////flase

// Test 3 Condition: lower case function

let uppercaseOrange= "ORANGE";

//equal to after converting

console.log("ORANGE is equal to orange after converting lowercase");
console.log(uppercaseOrange.toLocaleLowerCase()==="orange");


// Not equal to after converting

console.log("ORANGE is not equal to orange after converting lowercase");
console.log(uppercaseOrange.toLocaleLowerCase()!=="orange");


// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

let thirty= 30;
let fourty= 40;

//Equal to

console.log("thirty is equal to fourty;?");
console.log(thirty === fourty);

// Not Equal to

console.log("thirty is not equal to fourty;?");
console.log(thirty !== fourty);

///Greater than


console.log("fourty is greater than to thirty;?");
console.log( fourty > thirty);

///Less than


console.log("fourty is Less than to thirty;?");
console.log( fourty < thirty);

///Greater than or equal to

console.log("fourty is greater than or equal to thirty;?");
console.log( fourty >= thirty);

///Less than


console.log("fourty is Less than or equal to thirty;?");
console.log( fourty <= thirty);


// Tests using "and" and "or" operators

/// using && operator

console.log("fourty is  not equal to thirty and thirty is less than to fourty:?");
console.log(fourty!==thirty && thirty < fourty);////true

console.log("fourty is equal to thirty and thirty is less than to fourty:?");
console.log(fourty===thirty && thirty < fourty);////false

///using || operator

console.log("fourty is greater than to thirty and thirty is less than to fourty:?");
console.log(fourty > thirty || thirty < fourty);////true

console.log("fourty is equal to thirty and thirty is less than to fourty:?");
console.log(fourty===thirty || thirty >= fourty);////false


////Test whether an item is in a array

let color:string[]=["red","orange","yellow","green"]
console.log("yellow is included in my color array");
console.log(color.includes("yellow"));

// Test whether an item is not in a array



console.log("yellow is not includes in my color array");
console.log(!color.includes("yellow"));









