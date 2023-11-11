let magicians3: string[] = ["Harry Houdini", "David Blaine", "Doug Henning", "Dai Vernon"];

function show_magicians3(magiciansArray: string[]) {
    for (let magician of magiciansArray) {
        console.log(magician);
    }
}

function make_great3(magiciansArray: string[]): string[] {
    let modifiedArray: string[] = [];

    for (let magician of magiciansArray) {
        modifiedArray.push("Great " + magician);
    }

    return modifiedArray;
}

let modifiedMagiciansArray: string[] = make_great3([...magicians3]);

show_magicians3(magicians3);

show_magicians3(modifiedMagiciansArray);
