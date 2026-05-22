// Main JavaScript for Street Food Guide

let currentRestaurant = null;
let selectedRating = 0;

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    renderRestaurantList();
    setupEventListeners();
});

// Render restaurant list
function renderRestaurantList(restaurants = restaurantsData) {
    const listContainer = document.getElementById('restaurant-list');
    listContainer.innerHTML = '';

    if (restaurants.length === 0) {
        listContainer.innerHTML = `
            <div class="text-center py-8 text-gray-500">
                <p>Không tìm thấy quán ăn nào.</p>
            </div>
        `;
        return;
    }

    restaurants.forEach(restaurant => {
        const card = createRestaurantCard(restaurant);
        listContainer.appendChild(card);
    });
}

// Create restaurant card element
function createRestaurantCard(restaurant) {
    const card = document.createElement('div');
    card.className = 'restaurant-card bg-gray-50 rounded-lg p-4 border border-gray-200 fade-in';
    card.onclick = () => openRestaurantModal(restaurant.id);

    const stars = generateStars(restaurant.rating);
    const priceClass = getPriceClass(restaurant.priceLevel);

    card.innerHTML = `
        <div class="flex items-start space-x-4">
            <img src="${restaurant.image}" alt="${restaurant.name}" 
                 class="w-24 h-24 object-cover rounded-lg">
            <div class="flex-1">
                <h3 class="font-bold text-lg text-gray-800">${restaurant.name}</h3>
                <p class="text-sm text-gray-600">${restaurant.cuisineName}</p>
                <div class="flex items-center mt-1">
                    <span class="text-yellow-500">${stars}</span>
                    <span class="ml-2 text-sm text-gray-600">${restaurant.rating}</span>
                </div>
                <p class="text-sm ${priceClass} mt-1">${restaurant.priceRange}</p>
                <p class="text-sm text-gray-500 mt-1">${restaurant.address}</p>
            </div>
        </div>
    `;

    return card;
}

// Generate star rating HTML
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let stars = '';

    for (let i = 0; i < fullStars; i++) {
        stars += '★';
    }

    if (hasHalfStar) {
        stars += '½';
    }

    return stars;
}

// Get price class for styling
function getPriceClass(priceLevel) {
    switch (priceLevel) {
        case 'cheap':
            return 'price-cheap';
        case 'medium':
            return 'price-medium';
        case 'expensive':
            return 'price-expensive';
        default:
            return '';
    }
}

// Setup event listeners
function setupEventListeners() {
    // Search input
    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', filterRestaurants);

    // Cuisine filter
    const cuisineFilter = document.getElementById('cuisine-filter');
    cuisineFilter.addEventListener('change', filterRestaurants);

    // Price filter
    const priceFilter = document.getElementById('price-filter');
    priceFilter.addEventListener('change', filterRestaurants);

    // Close modal
    const closeModalBtn = document.getElementById('close-modal');
    closeModalBtn.addEventListener('click', closeRestaurantModal);

    // Modal overlay click
    const modal = document.getElementById('restaurant-modal');
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeRestaurantModal();
        }
    });

    // Rating stars
    const ratingButtons = document.querySelectorAll('#rating-stars button');
    ratingButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            selectedRating = parseInt(e.target.dataset.rating);
            updateRatingStars();
        });
    });

    // Review form
    const reviewForm = document.getElementById('review-form');
    reviewForm.addEventListener('submit', handleReviewSubmit);
}

// Filter restaurants based on search and filters
function filterRestaurants() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const cuisineFilter = document.getElementById('cuisine-filter').value;
    const priceFilter = document.getElementById('price-filter').value;

    const filtered = restaurantsData.filter(restaurant => {
        const matchesSearch = restaurant.name.toLowerCase().includes(searchTerm) ||
                            restaurant.cuisineName.toLowerCase().includes(searchTerm) ||
                            restaurant.address.toLowerCase().includes(searchTerm);
        
        const matchesCuisine = !cuisineFilter || restaurant.cuisine === cuisineFilter;
        const matchesPrice = !priceFilter || restaurant.priceRange === priceFilter;

        return matchesSearch && matchesCuisine && matchesPrice;
    });

    renderRestaurantList(filtered);
    filterMarkers(filtered);
}

