var map = L.map('mapid').setView([47.217, -1.55], 13);


L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZG9tbml2ZWsiLCJhIjoiY2s0Mnk5Z2g4MDIybDNrcWNsN2czYnZ0YyJ9.T3bjEr5YKdxY6q4fHt3K6w' , {
    id: 'mapbox.streets',
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    minZoom: 0,
    accessToken: 'pk.eyJ1IjoiZG9tbml2ZWsiLCJhIjoiY2s0Mnk5Z2g4MDIybDNrcWNsN2czYnZ0YyJ9.T3bjEr5YKdxY6q4fHt3K6w'   
}).addTo(map);

let iconGreen = L.icon({
    iconUrl: 'img/marker_green.png',
    iconSize: [35, 35],
    iconAnchor: [35, 25],
    popupAnchor: [-3, -76]
});

let iconRed = L.icon({
    iconUrl: 'img/marker_red.png',
    iconSize: [35, 35],
    iconAnchor: [35, 25],
    popupAnchor: [-3, -76]
});

let iconOrange = L.icon({
    iconUrl: 'img/marker_orange.png',
    iconSize: [35, 35],
    iconAnchor: [35, 25],
    popupAnchor: [-3, -76]
});



let status = document.getElementById('status');
let adresse = document.getElementById('adresse');
let bike_dispo = document.getElementById('bike_dispo');
let place_libre = document.getElementById('place_libre');
let totale_place = document.getElementById('totale_place');
let borne_cb = document.getElementById('borne_cb');
let update = document.getElementById('update');
let pannel = document.getElementById('reservation'); 
let check = document.getElementById('check');
let cb = document.getElementById('cb');
let check_bike = document.getElementById('check_bike');




// Afficher les stations avec les marKers
fetch('https://api.jcdecaux.com/vls/v1/stations?contract=nantes&apiKey=1d1a8604bb18bc845f22ee84f5ee2684db15d12d')
.then(response => response.json())
.then(data => {
    data.forEach( function (station) {
        let marker =  L.marker([station.position.lat, station.position.lng], {icon: iconGreen});
        let markerRed =  L.marker([station.position.lat, station.position.lng], {icon: iconRed});
        let markerOrange =  L.marker([station.position.lat, station.position.lng], {icon: iconOrange});
        let markerGreen =  L.marker([station.position.lat, station.position.lng], {icon: iconGreen});
        
        marker.addTo(map);

        if(station.status === 'CLOSED'){
            markerRed.addTo(map);
            status.innerHTML = "Station Fermer";
            check.style.color = 'red';
            status.style.background = 'red';
            status.style["boxShadow"] = '0 0 10px red';
        }else{
            check.style.color = 'green';
            status.innerHTML = "Station ouverte";
        }
        
        if(station.available_bikes === 0){
            markerRed.addTo(map);
            markerRed.addTo(map).on('click', function(){
                btnReserv.style.display = 'none';
                infoReservation.style.display = 'block';
                pannelResa.style.display = 'none';
                pannel.style.display = "block";
                adresse.innerHTML = station.address;
                bike_dispo.innerHTML = "Aucun Vélo n'est disponible pour le moment. Essayez sur une station voisine !";
                place_libre.innerHTML = station.available_bike_stands;
                status.innerHTML = "Station fermer";
                check.style.color = 'red';
                check_bike.style.color = 'red';
                status.style.background = 'red';
                status.style["boxShadow"] = '0 0 10px red';

                if (station.banking === true){
                    borne_cb.innerHTML = 'Oui';
                    cb.style.color = 'green';

                }else{
                    cb.style.color = 'red'; 
                    borne_cb.innerHTML = 'Non';
                }
            });
            }else if (station.available_bikes <= 5 && station.available_bikes >= 1){
            markerOrange.addTo(map);
            markerOrange.addTo(map).on('click', function(){
                btnReserv.style.display = 'block';
                infoReservation.style.display = 'block';
                pannelResa.style.display = 'none';
                pannel.style.display = "block";
                adresse.innerHTML = station.address;
                bike_dispo.innerHTML = station.available_bikes;
                place_libre.innerHTML = station.available_bike_stands;
                status.innerHTML = "Station ouverte";
                check.style.color = 'orange';
                check_bike.style.color = 'orange';
                status.style.background = 'orange';
                status.style["boxShadow"] = '0 0 10px orange';
                // test localStorage
                // localStorage.setItem('markerOrange', station.address);
                // let markerOrange = localStorage.getItem('markerOrange');
                // const adressValue = document.getElementById('adresseValue');
                // const resultAdresse = document.getElementById('result-adresse');
                // adressValue.innerHTML = markerOrange;
                // resultAdresse.innerHTML = markerOrange;
                // veloAdresse.innerHTML = markerOrange;

                if (station.banking === true){
                    borne_cb.innerHTML = 'Oui';
                    cb.style.color = 'green';

                }else{
                    cb.style.color = 'red'; 
                    borne_cb.innerHTML = 'Non';
                }
            });
            }else{
            marker.addTo(map).on('click', function() {
                btnReserv.style.display = 'block';
                infoReservation.style.display = 'block';
                pannelResa.style.display = 'none';
                pannel.style.display = "block";
                status.innerHTML = "Station ouverte";
                check.style.color = 'green';
                check_bike.style.color = 'green';
                status.style.background = 'green';
                status.style["boxShadow"] = '0 0 10px green';
                adresse.innerHTML = station.address;
                bike_dispo.innerHTML = station.available_bikes;
                place_libre.innerHTML = station.available_bike_stands;
                // test localStorage
                localStorage.setItem('marker', station.address);
                let marker = localStorage.getItem('marker');

                const adressValue = document.getElementById('adresseValue');
                const resultAdresse = document.getElementById('result-adresse');

                adressValue.innerHTML = marker;
                resultAdresse.innerHTML = marker;
                veloAdresse.innerHTML = marker;
                
                if (station.banking === true){
                    borne_cb.innerHTML = 'Oui';
                    cb.style.color = 'green';
    
                }else{
                    cb.style.color = 'red'; 
                    borne_cb.innerHTML = 'Non';
                }
            });

            
        }  
    })

    

})
 
// Création des marker 

//Donner de la station selectionner

// let marker = L.marker([47.217, -1.55]).addTo(map);
// marker.bindPopup("<b>Bonjour!</b><br>je suis un Popup!!.").openPopup();
