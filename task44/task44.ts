// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function orderSandwich(...items: string[]){
    console.log("order sandwich");
    
    if(items.length === 0){
        console.log("no item is selected");
        
    }else{
        console.log("Items!");
        
        for (let item of items) {
            console.log(`- ${item}`);
    
        }
        console.log("\nEnjoy your sandwich!");

    }
    

    console.log(`.....................`);
    
}

orderSandwich("mayo", "cheese", "chicken")
orderSandwich()
orderSandwich("mayo", "beef")

