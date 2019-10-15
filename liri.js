require("dotenv").config();
//Variables
//var request = require("request");
var Spotify = require("node-spotify-api");
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
//var moment = require("moment");
//var fs = require("fs");
//var axios = require("axios");

//Variable's for user inputs
let command = process.argv[2];
let input = process.argv[3];

//Switches for user actions
switch (command){
    
    case "spotify-this-song":
        spotifyThisSong();
        break;
    
    case "concert-this":
        bandInfo();
        break;
    
    case "movie-this":
        movieInfo();
        break;

    case "do-what-it-says":
        doWhatInfo();
        break;
    default:

    break;
    }

function spotifyThisSong() {
    if (!input) {
        input = "The Sign Ace of Base"
    }
}
spotify.search({ type: "track", query: input },
  function (err, data) {
      if (err) {
          return console.log("Error occured: " + err);
      }

  var songInfo = data.tracks.items[0];
    console.log("------------------------------")
    console.log("Artist: " + songInfo.artists[0].name);
    console.log("Song: " + songInfo.name);
    console.log("Preview Link: " + songInfo.preview_url);
    console.log("Album: " + songInfo.album.name);
    console.log("------------------------------")
});

