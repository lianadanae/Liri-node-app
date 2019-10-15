require("dotenv").config();
//Variables
var request = require("request");
var Spotify = require("node-spotify-api");
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var Moment = require("moment");
//var fs = require("fs");
var Axios = require("axios");

//Variable's for user inputs
let command = process.argv[2];
let input = process.argv[3];

//Switches for user actions
switch (command) {

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

//Spotify Code

function spotifyThisSong() {
    if (!input) {
        input = "The Sign Ace of Base"
    }
}
spotify.search({
        type: "track",
        query: input
    },
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

//Bands in Town Code

function bandInfo() {

    Axios.get("https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp")
        .then(function (response) {

            console.log("------------------------------");
            console.log("Venue Name: " + response.data[1].venue.name);
            console.log("Venue Location: " + response.data[1].venue.city);
            console.log("Event Date: " + Moment(response.data[1].datetime).format("MM/DD/YYYY"));
            console.log("------------------------------");

        });

}