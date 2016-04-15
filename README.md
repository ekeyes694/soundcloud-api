# Soundcloud-API

# YouTube-API

##Synopsis
An API application that allows you to enter a BPM (Beats per Minute) and it will display results of songs that have
a BPM equal to or greater than the specified amount. Along with the tracks BPM it displays the title, artwork, genre,
and a link to the soundcloud webpage that contains the track.

**Used for educational purposes through Thinkful Bootcamp**

## Code Example

     function getResults(bpmTerm) {
        console.log(bpmTerm);

        SC.initialize({
            client_id: '51a71b48d81e4d94fdc07f3bfc3cf431'
        });


        SC.get('/tracks', {

            bpm: {
                from: bpmTerm
            } 


## API Reference

https://developers.soundcloud.com/docs/api/reference

## Link to Website

http://ekeyes694.github.io/soundcloud-api/
