const APIKey = 'd6be068477f45cf90403c8efa916dda4';
var ergebnisAPI ;

const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const localisation = document.querySelector('.localisation');
const logoWetter = document.querySelector('.logo-wetter');
const placeIdee = document.querySelectorAll('.description-idea');
const placeIcon = document.querySelectorAll('.image-idea');

var arrIdee = [];
var arrIcon = [];



if ("geolocation" in navigator){
    console.log("hallo1");
    navigator.geolocation.getCurrentPosition(function (position) {

        var lat = position.coords.latitude;
        var long = position.coords.longitude;
        appelAPI(lat,long);
         
    }, function () {
        alert("Diese Webseite kann ohne Ihre Lokalisation leider nicht funktionieren, bitte erlauben Sie den Zugriff auf Ihre Lokalisation!")
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
            console.log('clouds');
            clouds();

        } else if (ergebnisAPI.weather[0].main == "Clear") {
            console.log('clear');
            clear();
            
        } else if (ergebnisAPI.weather[0].main == "Thunderstorm") {
            console.log('thunderstorm');
            thunderstorm();
            
        } else if (ergebnisAPI.weather[0].main == "Rain" || ergebnisAPI.weather[0].main == "Drizzle") {
            rain();

        } else if (ergebnisAPI.weather[0].main == "Snow") {
            snow();
            
        } else if (ergebnisAPI.weather[0].main == "Mist" || ergebnisAPI.weather[0].main == "Smoke" || ergebnisAPI.weather[0].main == "Haze" || ergebnisAPI.weather[0].main == "Dust" || ergebnisAPI.weather[0].main == "Fog" || ergebnisAPI.weather[0].main == "Sand" || ergebnisAPI.weather[0].main == "Ash" || ergebnisAPI.weather[0].main == "Squall" || ergebnisAPI.weather[0].main == "Tornado") {
            
            mist();
        }

        console.log('out if');

        for (let i = 0; i < placeIdee.length; i++) {
            placeIdee[i].innerText = arrIdee[i] ;
        }
        for (let n = 0; n < placeIcon.length; n++) {
            placeIcon[n].src = `ressources/icons/${arrIcon[n]}.svg`;
        }

    })
    console.log('out then');
}


function clouds () {

    if (ergebnisAPI.main.temp <= 5) {
        arrIdee = ['sein Zimmer putzen', 'ein Tagebuch anfangen', 'Fotos auf dem Computer oder Handy aussortieren', 'eine Sammlung seiner besten Rezepte erstellen', 'Tee trinken', 'Briefe schreiben und schicken', 'die Tiefkühltruhe enteisen', 'neue Bilder oder Poster aufhängen', 'mit Freunden oder Familie telefonieren']
        arrIcon = ['cleaning', 'tagebuch', 'fotos', 'rezepte', 'tea-mug', 'briefe', 'freezer', 'poster', 'phone']    
    }
    else if (ergebnisAPI.main.temp > 5 && ergebnisAPI.main.temp <= 15) {
        arrIdee = ['Podcasts hören', 'einen Drachen fliegen lassen', 'den Kühlschrank putzen', 'endlich mal sein Fahrrad reparieren', 'seine Schuhe putzen', 'Yoga alleine oder online mit Freunde machen', 'Skateboard oder Inliner fahren gehen', 'das Pfand wegbringen', 'seinen Kleiderschrank ausmisten']
        arrIcon = ['podcast', 'drachen', 'fridge', 'reparieren', 'schuhe', 'yoga', 'skateboard', 'pfand', 'schrank']     
    }
    else if (ergebnisAPI.main.temp > 15 && ergebnisAPI.main.temp <= 25) {
        arrIdee = ['Müll im Park sammeln #planetlove', 'Rollerskate fahren gehen', 'mit Freunden oder Familie telefonieren', 'sich um seine Pflanzen kümmern', 'ein Karaoké machen', 'einen Drachen fliegen lassen', 'ein neues Kochrezept ausprobieren', 'joggen gehen', 'die Besteckschublade putzen' ]
        arrIcon = ['müll', 'rollerskate', 'phone', 'plants', 'karaoke', 'drachen', 'kochen', 'joggen', 'schublade']
    }
    else if (ergebnisAPI.main.temp > 25) {
        arrIdee = ['eine Runde spazieren gehen', 'in einem See baden', 'auf dem Markt einkaufen gehen', 'in einer Hängematte chillen', 'das Altglas entsorgen', 'einen Drachen fliegen lassen', 'seine Pflanzen gießen', 'Eiskaffee trinken', 'eine Fahrradtour machen']
        arrIcon = ['spaziergang', 'see', 'markt', 'hängematte', 'altglas', 'drachen', 'gießen', 'eiskaffee', 'fahrrad']     
    }
}

