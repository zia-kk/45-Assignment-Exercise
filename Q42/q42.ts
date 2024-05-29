function show_magician(magicians:string []):void{
    for(const magician of magicians ){
        console.log(magician.charAt(0).toLocaleUpperCase()+ magician.slice(1));
        
    }
};

const magician:string[]=["Mr.Harry Houdini" , "Mr.Criss Angel" ,"Mr.David Blaine","Mr.Derren Brown"]

// show_magician(magician)





function make_great(magicians:string[]):void{
    for(let i=0 ;i<magicians.length;i++){
        magicians[i]=magicians[i]+ " The Great"
    }
};

const magicians_2:string[]=["Mr.Harry Houdini" , "Mr.Criss Angel" ,"Mr.David Blaine","Mr.Derren Brown"];

make_great(magicians_2)
show_magician(magicians_2)