// Open restaurant modal
function openRestaurantModal(restaurantId) {
    currentRestaurant = restaurantsData.find(r => r.id === restaurantId);
    
    if (!currentRestaurant) return;

    document.getElementById('modal-title').textContent = currentRestaurant.name;
    
    const modalContent = document.getElementById('modal-content');
    const stars = generateStars(currentRestaurant.rating);
    const priceClass = getPriceClass(currentRestaurant.priceLevel);

    modalContent.innerHTML = `
        <img src="${currentRestaurant.image}" alt="${currentRestaurant.name}" 
             class="w-full h-48 object-cover rounded-lg mb-4">
        
        <div class="grid grid-cols-2 gap-4 mb-4">
            <div>
                <p class="text-sm text-gray-600"><strong>Loại món:</strong> ${currentRestaurant.cuisineName}</p>
                <p class="text-sm text-gray-600"><strong>Địa chỉ:</strong> ${currentRestaurant.address}</p>
                <p class="text-sm text-gray-600"><strong>Điện thoại:</strong> ${currentRestaurant.phone}</p>
            </div>
            <div>
                <p class="text-sm text-gray-600"><strong>Giờ mở cửa:</strong> ${currentRestaurant.openingHours}</p>
                <p class="text-sm text-gray-600"><strong>Giá cả:</strong> <span class="${priceClass}">${currentRestaurant.priceRange}</span></p>
                <p class="text-sm text-gray-600"><strong>Đánh giá:</strong> <span class="text-yellow-500">${stars}</span> ${currentRestaurant.rating}</p>
            </div>
        </div>
        
        <p class="text-gray-700">${currentRestaurant.description}</p>
        
        <button onclick="centerOnRestaurant(${currentRestaurant.lat}, ${currentRestaurant.lng})" 
                class="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
            🗺️ Xem trên bản đồ
        </button>
    `;

    renderReviews();
    document.getElementById('restaurant-modal').classList.remove('hidden');
}

// Close restaurant modal
function closeRestaurantModal() {
    document.getElementById('restaurant-modal').classList.add('hidden');
    currentRestaurant = null;
    selectedRating = 0;
    updateRatingStars();
    document.getElementById('review-form').reset();
}

// Render reviews
function renderReviews() {
    const reviewsList = document.getElementById('reviews-list');
    
    if (!currentRestaurant || currentRestaurant.reviews.length === 0) {
        reviewsList.innerHTML = '<p class="text-gray-500 text-sm">Chưa có đánh giá nào.</p>';
        return;
    }

    reviewsList.innerHTML = currentRestaurant.reviews.map(review => `
        <div class="bg-gray-50 rounded-lg p-3">
            <div class="flex justify-between items-start">
                <div>
                    <p class="font-medium text-gray-800">${review.userName}</p>
                    <p class="text-yellow-500 text-sm">${generateStars(review.rating)}</p>
                </div>
                <p class="text-xs text-gray-500">${review.date}</p>
            </div>
            <p class="text-sm text-gray-600 mt-1">${review.comment}</p>
        </div>
    `).join('');
}

// Update rating stars display
function updateRatingStars() {
    const buttons = document.querySelectorAll('#rating-stars button');
    buttons.forEach((button, index) => {
        if (index < selectedRating) {
            button.classList.remove('text-gray-300');
            button.classList.add('text-yellow-500');
        } else {
            button.classList.remove('text-yellow-500');
            button.classList.add('text-gray-300');
        }
    });
}

// Handle review form submission
function handleReviewSubmit(e) {
    e.preventDefault();

    if (selectedRating === 0) {
        alert('Vui lòng chọn đánh giá sao!');
        return;
    }

    const comment = document.getElementById('review-comment').value;
    
    if (!comment.trim()) {
        alert('Vui lòng nhập bình luận!');
        return;
    }

    const newReview = {
        userId: Date.now(),
        userName: 'Người dùng',
        rating: selectedRating,
        comment: comment,
        date: new Date().toISOString().split('T')[0]
    };

    // Add review to current restaurant
    currentRestaurant.reviews.unshift(newReview);

    // Save to localStorage
    saveReviewToStorage(currentRestaurant.id, newReview);

    // Recalculate rating
    const totalRating = currentRestaurant.reviews.reduce((sum, r) => sum + r.rating, 0);
    currentRestaurant.rating = (totalRating / currentRestaurant.reviews.length).toFixed(1);

    // Update UI
    renderReviews();
    renderRestaurantList();
    filterMarkers(restaurantsData);

    // Reset form
    selectedRating = 0;
    updateRatingStars();
    document.getElementById('review-form').reset();

    alert('Đánh giá của bạn đã được gửi!');
}
