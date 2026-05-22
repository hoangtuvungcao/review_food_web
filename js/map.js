// Leaflet Map Configuration
let map;
let markers = [];

// Initialize map
function initMap() {
    // Create map centered on Ho Chi Minh City
    map = L.map('map').setView([21.0285, 105.8542], 13);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19
    }).addTo(map);

    // Add markers for restaurants
    addRestaurantMarkers();
}

// Add markers for all restaurants
function addRestaurantMarkers(restaurants = restaurantsData) {
    // Clear existing markers
    markers.forEach(marker => map.removeLayer(marker));
    markers = [];

    // Add new markers
    restaurants.forEach(restaurant => {
        const marker = L.marker([restaurant.lat, restaurant.lng])
            .addTo(map)
            .bindPopup(`
                <div class="text-center">
                    <h3 class="font-bold text-lg">${restaurant.name}</h3>
                    <p class="text-sm text-gray-600">${restaurant.cuisineName}</p>
                    <p class="text-sm">⭐ ${restaurant.rating}</p>
                    <button onclick="openRestaurantModal(${restaurant.id})" 
                            class="mt-2 bg-orange-500 text-white px-3 py-1 rounded text-sm hover:bg-orange-600">
                        Xem chi tiết
                    </button>
                </div>
            `);
        
        markers.push(marker);
    });

    // Fit map to show all markers
    if (restaurants.length > 0) {
        const group = new L.featureGroup(markers);
        map.fitBounds(group.getBounds().pad(0.1));
    }
}

// Filter markers based on search and filters
function filterMarkers(filteredRestaurants) {
    addRestaurantMarkers(filteredRestaurants);
}

// Center map on specific restaurant
function centerOnRestaurant(lat, lng) {
    map.setView([lat, lng], 16);
}

// Initialize map when DOM is loaded
document.addEventListener('DOMContentLoaded', initMap);
