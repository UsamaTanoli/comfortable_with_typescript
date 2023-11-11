const myGuests: string[] = ["Okasha", "Shaban", "Waseem"];

myGuests.unshift("kazi")
myGuests.splice(2,0, "Nasir")
myGuests.push("Farhan")

console.log(myGuests);

console.log(`numbers of people i am inviting = ${myGuests.length}`);

