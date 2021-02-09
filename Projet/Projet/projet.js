$(document).ready(function() {

  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  var compass = new Image();
  var needle = new Image() ;
  compass.src = 'img/compass.png';
  needle.src = 'img/needle.png';

  if(window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', function(orientation) {
      changeOrientation(orientation);
    });
  }

  function changeOrientation(orientation) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(compass, 0, 0);
    ctx.save();
    ctx.translate(100, 100);
    ctx.rotate(orientation.alpha * (Math.PI / 180));
    ctx.drawImage(needle, -100, -100);
    ctx.restore();
  }

  var img = document.getElementById('needle');
  if(window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', function(orientation) {
      img.style.transform = 'rotate(' + orientation.alpha + 'deg)' ;
    }) ;
  }

});