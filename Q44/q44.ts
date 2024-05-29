function sandwitch(...item:string[]):void{
    console.log("Sandwitch Order: ")

    for(let i=0 ; i<item.length ; i++)
        console.log(`- ${item[i]}`);
        
    
}

console.log("Enjoy your sandwitch Zia");

sandwitch("tomato", "capsicum" , "Chicken")

sandwitch("Grilled Cheese","Ham Sandwich")

sandwitch("Egg Sandwich" , "Nutella Sandwich","Meatball Sandwich")

