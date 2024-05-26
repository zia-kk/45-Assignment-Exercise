 let current_users:string[]=["Taha" , "shehzad" , "Admin" , "Faisal","Imran"]
 let new_users:string[]=[ "Khalid" , "shehzad" ,"Admin" , "Usama","Zia"]

 new_users.forEach((new_users)=>{

   if(
    current_users.some((current_users)=>current_users.toLowerCase()===new_users.toLowerCase())
   )
   {
    console.log(`${new_users} We need to enter a new username.`);
    
   }
   else{
         console.log(`${new_users} is available. `);
         
   }

 });

 
 
 