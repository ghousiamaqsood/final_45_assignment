"use strict";
// Define the make_album function
function make_album(artist_name, album_title, tracks) {
    let album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
;
// Calling three function and creating 3 variables with diffrent values
let albumsong1 = make_album("max", "Album Title song 1");
let albumsong2 = make_album("TOnny", "Album Title song 2");
let albumsong3 = make_album("Michle jackson", "Album Title song 3");
//Print the variable
console.log(albumsong1);
console.log(albumsong2);
console.log(albumsong3);
