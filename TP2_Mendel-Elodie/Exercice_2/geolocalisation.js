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