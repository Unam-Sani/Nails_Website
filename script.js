// Initialize Google Maps
function initMap() {
    var location = { lat: -33.9186, lng: 18.4232 }; // Example coordinates for Cape Town
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: location,
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map,
    });
}

// Load Google Maps API dynamically
function loadMap() {
    var script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&callback=initMap`;
    script.async = true;
    document.body.appendChild(script);
}

loadMap();
