// du JavaScript ici 

const APIKey = 'd6be068477f45cf90403c8efa916dda4';

let myHeading = document.querySelector('h1');
myHeading.textContent = 'Bonjour, monde !';

if ("geolocation" in navigator){
    console.log("hallo1");
    navigator.geolocation.getCurrentPosition(function (position) {

        console.log(position);
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        appelAPI(latitude,longitude);
        
        var htmlLatitude = document.querySelector('#id-latitude');
        htmlLatitude.textContent = latitude ;

        var htmlLongitude = document.querySelector('#id-longitude');
        htmlLongitude.textContent = longitude ;
         
    }, function () {
        noGeolocation();
    });

} else {
    noGeolocation()
    }

    function noGeolocation() {
        alert("Hallo lieber Mensch, diese Webseite funktionniert leider nur mit einem Zugriff auf deiner Lokalisation!")
    }

    function appelAPI(latitude, longitude) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&lang=de&appid=${APIKey}`)
        .then ((response) => {
            return response.json();
        })
        .then ((data) => {
            console.log(data);
        })
    }
