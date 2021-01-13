if (window.DeviceOrientationEvent) {
  window.addEventListener('deviceorientation', function(event){
  	  document.getElementById("doeSupported").innerText = "Supported!";
  	  document.getElementById("x").innerHTML = event.X;
  	  document.getElementById("y").innerHTML = event.Y;
  	  document.getElementById("z").innerHTML = event.Z;
  	  document.getElementById("alpha").innerHTML = event.alpha;
  	  document.getElementById("beta").innerHTML = event.beta;
  	  document.getElementById("gamma").innerHTML = event.gamma;
  });
}

if (window.DeviceMotionEvent) {
  window.addEventListener('devicemotion', function(event){
  	   let rx,ry,rz;
       let ax,ay,az;
            
       rx = event.acceleration.x;
       ry = event.acceleration.y;
       rz = event.acceleration.z;
            
       ax = event.rotationRate.alpha;
       ay = event.rotationRate.beta;
       az = event.rotationRate.gamma;

       document.getElementById("rotation").innerHTML = "[" + rx + "," +ry +"," +rz + "]";
  	   document.getElementById("acceleration").innerHTML = "[" + ax + "," +ay +"," +az + "]";
  });
}