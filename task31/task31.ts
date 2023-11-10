const allUsers: string[] = ["kashif", "kamal", "nabeel", "admin", "taimoor"];

for (let i=0; i < allUsers.length; i++){
    let massage = "hello welcom to "
    let specialMassage = `Hello ${allUsers[i]} you are most welcom`
    if(allUsers[i] === "admin"){
        console.log(`${specialMassage} `);
        
    }else{
        console.log(`${massage} ${allUsers[i]}`);
        
    }
}

allUsers.length = 0
if(allUsers.length === 0){
    console.log("We need to find some users!");
    
}



