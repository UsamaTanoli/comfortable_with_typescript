const locations: string[] = ["England", "Afghanistan", "Makkah", "Canada", "Delhi"];

console.log("Original Order:", locations);

console.log("Alphabetical Order:", [...locations].sort());

console.log("Original Order (After Sorting):", locations);

console.log("Reverse Alphabetical Order:", [...locations].sort().reverse());

console.log("Original Order (After Reverse Sorting):", locations);

locations.reverse();

console.log("Reversed Order:", locations);

locations.reverse();

console.log("Back to Original Order:", locations);

locations.sort();

console.log("Sorted Alphabetical Order:", locations);

locations.sort((a, b) => b.localeCompare(a));


console.log("Sorted Reverse Alphabetical Order:", locations);
