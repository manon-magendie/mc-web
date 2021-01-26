// du JavaScript ici 

let myHeading = document.querySelector('h1');
myHeading.textContent = 'Bonjour, monde !';

if ("geolocation" in navigator){
    console.log("hallo1");
    navigator.geolocation.getCurrentPosition(function (position) {

        console.log(position);
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        
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
        alert("Hallo lieber Mensch, diese Webseite funktionniert leider nur mit einem Zugriff auf deine Lokalisation!")
    }



