require("dotenv").config();
//Variables
var Spotify = require("node-spotify-api");
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var moment = require("moment");
var fs = require("fs");
var Axios = require("axios");

//Spotify Code

// Helper function that gets the artist name
var getArtistNames = function (artist) {
    return artist.name;
};

// Function for running Spotify search
var spotifyThisSong = function (songInfo) {
    if (songInfo === undefined) {
        songInfo = "The Sign Ace of Base";
    }

    spotify.search({
            type: "track",
            query: songInfo
        },
        function (err, data) {
            if (err) {
                console.log("Error occured: " + err);
                return;
            }

            var songs = data.tracks.items;

            for (var i = 0; i < songs.length; i++) {
                console.log("------------------------------")
                console.log(i);
                console.log("artist: " + songs[i].artists.map(getArtistNames));
                console.log("song name: " + songs[i].name);
                console.log("preview song: " + songs[i].preview_url);
                console.log("album: " + songs[i].album.name);
                console.log("-----------------------------------");
            }
        }
    );
};

//Bands in Town Code
var getBands = function (artist) {
var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
    Axios.get(queryURL)
        .then(function (response) {
            var jsonData = response.data;

            if (!jsonData.length) {
                console.log("No results found for " + artist);
                return;
              }
        
              console.log("Upcoming concerts for " + artist + ":");
        
              for (var i = 0; i < jsonData.length; i++) {
                var show = jsonData[i];
        
            console.log("Venue Name: " + show.venue.name);
            console.log("Venue Location: " + show.venue.city);
            console.log("Event Date: " + moment(show.datetime).format("MM/DD/YYYY"));
            console.log("------------------------------");
              }      
        });
        };
           


//Function for running a movie search
var getMovie = function (movieInfo) {
    if (movieInfo === undefined) {
        movieInfo = "Mr + Nobody";
    }

    var movieSearch = "http://www.omdbapi.com/?t=" + movieInfo + "&y=&plot=short&apikey=trilogy";

    Axios.get(movieSearch)
        .then(function (response) {
            var movieData = response.data;

            console.log("__________________________")
            console.log("Title: " + movieData.Title);
            console.log("Year " + movieData.Year);
            console.log("IMDB Rating: " + movieData.Ratings[0].Value);
            console.log("Rotten Tomatoes Rating: " + movieData.Ratings[1].Value);
            console.log("Country: "+ movieData.Country);
            console.log("Language: " + movieData.Language);
            console.log("Plot: " + movieData.Plot);
            console.log("Actors: " + movieData.Actors);
            console.log("__________________________")
        }
    );
};

// Function for running a command based on text file
var doWhatInfo = function () {
    fs.readFile("random.txt", "utf8", function (error, data) {
        console.log(data);
        var dataArr = data.split(", ");

        if (dataArr.length === 2) {
            pick(dataArr[0], dataArr[1]);
        } else if (dataArr.length === 1) {
            pick(dataArr[0]);
        }
    });
};

var pick = function (caseData, functionData) {
    switch (caseData) {
        case "spotify-this":
            spotifyThisSong(functionData);
            break;
        case "movie-this":
            getMovie(functionData);
            break;
        case "concert-this":
            getBands(functionData);
            break;
        case "do-what-it-says":
            doWhatInfo();
            break;
        default:
            console.log("LIRI doesn't know that");
    }
};

// Function which takes in command line arguments and executes correct function accordingly
var runThis = function (argOne, argTwo) {
    pick(argOne, argTwo);
};

// // MAIN PROCESS
// // =====================================
runThis(process.argv[2], process.argv.slice(3).join(" "));