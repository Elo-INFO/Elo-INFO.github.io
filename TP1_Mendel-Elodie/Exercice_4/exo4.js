document.addEventListener("touchstart", touche, false);
document.addEventListener("touchend", touche, false);
document.addEventListener("touchcancel", touche, false);
document.addEventListener("touchleave", touche, false);
document.addEventListener("touchmove", touche, false);

    
function touche(event) {
	document.getElementById("x").innerHTML = event.changedTouches[0].pageX;
	document.getElementById("y").innerHTML = event.changedTouches[0].pageY;
	document.getElementById("typeEvent").innerHTML = event.type;
}