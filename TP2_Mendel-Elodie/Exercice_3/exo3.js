var lat = 43.7;
var lon = 7.25;
var macarte = null;
// Fonction d'initialisation de la carte
function initMap() {
    $.ajax({
      type: "GET",
      url: "velo.geojson",
      success: function(data) {
        var mapVelos = L.map('pisteCyclable').setView([43.7013, 7.2681], 10);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright%22%3EOpenStreetMap</a> contributors',
          maxZoom: 15
        }).addTo(mapVelos);
        L.geoJSON(JSON.parse(data), {
          color: 'purple'
        }).addTo(mapVelos);
      }
    }) ;
    }

window.onload = function(){
    // Fonction d'initialisation qui s'exécute lorsque le DOM est chargé
    initMap(); 
};