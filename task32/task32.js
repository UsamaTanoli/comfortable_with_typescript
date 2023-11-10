"use strict";
let current_users = ["anas", "huzaifa", "shazeel", "okasha", "shaban"];
let new_users = ["altaf", "ishtiaq", "Shaban", "bilal", "ANas"];
for (let newUsers of new_users) {
    let existingUsers = current_users.some((already) => already.toLowerCase() === newUsers.toLowerCase());
    if (existingUsers === true) {
        console.log(`Sorry! ${newUsers} this user name is already. use different user name`);
    }
    else {
        console.log(`congrats! ${newUsers} you can use this user name`);
    }
}
