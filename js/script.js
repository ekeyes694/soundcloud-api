$(document).ready(function () {

    $("#sc-search").submit(function (event) {
        event.preventDefault();




        var bpmTerm = $('#bpm').val();
        searchValidation(bpmTerm);
    });

    function searchValidation(bpmTerm) {

        if ((bpmTerm == '') && (searchTerm == null)) {
            alert('Please enter something in the text box and try again!');
            $('#track-list ul').html('');
            return false;
        } else {
            // console.log(bpmTerm);
            getResults(bpmTerm);
        }
    }

    function getResults(bpmTerm) {
        console.log(bpmTerm);

        SC.initialize({
            client_id: '51a71b48d81e4d94fdc07f3bfc3cf431'
        });


        SC.get('/tracks', {

            bpm: {
                from: bpmTerm
            }




        }).then(function (tracks) {
            console.log(tracks);
            displaySearchResults(tracks);

        });
    }

    function displaySearchResults(tracks) {
        var html = "";
        $.each(tracks, function (index, track) {
            console.log(track);
            html = html + "<li><h1>" + track.title + "</h1><div id='track-info'><img src='" + track.artwork_url + "'/><h3>BPM: " + track.bpm + "</h3><p>Genre: " + track.genre + "</p><p>Playback Count: " + track.playback_count + "</p><p>" + track.description + "</p><a href ='" + track.permalink_url + "' target ='_blank'>Listen Here!</a></div></li>";
        });
        $('#track-list ul').html(html);
    }

});
