if (window.DeviceOrientationEvent) {
  window.addEventListener('deviceorientation', function(event){
    setTimeout(function () {
  	  document.getElementById("doeSupported").innerText = "Supported!";
  	  //document.getElementById("x").innerHtml = event.X;
  	  //document.getElementById("y").innerHtml = event.Y;
  	  //document.getElementById("z").innerHtml = event.Z;
  	  document.getElementById("alpha").innerHtml = event.alpha;
  	  document.getElementById("beta").innerHtml = event.beta;
  	  document.getElementById("gamma").innerHtml = event.gamma;
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