function clear () {

    if (ergebnisAPI.main.temp <= 5) {
        arrIdee = ['eine heiße Schokolade trinken', 'joggen gehen', 'Abends den Sonnenuntergang genießen', 'den Keller aufräumen', 'ein Winter barbecue machen', 'in einem Park spazieren gehen', 'ein Lagerfeuer machen', 'die Tiefkühltruhe enteisen', 'sich um seine Pflanzen kümmern']
        arrIcon = ['s4', 'joggen', 'sunset', 'besen', 'barbecue', 'spaziergang', 'lagerfeuer', 'freezer', 'plants']        
    } 
    else if (ergebnisAPI.main.temp > 5 && ergebnisAPI.main.temp <= 15) {
        arrIdee = ['im Garten arbeiten', 'Podcast hören', 'sein Zimmer putzen', 'Abends den Sonnenuntergang genießen', 'im Park turnen', 'Fotos auf seinem Computer oder Handy aussortieren', 'Skateboard oder Inliner fahren', 'Müll im Park sammeln #planetlove', 'joggen gehen']
        arrIcon = ['garten', 'podcast', 'cleaning', 'sunset', 'turnen', 'fotos', 'skateboard', 'müll', 'joggen']       
    }
    else if (ergebnisAPI.main.temp > 15 && ergebnisAPI.main.temp <= 25) {
        arrIdee = ['sich in der Sonne bräunen', 'Skateboard oder Inliner fahren', 'das Altglas entsorgen', 'eine Wanderung machen', 'auf dem Markt einkaufen gehen', 'Fahrrad fahren', 'ein Barbecue machen', 'im Park lesen', 'im Garten arbeiten']
        arrIcon = ['sun', 'skateboard', 'altglas', 'wandern', 'markt', 'fahrrad', 'barbecue', 'study', 'garten']        
    }
    else if (ergebnisAPI.main.temp > 25) {
        arrIdee = ['sich Eis selber machen', 'draußen Freunde mit Abstand treffen', 'im Wald die frische Luft genießen', 'in einem See baden', 'Abends den Sonnenuntergang genießen', 'ein Barbecue machen', 'in einer Hängematte chillen', 'Getränke mixen', 'sich in der Sonne bräunen' ]
        arrIcon = ['eis', 'friends', 'wald', 'see', 'sunset', 'barbecue', 'hängematte', 'drinks', 'sun']    
    }
}

function thunderstorm () {
    arrIdee = ['ein Home Workout machen', 'ein Buch lesen', 'Sticken lernen', 'Briefe schreiben und schicken', 'neue Bilder oder Poster aufhängen', 'ein Film oder eine Serie schauen', 'Dart spielen', 'ein Tagebuch anfangen', 'Origamis machen']
    arrIcon = ['workout', 'study', 'sticken', 'briefe', 'poster', 'film', 'dart', 'tagebuch', 'origami']
}

function rain() {
    arrIdee = ['seinen Kleiderschrank ausmisten', 'ein Home Workout machen', 'mit Freunden oder Familie telefonieren', 'Tee trinken', 'seine Pflanzen raus stellen', 'einen Liebesbrief schreiben', 'Yoga alleine oder online mit Freunden machen', 'ein Buch lesen', 'Programmieren lernen #coder4life']
    arrIcon = ['schrank', 'workout', 'phone', 'tea-mug', 'plants', 'briefe', 'yoga', 'study', 'coding']       
}

function snow() {
    arrIdee = ['Schlitten fahren', 'Plätzchen backen', 'mit Freunden wetten wie lange der Schnee liegen bleibt', 'heiße Schokolade trinken', 'ein Schneeengel machen', 'versuchen Schnee Flöckchen aus der Luft zu essen', 'warm baden', 'eine Schneeballschlacht veranstalten', 'eine Weihnachtsplaylist anhören']
    arrIcon = ['s1', 's2', 's3', 's4', 's5', 's6', 'bathtub', 's8', 's9']        
}

function mist() {
    arrIdee = ['seine Uni- oder Arbeitsdokumente aussortieren', 'sich um seine Pflanzen kümmern', 'ein Buch lesen', 'den Keller aufräumen', 'online mit Freunden zocken', 'seine Nägel lackieren', 'eine Sammlung seiner besten Rezepte erstellen', 'Tee trinken', 'anfangen eine neue Sprache zu lernen']
    arrIcon = ['dokumente', 'pflanze', 'study', 'besen', 'zocken', 'nails', 'rezepte', 'tea-mug', 'sprache']
}



