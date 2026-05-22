// Dữ liệu mẫu cho quán ăn
const restaurantsData = [
    {
        id: 1,
        name: "Phở Bò Đặc Biệt",
        cuisine: "pho",
        cuisineName: "Phở",
        address: "123 Đường Nguyễn Huệ, Quận 1",
        lat: 21.0285,
        lng: 105.8542,
        priceRange: "$$",
        priceLevel: "medium",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1583224944034-0158b5b3c3d3?w=400",
        description: "Phở bò truyền thống với nước dùng đậm đà, thịt bò tươi ngon và bánh phở homemade.",
        openingHours: "6:00 - 22:00",
        phone: "0901234567",
        reviews: [
            {
                userId: 1,
                userName: "Nguyễn Văn A",
                rating: 5,
                comment: "Phở ngon nhất Quận 1! Nước dùng đậm đà, thịt bò mềm.",
                date: "2024-01-15"
            },
            {
                userId: 2,
                userName: "Trần Thị B",
                rating: 4,
                comment: "Rất ngon, giá cả hợp lý. Sẽ quay lại.",
                date: "2024-01-10"
            }
        ]
    },
    {
        id: 2,
        name: "Bánh Mì Huế Anh",
        cuisine: "banh-mi",
        cuisineName: "Bánh mì",
        address: "456 Đường Lê Lợi, Quận 3",
        lat: 21.0275,
        lng: 105.8552,
        priceRange: "$",
        priceLevel: "cheap",
        rating: 4.2,
        image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=400",
        description: "Bánh mì huế đậm vị với pate, thịt nguội và đồ chua tươi ngon.",
        openingHours: "7:00 - 19:00",
        phone: "0912345678",
        reviews: [
            {
                userId: 3,
                userName: "Lê Văn C",
                rating: 5,
                comment: "Bánh mì ngon, giá rẻ, nhân viên thân thiện.",
                date: "2024-01-12"
            }
        ]
    },
    {
        id: 3,
        name: "Cơm Tấm Ba Ghiền",
        cuisine: "com-tam",
        cuisineName: "Cơm tấm",
        address: "789 Đường Cách Mạng Tháng 8, Quận 10",
        lat: 21.0265,
        lng: 105.8562,
        priceRange: "$$",
        priceLevel: "medium",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400",
        description: "Cơm tấm sườn bì chả thơm ngon, nước mắm đậm đà truyền thống.",
        openingHours: "10:00 - 21:00",
        phone: "0923456789",
        reviews: [
            {
                userId: 4,
                userName: "Phạm Thị D",
                rating: 5,
                comment: "Cơm tấm tuyệt vời! Sườn nướng ngon, nước mắm chuẩn vị.",
                date: "2024-01-14"
            },
            {
                userId: 5,
                userName: "Hoàng Văn E",
                rating: 4,
                comment: "Phần ăn lớn, giá hợp lý.",
                date: "2024-01-08"
            }
        ]
    },
    {
        id: 4,
        name: "Bún Riêu Cua Bà Năm",
        cuisine: "bun-rieu",
        cuisineName: "Bún riêu",
        address: "321 Đường Trần Hưng Đạo, Quận 5",
        lat: 21.0255,
        lng: 105.8572,
        priceRange: "$",
        priceLevel: "cheap",
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1555126634-323283e090fa?w=400",
        description: "Bún riêu cua với riêu cua tươi, chả cua và rau sống tươi ngon.",
        openingHours: "8:00 - 20:00",
        phone: "0934567890",
        reviews: [
            {
                userId: 6,
                userName: "Ngô Thị F",
                rating: 4,
                comment: "Bún riêu ngon, riêu cua nhiều.",
                date: "2024-01-11"
            }
        ]
    },
    {
        id: 5,
        name: "Gỏi Cuốn Tôm Thịt",
        cuisine: "goi-cuon",
        cuisineName: "Gỏi cuốn",
        address: "654 Đường Hàm Nghi, Quận 1",
        lat: 21.0245,
        lng: 105.8582,
        priceRange: "$$",
        priceLevel: "medium",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400",
        description: "Gỏi cuốn tôm thịt tươi ngon, nước chấm đậm đà.",
        openingHours: "9:00 - 21:30",
        phone: "0945678901",
        reviews: [
            {
                userId: 7,
                userName: "Đỗ Văn G",
                rating: 5,
                comment: "Gỏi cuốn tươi ngon, tôm thịt đầy đủ.",
                date: "2024-01-13"
            }
        ]
    }
];

// Load reviews from localStorage
function loadReviewsFromStorage() {
    const storedReviews = localStorage.getItem('restaurantReviews');
    if (storedReviews) {
        const reviews = JSON.parse(storedReviews);
        // Merge stored reviews with restaurant data
        restaurantsData.forEach(restaurant => {
            if (reviews[restaurant.id]) {
                restaurant.reviews = [...restaurant.reviews, ...reviews[restaurant.id]];
            }
        });
    }
}

// Save review to localStorage
function saveReviewToStorage(restaurantId, review) {
    let storedReviews = localStorage.getItem('restaurantReviews');
    if (!storedReviews) {
        storedReviews = {};
    } else {
        storedReviews = JSON.parse(storedReviews);
    }
    
    if (!storedReviews[restaurantId]) {
        storedReviews[restaurantId] = [];
    }
    
    storedReviews[restaurantId].push(review);
    localStorage.setItem('restaurantReviews', JSON.stringify(storedReviews));
}

// Initialize data
loadReviewsFromStorage();
