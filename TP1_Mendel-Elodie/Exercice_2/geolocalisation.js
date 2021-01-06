var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;

  console.log('Votre position actuelle est :');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude : ${crd.longitude}`);
  console.log(`La précision est de ${crd.accuracy} mètres.`);
}

function error(err) {
  console.warn(`ERREUR (${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(function(pos) {
        let crd = pos.coords;
        document.getElementById("longitude").innerHTML = crd.longitude;
        document.getElementById("latitude").innerHTML = crd.latitude;
        document.getElementById("precision").innerHTML = crd.accuracy;
        document.getElementById("vitesse").innerHTML = crd.speed;
        document.getElementById("timestamp").innerHTML = pos.timestamp;
    });
    
    wp = navigator.geolocation.watchPosition(function(pos) {
        let crd = pos.coords;
        document.getElementById("longitude").innerHTML = crd.longitude;
        document.getElementById("latitude").innerHTML = crd.latitude;
        document.getElementById("precision").innerHTML = crd.accuracy;
        document.getElementById("vitesse").innerHTML = crd.speed;
        document.getElementById("timestamp").innerHTML = pos.timestamp
    });