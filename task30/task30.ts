const users: string[] = ["kashif", "kamal", "nabeel", "admin", "taimoor"];

for (let i=0; i < users.length; i++){
    let massage = "hello welcom to "
    let specialMassage = `Hello ${users[i]} you are most welcom`
    if(users[i] === "admin"){
        console.log(`${specialMassage} `);
        
    }else{
        console.log(`${massage} ${users[i]}`);
        
    }
}

