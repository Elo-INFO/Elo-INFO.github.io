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

if (window.DeviceOrientationEvent) {
  window.addEventListener('deviceorientation', function(event){
    setTimeout(function () {
  	  document.getElementById("doeSupported").innerText = "Supported!";
  	  document.getElementById("x").innerHtml = event.X;
  	  document.getElementById("y").innerHtml = event.Y;
  	  document.getElementById("z").innerHtml = event.Z;
  	  document.getElementById("alpha").innerHtml = event.alpha;
  	  document.getElementById("beta").innerHtml = event.beta;
  	  document.getElementById("gamme").innerHtml = event.gamma;
    }, 1000);
  });
}

if (window.DeviceMotionEvent) {
  window.addEventListener('devicemotion', function(event){
    setTimeout(function () {
  	   let rx,ry,rz;
       let ax,ay,az;
            
       rx = event.acceleration.x;
       ry = event.acceleration.y;
       rz = event.acceleration.z;
            
       ax = event.rotationRate.alpha;
       ay = event.rotationRate.beta;
       az = event.rotationRate.gamma;

       document.getElementById("rotation").innerHtml = "[" + rx + "," +ry +"," +rz + "]";
  	   document.getElementById("acceleration").innerHtml = "[" + ax + "," +ay +"," +az + "]";
    }, 1000);
  });
}