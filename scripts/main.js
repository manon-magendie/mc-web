// du JavaScript ici 

let myHeading = document.querySelector('h1');
myHeading.textContent = 'Bonjour, monde !';

if ("geolocation" in navigator){
    console.log("hallo1");
    navigator.geolocation.getCurrentPosition(function (position) {

        console.log(position);
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        
         
    }, function () {
        noGeolocation();
    });

} else {
    noGeolocation()
    }

    function noGeolocation() {
        alert("oh no please let me know your localisation!!")
    }


  //!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');

