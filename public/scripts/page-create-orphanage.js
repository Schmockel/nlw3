//create map
const map = L.map("mapid").setView([-27.2190475,-49.652766], 15);

//create tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",)
.addTo(map);

//create icon
const icon = L.icon({
    iconUrl: './public/images/map-marker.svg',
    iconSize: [58,68],
    iconAnchor: [29,68]
})

let marker;

//create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    //add icon layer
    marker = L.marker([lat, lng], { icon })
    .addTo(map)
})