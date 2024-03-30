//curl -X POST "https://accounts.spotify.com/api/token" \
//-H "Content-Type: application/x-www-form-urlencoded" \
//-d "grant_type=client_credentials&client_id=2eee55c4cd1b4683bea1e247fe4b1517&client_secret=11392ad9b1354331b85a80903ed25a0a"


document.addEventListener("DOMContentLoaded", function() {

    let trackData = {};


    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    
    searchButton.addEventListener('click', function () {
        console.log("Performing Track Search");
        let searchText = searchInput.ariaValueMax;
        console.log("Search text:" + searchText)
    
        let searchURL = `https://api.spotify.com/v1/search?q=${searchInput}&type=track&limit=1`
    
        fetch(searchURL, {
            headers: {Authorization: " Bearer BQBsD_G9IanxMsxUyLYV3CGVWK8dDUj6mF_ju3Bu-Rfe6RSut7pGMC2QC2WE0C9N1cNf_GJvjyxcbjdUfUjK9EueEqwz9RTei3nTBow1LowY4s6ZgEU"}
        })
    
            .then(resp => resp.json())
            .then(r => {
                console.log(JSON.stringify(r));
                trackData = r;
                displayTrackInfo();
            }
            )
    
    
    
    
    
    });
    function displayTrackInfo() {
        const albumNameElement = document.getElementById('albumName')
        const ArtistNameElement = document.getElementById('artistName')
        const TrackNameElement = document.getElementById('trackName')
        const durationElement = document.getElementById('duration')
        const populatiryElement = document.getElementById('popularity')
        const albumImageElement = document.getElementById('albumImage')
        

        albumNameElement.textContent = trackData.tracks.items[0].album.name;
        ArtistNameElement.textContent = trackData.tracks.items[0].album.artists[0].name;
        TrackNameElement.textContent = trackData.tracks.items[0].name;
        durationElement.textContent = formatDuration(trackData.tracks.items[0].duration_ms)
        populatiryElement.textContent = trackData.tracks.items[0].popularity;
        albumImageElement.src = trackData.tracks.items[0].album.images[0].url;
    };

    function formatDuration(duration) {
        const minutes= Math.floor(duration / 60000);
        const seconds = ((duration % 60000) / 1000).toFixed(0);
        return `${minutes}:${(seconds < 10 ? '0' : '')}${seconds}`;
    }





});



