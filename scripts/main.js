// du JavaScript ici 

const APIKey = 'd6be068477f45cf90403c8efa916dda4';
let ergebnisAPI ;

//let myHeading = document.querySelector('h1');
//myHeading.textContent = 'Bonjour, monde !';

const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const localisation = document.querySelector('.localisation');
const logoWetter = document.querySelector('.logo-wetter');
const placeIdee = document.querySelectorAll('.description-idea');


if ("geolocation" in navigator){
    console.log("hallo1");
    navigator.geolocation.getCurrentPosition(function (position) {

        var lat = position.coords.latitude;
        var long = position.coords.longitude;
        appelAPI(lat,long);
  
        //document.querySelector('#id-latitude').textContent = lat ;
        //document.querySelector('#id-longitude').textContent = long ; 
         
    }, function () {
        alert("Sie haben den Zugriff auf Ihren Geolokalisation abgelehnt, die Webseite kann nicht funktionnieren, bitte erlauben Sie den Zugriff auf Ihre Geolokalisation .")
    })
} 


function appelAPI(latitude, longitude) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&lang=de&appid=${APIKey}`)
    .then ((response) => {
        return response.json();
    })
    .then ((data) => {
        
        ergebnisAPI = data;
        console.log(ergebnisAPI);

        description.innerText = ergebnisAPI.weather[0].description;
        temperature.innerText = `${Math.trunc(ergebnisAPI.main.temp)}°`;
        localisation.innerText = ergebnisAPI.name;

        let aktuelleUhrzeit = new Date().getHours(); 

        // Dynamisches Wetter Icon
        logoWetter.src = `ressources/wetter/${ergebnisAPI.weather[0].icon}.svg`;
        

        // Idee in blocs je nach Wetter

        if (ergebnisAPI.weather[0].main == "Clouds") {

            if (ergebnisAPI.main.temp <= 5) {
                let arrClouds_20_5 = ['sehr sehr kalt', 'Pflanzen gießen', 'Spazieren gehen', 'watch a movie', 'clean up your room/apartment', 'dog-sitting gehen', 'lesen', 'Oma und Opa anrufen', 'write in your diary']

                for (let i = 0; i < placeIdee.length; i++) {
                    placeIdee[i].innerText = arrClouds_20_5[i] ;
                }
            }

            else if (ergebnisAPI.main.temp > 5 && ergebnisAPI.main.temp <= 15) {
                let arrClouds_5_15 = ['en vrai ça va', 'Pflanzen gießen', 'Spazieren gehen', 'watch a movie', 'clean up your room/apartment', 'dog-sitting gehen', 'lesen', 'Oma und Opa anrufen', 'write in your diary']

                for (let i = 0; i < placeIdee.length; i++) {
                    placeIdee[i].innerText = arrClouds_5_15[i] ;
                }
            }

            else if (ergebnisAPI.main.temp > 15 && ergebnisAPI.main.temp <= 25) {
                let arrClouds_15_25 = ['Kuchen backen', 'Pflanzen gießen', 'Spazieren gehen', 'watch a movie', 'clean up your room/apartment', 'dog-sitting gehen', 'lesen', 'Oma und Opa anrufen', 'write in your diary']

                for (let i = 0; i < placeIdee.length; i++) {
                    placeIdee[i].innerText = arrClouds_15_25[i] ;
                }
            }

            else if (ergebnisAPI.main.temp > 25 && ergebnisAPI.main.temp <= 40) {
                let arrClouds_25_40 = ['Kuchen backen', 'Pflanzen gießen', 'Spazieren gehen', 'watch a movie', 'clean up your room/apartment', 'dog-sitting gehen', 'lesen', 'Oma und Opa anrufen', 'write in your diary']

                for (let i = 0; i < placeIdee.length; i++) {
                    placeIdee[i].innerText = arrClouds_25_40[i] ;
                }
            }

        } else if (ergebnisAPI.weather[0].main == "Clear") {

            if (ergebnisAPI.main.temp <= 5) {
                let arrClear_20_5 = ['sehr sehr kalt', 'Pflanzen gießen', 'Spazieren gehen', 'watch a movie', 'clean up your room/apartment', 'dog-sitting gehen', 'lesen', 'Oma und Opa anrufen', 'write in your diary']

                for (let i = 0; i < placeIdee.length; i++) {
                    placeIdee[i].innerText = arrClear_20_5[i] ;
                }
            } 
            
            else if (ergebnisAPI.main.temp > 5 && ergebnisAPI.main.temp <= 15) {
                let arrClear_5_15 = ['en vrai ça va', 'Pflanzen gießen', 'Spazieren gehen', 'watch a movie', 'clean up your room/apartment', 'dog-sitting gehen', 'lesen', 'Oma und Opa anrufen', 'write in your diary']

                for (let i = 0; i < placeIdee.length; i++) {
                    placeIdee[i].innerText = arrClear_5_15[i] ;
                }
            }

            else if (ergebnisAPI.main.temp > 15 && ergebnisAPI.main.temp <= 25) {
                let arrClear_15_25 = ['Kuchen backen', 'Pflanzen gießen', 'Spazieren gehen', 'watch a movie', 'clean up your room/apartment', 'dog-sitting gehen', 'lesen', 'Oma und Opa anrufen', 'write in your diary']

                for (let i = 0; i < placeIdee.length; i++) {
                    placeIdee[i].innerText = arrClear_15_25[i] ;
                }
            }

            else if (ergebnisAPI.main.temp > 25 && ergebnisAPI.main.temp <= 40) {
                let arrClear_25_40 = ['Kuchen backen', 'Pflanzen gießen', 'Spazieren gehen', 'watch a movie', 'clean up your room/apartment', 'dog-sitting gehen', 'lesen', 'Oma und Opa anrufen', 'write in your diary']

                for (let i = 0; i < placeIdee.length; i++) {
                    placeIdee[i].innerText = arrClear_25_40[i] ;
                }
            }
        } else if (ergebnisAPI.weather[0].main == "Thunderstorm") {

            if (ergebnisAPI.main.temp <= 5) {
                let arrThunderstorm_20_5 = ['sehr sehr kalt', 'Pflanzen gießen', 'Spazieren gehen', 'watch a movie', 'clean up your room/apartment', 'dog-sitting gehen', 'lesen', 'Oma und Opa anrufen', 'write in your diary']

                for (let i = 0; i < placeIdee.length; i++) {
                    placeIdee[i].innerText = arrThunderstorm_20_5[i] ;
                }
            } 
            
            else if (ergebnisAPI.main.temp > 5 && ergebnisAPI.main.temp <= 15) {
                let arrThunderstorm_5_15 = ['en vrai ça va', 'Pflanzen gießen', 'Spazieren gehen', 'watch a movie', 'clean up your room/apartment', 'dog-sitting gehen', 'lesen', 'Oma und Opa anrufen', 'write in your diary']

                for (let i = 0; i < placeIdee.length; i++) {
                    placeIdee[i].innerText = arrThunderstorm_5_15[i] ;
                }
            }

            else if (ergebnisAPI.main.temp > 15 && ergebnisAPI.main.temp <= 25) {
                let arrThunderstorm_15_25 = ['Kuchen backen', 'Pflanzen gießen', 'Spazieren gehen', 'watch a movie', 'clean up your room/apartment', 'dog-sitting gehen', 'lesen', 'Oma und Opa anrufen', 'write in your diary']

                for (let i = 0; i < placeIdee.length; i++) {
                    placeIdee[i].innerText = arrThunderstorm_15_25[i] ;
                }
            }

            else if (ergebnisAPI.main.temp > 25 && ergebnisAPI.main.temp <= 40) {
                let arrThunderstorm_25_40 = ['Kuchen backen', 'Pflanzen gießen', 'Spazieren gehen', 'watch a movie', 'clean up your room/apartment', 'dog-sitting gehen', 'lesen', 'Oma und Opa anrufen', 'write in your diary']

                for (let i = 0; i < placeIdee.length; i++) {
                    placeIdee[i].innerText = arrThunderstorm_25_40[i] ;
                }
            }
        } else if (ergebnisAPI.weather[0].main == "Rain" || ergebnisAPI.weather[0].main == "Drizzle") {

            if (ergebnisAPI.main.temp <= 5) {
                let arrRain_20_5 = ['sehr sehr kalt', 'Pflanzen gießen', 'Spazieren gehen', 'watch a movie', 'clean up your room/apartment', 'dog-sitting gehen', 'lesen', 'Oma und Opa anrufen', 'write in your diary']

                for (let i = 0; i < placeIdee.length; i++) {
                    placeIdee[i].innerText = arrRain_20_5[i] ;
                }
            } 
            
            else if (ergebnisAPI.main.temp > 5 && ergebnisAPI.main.temp <= 15) {
                let arrRain_5_15 = ['en vrai ça va', 'Pflanzen gießen', 'Spazieren gehen', 'watch a movie', 'clean up your room/apartment', 'dog-sitting gehen', 'lesen', 'Oma und Opa anrufen', 'write in your diary']

                for (let i = 0; i < placeIdee.length; i++) {
                    placeIdee[i].innerText = arrRain_5_15[i] ;
                }
            }

            else if (ergebnisAPI.main.temp > 15 && ergebnisAPI.main.temp <= 25) {
                let arrRain_15_25 = ['Kuchen backen', 'Pflanzen gießen', 'Spazieren gehen', 'watch a movie', 'clean up your room/apartment', 'dog-sitting gehen', 'lesen', 'Oma und Opa anrufen', 'write in your diary']

                for (let i = 0; i < placeIdee.length; i++) {
                    placeIdee[i].innerText = arrRain_15_25[i] ;
                }
            }

            else if (ergebnisAPI.main.temp > 25 && ergebnisAPI.main.temp <= 40) {
                let arrRain_25_40 = ['Kuchen backen', 'Pflanzen gießen', 'Spazieren gehen', 'watch a movie', 'clean up your room/apartment', 'dog-sitting gehen', 'lesen', 'Oma und Opa anrufen', 'write in your diary']

                for (let i = 0; i < placeIdee.length; i++) {
                    placeIdee[i].innerText = arrRain_25_40[i] ;
                }
            }
        } else if (ergebnisAPI.weather[0].main == "Snow") {

            if (ergebnisAPI.main.temp <= 5) {
                let arrRain_20_5 = ['sehr sehr kalt', 'Pflanzen gießen', 'Spazieren gehen', 'watch a movie', 'clean up your room/apartment', 'dog-sitting gehen', 'lesen', 'Oma und Opa anrufen', 'write in your diary']

                for (let i = 0; i < placeIdee.length; i++) {
                    placeIdee[i].innerText = arrRain_20_5[i] ;
                }
            } 
            
            else {
                alert('oh wait this is impossible.. ')
            }
        } else if (ergebnisAPI.weather[0].main == "Mist" || ergebnisAPI.weather[0].main == "Smoke" || ergebnisAPI.weather[0].main == "Haze" || ergebnisAPI.weather[0].main == "Dust" || ergebnisAPI.weather[0].main == "Fog" || ergebnisAPI.weather[0].main == "Sand" || ergebnisAPI.weather[0].main == "Ash" || ergebnisAPI.weather[0].main == "Squall" || ergebnisAPI.weather[0].main == "Tornado") {

            if (ergebnisAPI.main.temp <= 5) {
                let arrMist_20_5 = ['sehr sehr kalt', 'Pflanzen gießen', 'Spazieren gehen', 'watch a movie', 'clean up your room/apartment', 'dog-sitting gehen', 'lesen', 'Oma und Opa anrufen', 'write in your diary']

                for (let i = 0; i < placeIdee.length; i++) {
                    placeIdee[i].innerText = arrMist_20_5[i] ;
                }
            } 
            
            else if (ergebnisAPI.main.temp > 5 && ergebnisAPI.main.temp <= 15) {
                let arrMist_5_15 = ['en vrai ça va', 'Pflanzen gießen', 'Spazieren gehen', 'watch a movie', 'clean up your room/apartment', 'dog-sitting gehen', 'lesen', 'Oma und Opa anrufen', 'write in your diary']

                for (let i = 0; i < placeIdee.length; i++) {
                    placeIdee[i].innerText = arrMist_5_15[i] ;
                }
            }

            else if (ergebnisAPI.main.temp > 15 && ergebnisAPI.main.temp <= 25) {
                let arrMist_15_25 = ['Kuchen backen', 'Pflanzen gießen', 'Spazieren gehen', 'watch a movie', 'clean up your room/apartment', 'dog-sitting gehen', 'lesen', 'Oma und Opa anrufen', 'write in your diary']

                for (let i = 0; i < placeIdee.length; i++) {
                    placeIdee[i].innerText = arrMist_15_25[i] ;
                }
            }

            else if (ergebnisAPI.main.temp > 25 && ergebnisAPI.main.temp <= 40) {
                let arrMist_25_40 = ['Kuchen backen', 'Pflanzen gießen', 'Spazieren gehen', 'watch a movie', 'clean up your room/apartment', 'dog-sitting gehen', 'lesen', 'Oma und Opa anrufen', 'write in your diary']

                for (let i = 0; i < placeIdee.length; i++) {
                    placeIdee[i].innerText = arrMist_25_40[i] ;
                }
            }
        }
    })
}




