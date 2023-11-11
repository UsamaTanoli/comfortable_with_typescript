"use strict";
function make_album(artist_name, title, tracks) {
    let album = {
        artist_name,
        title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
const album1 = make_album("Artist1", "Album One", 10);
const album2 = make_album("Artist2", "Album Two");
const album3 = make_album("Artist3", "Album Three", 15);
console.log(album1);
console.log(album2);
console.log(album3);
