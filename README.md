# Liri-node-app

https://lianadanae.github.io/Liri-node-app/

### Overview

In this assignment, I made LIRI. LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.  The LIRI Bot was designed to produce search results based on the following commands:

node liri.js concert-this
node liri.js spotify-this-song
node liri.js movie-this
node liri.js do-what-it-says
Each command produced different search results as listed below:

node liri.js concert-this “artist/band name”
Name of venue
Venue location
Date of the event in MM/DD/YYYY format

node liri.js spotify-this-song “song/track name”
Artist
Song
Spotify song preview url
Album

node liri.js movie-this “movie title”
Title of the movie
Year the movie came out
IMDB Rating of the movie
Country where the movie was produced
Language of the movie
Plot of the movie
Actors in the movie
Rotten Tomatoes Rating of the movie

node liri.js do-what-it-says
Print the spotify results for “I want it that way” stored in the random.txt file

##Technologies Used
Node.js
API's- Spotify, Bands in Town and OMDB
Axios, Moment and fs

