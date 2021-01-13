// On initialise la latitude et la longitude de Paris (centre de la carte)
var lat = 24.886;
var lon = -70.268;
var macarte = null;
// Fonction d'initialisation de la carte
function initMap() {
    // Créer l'objet "macarte" et l'insèrer dans l'élément HTML qui a l'ID "map"
    macarte = L.map('map').setView([lat, lon], 5);
    // Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. Nous devons lui préciser où nous souhaitons les récupérer. Ici, openstreetmap.fr
    L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
    // Il est toujours bien de laisser le lien vers la source des données
        attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
        minZoom: 1,
        mapTypeId: "terrain",
        maxZoom: 20
        }).addTo(macarte);
        // Nous ajoutons un marqueur
        //var marker = L.marker([lat, lon]).addTo(macarte);
        // Define the LatLng coordinates for the polygon's path.
        const triangleCoords = [
            { lat: 29.122349, lng: -80.991361 },
            { lat: 18.216919, lng: -66.580912 },
            { lat: 32.320236, lng: -64.7740215 },
        ];

        var triangle = L.polygon(triangleCoords).addTo(macarte);

        triangle.setStyle({
            color: 'red'
        });
}
window.onload = function(){
    // Fonction d'initialisation qui s'exécute lorsque le DOM est chargé
    initMap(); 
};

navigator.geolocation.getCurrentPosition(function(pos) {
        let crd = pos.coords;
        document.getElementById("longitude").innerHTML = crd.longitude;
        document.getElementById("latitude").innerHTML = crd.latitude;
});