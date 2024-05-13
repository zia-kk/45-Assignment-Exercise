
// 18.	Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order

// ["Delhi","Bahawalpur","Faisalabad","Abbottabad","Cairo","Giza"]





let Places: string []=["Islamabad","Peshawar","Multan","Karachi","Lahore"]
 console.log("orignal order>>" , Places);

///• Print your array in alphabetical order without modifying the actual list.

 console.log("Alphabetical Order>>" , [...Places].sort());

//  • Show that your array is still in its original order by printing it.

console.log("still orignal order>>" , Places);

// • Print your array in reverse alphabetical order without changing the order of the original list.

 console.log("Reverse Alphabetical" , [...Places].sort().reverse());

//  • Show that your array is still in its original order by printing it again.

console.log(" still orignal order>>" , Places);


//  • Reverse the order of your list. Print the array to show that its order has changed.

 console.log("Reverse Order" , Places.reverse());

//  Reverse the order of your list again. Print the list to show it’s back to its original order.

console.log("Reverse again Order" , Places.reverse());

//  • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

console.log("Alphabetical Order>>" , [...Places].sort());




 
 