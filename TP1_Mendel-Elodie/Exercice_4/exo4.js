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

document.addEventListener("touchstart", touche, false);
document.addEventListener("touchend", touche, false);
document.addEventListener("touchcancel", touche, false);
document.addEventListener("touchleave", touche, false);
document.addEventListener("touchmove", touche, false);
    
function touche(event) {
	document.getElementById("x").innerHTML = event.changedTouches[0].pageX);
	document.getElementById("y").innerHTML = event.changedTouches[0].pageY);
	document.getElementById("typeEvent").innerHTML = event.type);
}