let myguests_List: string[] = ["Sir Zia Khan","Sir Ameen Alam", "Sir Mobashir Ali", "Sir Usama",];
  for (let i = 0; i<myguests_List.length; i++) {
    console.log(`\n Dear Respected Sir!:` + myguests_List[i] +`,\n we invited you on a Dinner.\n Thank You \n`);};

  //refrence from Q#14//

let no_Commimg : string= "sir Usama";
let new_guest : string= "Sir Hamza Syed";
myguests_List[3]=new_guest;
for(let i=0; i<myguests_List.length; i++){
    console.log("Dear Respected Sir!:" + myguests_List[i] + `,\n we invited you on a Dinner.\n Thank you\n`);
    
    }
    console.log(`${no_Commimg} is Will not Comming for Dinner Party.`);
    





