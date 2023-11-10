let missingGuest: string = "Anas";
console.log(`Due to some reasons ${missingGuest} can't attent our party\n`);

let invitedGuests2: string[] = ["Okasha", "Shaban", "Waseem"];
for(let i in invitedGuests2){
    let greetingsMessage: string = `Dear ${invitedGuests2[i]}, \n you are most velcome to little dinner party\n`
    console.log(greetingsMessage);
    
}