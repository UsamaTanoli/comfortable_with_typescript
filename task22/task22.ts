let arr: string[] = ["karachi", "lahore", "islamabad"];

// Intentional Error: 
console.log(arr[5]);

if(arr.length > 5){
    console.log(arr[5]);
    
}else{
    console.log(`arr length is less then 5 and its original length is ${arr.length}`);
    
}


