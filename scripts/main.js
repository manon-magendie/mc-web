// das API Schlüssel
const APIKey = 'd6be068477f45cf90403c8efa916dda4';
var ergebnisAPI ;

// selektierte Klassen im HTML Code werden in Variablen gespeichert
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const localisation = document.querySelector('.localisation');
const logoWetter = document.querySelector('.logo-wetter');
const placeIdee = document.querySelectorAll('.description-idea');
const placeIcon = document.querySelectorAll('.image-idea');
const loadingContainer = document.querySelector('.overlay-loader');

var ideas = [];


// schaut nach ob die Geolokalisation zugelassen ist. Wenn ja werden die Latitude und Longitude gespeichert
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
    // benutzt das API und die Longitude und Latitude der Person
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&lang=de&appid=${APIKey}`)
    .then ((response) => {
        return response.json();
    })
    .then ((data) => {
        
        ergebnisAPI = data;
        console.log(ergebnisAPI);

        // die Beschreibung des Wetters, die Temperatur und der Ort werden aus den API Daten geholt und auf der Webseite angezeigt
        description.innerText = ergebnisAPI.weather[0].description;
        temperature.innerText = `${Math.trunc(ergebnisAPI.main.temp)}°`;
        localisation.innerText = ergebnisAPI.name;


        // Dynamisches Wetter Icon
        logoWetter.src = `ressources/wetter/${ergebnisAPI.weather[0].icon}.svg`;


        // schaut nach, welche Bedingungen das Wetter erfüllt und ruft die entsprechende Funktion
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

        // die Arrays werden zum HTML Code geschickt. Jedes Block bekommt eine Beschreibung der Idee und ein Icon 
        for (let i = 0; i < placeIdee.length; i++) {
            placeIdee[i].innerText = ideas[i][0] ;
        }
        for (let n = 0; n < placeIcon.length; n++) {
            placeIcon[n].src = `ressources/icons/${ideas[n][1]}.svg`;
        }

        loadingContainer.classList.add('verschwindet');
    })
}

// die Funktionen die je nach Wetter angerufen werden. Die 2 arrays werden in den Funktionen definiert
function clouds () {

    if (ergebnisAPI.main.temp <= 5) {
        ideas = [['sein Zimmer putzen', 'cleaning'], ['ein Tagebuch anfangen', 'tagebuch'], ['Fotos auf dem Computer oder Handy aussortieren', 'fotos'], ['eine Sammlung seiner besten Rezepte erstellen', 'rezepte'], ['Tee trinken', 'tea-mug'], ['Briefe schreiben und schicken', 'briefe'], ['die Tiefkühltruhe enteisen', 'freezer'], ['neue Bilder oder Poster aufhängen', 'poster'], ['mit Freunden oder Familie telefonieren', 'phone']]
    }
    else if (ergebnisAPI.main.temp > 5 && ergebnisAPI.main.temp <= 15) {
        ideas = [['Podcasts hören', 'podcast'], ['einen Drachen fliegen lassen', 'drachen'], ['den Kühlschrank putzen', 'fridge'], ['endlich mal sein Fahrrad reparieren', 'reparieren'], ['seine Schuhe putzen', 'schuhe'], ['Yoga alleine oder online mit Freunde machen', 'yoga'], ['Skateboard oder Inliner fahren gehen', 'skateboard'], ['das Pfand wegbringen', 'pfand'], ['seinen Kleiderschrank ausmisten', 'schrank']]     
    }
    else if (ergebnisAPI.main.temp > 15 && ergebnisAPI.main.temp <= 25) {
        ideas = [['Müll im Park sammeln #planetlove', 'müll'], ['Rollerskate fahren gehen', 'rollerskate'], ['mit Freunden oder Familie telefonieren', 'phone'], ['sich um seine Pflanzen kümmern', 'plants'], ['ein Karaoké machen', 'karaoke'], ['einen Drachen fliegen lassen', 'drachen'], ['ein neues Kochrezept ausprobieren', 'kochen'], ['joggen gehen', 'joggen'], ['die Besteckschublade putzen', 'schublade']]
    }
    else if (ergebnisAPI.main.temp > 25) {
        ideas = [['eine Runde spazieren gehen', 'spaziergang'], ['in einem See baden', 'see'], ['auf dem Markt einkaufen gehen', 'markt'], ['in einer Hängematte chillen', 'hängematte'], ['das Altglas entsorgen', 'altglas'], ['einen Drachen fliegen lassen', 'drachen'], ['seine Pflanzen gießen', 'gießen'], ['Eiskaffee trinken', 'eiskaffee'], ['eine Fahrradtour machen', 'fahrrad']] 
    }
}

function clear () {

    if (ergebnisAPI.main.temp <= 5) {
        ideas = [['eine heiße Schokolade trinken', 's4'], ['joggen gehen', 'joggen'], ['Abends den Sonnenuntergang genießen', 'sunset'], ['den Keller aufräumen', 'besen'], ['ein Winter barbecue machen', 'barbecue'], ['in einem Park spazieren gehen', 'spaziergang'], ['ein Lagerfeuer machen', 'lagerfeuer'], ['die Tiefkühltruhe enteisen', 'freezer'], ['sich um seine Pflanzen kümmern', 'plants']]      
    } 
    else if (ergebnisAPI.main.temp > 5 && ergebnisAPI.main.temp <= 15) {
        arrIdee = [['im Garten arbeiten', 'garten'], ['Podcast hören', 'podcast'], ['sein Zimmer putzen', 'cleaning'], ['Abends den Sonnenuntergang genießen', 'sunset'], ['im Park turnen', 'turnen'], ['Fotos auf seinem Computer oder Handy aussortieren', 'fotos'], ['Skateboard oder Inliner fahren', 'skateboard'], ['Müll im Park sammeln #planetlove', 'müll'], ['joggen gehen', 'joggen']]      
    }
    else if (ergebnisAPI.main.temp > 15 && ergebnisAPI.main.temp <= 25) {
        arrIdee = [['sich in der Sonne bräunen', 'sun'], ['Skateboard oder Inliner fahren', 'skateboard'], ['das Altglas entsorgen', 'altglas'], ['eine Wanderung machen', 'wandern'], ['auf dem Markt einkaufen gehen', 'markt'], ['Fahrrad fahren', 'fahrrad'], ['ein Barbecue machen', 'barbecue'], ['im Park lesen', 'study'], ['im Garten arbeiten', 'garten']]    
    }
    else if (ergebnisAPI.main.temp > 25) {
        arrIdee = [['sich Eis selber machen', 'eis'], ['draußen Freunde mit Abstand treffen', 'friends'], ['im Wald die frische Luft genießen', 'wald'], ['in einem See baden', 'see'], ['Abends den Sonnenuntergang genießen', 'sunset'], ['ein Barbecue machen', 'barbecue'], ['in einer Hängematte chillen', 'hängematte'], ['Getränke mixen', 'drinks'], ['sich in der Sonne bräunen', 'sun']] 
    }
}

// bei Regen, Nebel, Schnee und Gewitter, wird die Temperatur nicht mehr beachtet, da angenommen wird dass man sowieso zuhause bleibt
function thunderstorm () {
    arrIdee = [['ein Home Workout machen', 'workout'], ['ein Buch lesen', 'study'], ['Sticken lernen', 'sticken'], ['Briefe schreiben und schicken', 'briefe'], ['neue Bilder oder Poster aufhängen', 'poster'], ['ein Film oder eine Serie schauen', 'film'], ['Dart spielen', 'dart'], ['ein Tagebuch anfangen', 'tagebuch'], ['Origamis machen', 'origami']]
}

function rain() {
    arrIdee = [['seinen Kleiderschrank ausmisten', 'schrank'], ['ein Home Workout machen', 'workout'], ['mit Freunden oder Familie telefonieren', 'phone'], ['Tee trinken', 'tea-mug'], ['seine Pflanzen raus stellen', 'plants'], ['einen Liebesbrief schreiben', 'briefe'], ['Yoga alleine oder online mit Freunden machen', 'yoga'], ['ein Buch lesen', 'study'], ['Programmieren lernen #coder4life', 'coding']]      
}

function snow() {
    arrIdee = [['Schlitten fahren', 's1'], ['Plätzchen backen', 's2'], ['mit Freunden wetten wie lange der Schnee liegen bleibt', 's3'], ['heiße Schokolade trinken', 's4'], ['ein Schneeengel machen', 's5'], ['versuchen Schnee Flöckchen aus der Luft zu essen', 's6'], ['warm baden', 'bathtub'], ['eine Schneeballschlacht veranstalten', 's8'], ['eine Weihnachtsplaylist anhören', 's9']]  
}

function mist() {
    arrIdee = [['seine Uni- oder Arbeitsdokumente aussortieren', 'dokumente'], ['sich um seine Pflanzen kümmern', 'pflanze'], ['ein Buch lesen', 'study'], ['den Keller aufräumen', 'besen'], ['online mit Freunden zocken', 'zocken'], ['seine Nägel lackieren', 'nails'], ['eine Sammlung seiner besten Rezepte erstellen', 'rezepte'], ['Tee trinken', 'tea-mug'], ['anfangen eine neue Sprache zu lernen', 'sprache']]
}



