let space: string = "there is a space for three more people so that i invited three more guests";

const oldGuests: string[] = ["Okasha", "Shaban", "Waseem"];

oldGuests.unshift("kazi")
oldGuests.splice(2,0, "Nasir")
oldGuests.push("Farhan")

console.log(oldGuests);

console.log(`${space}`);
