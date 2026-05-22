# Cẩm nang Ẩm thực Đường phố

Dự án web tĩnh hiển thị bản đồ các quán ăn ngon và hệ thống đánh giá từ người dùng.

## 📋 Mô tả dự án

Web tĩnh cho phép người dùng:
- Xem bản đồ các quán ăn trên địa bàn
- Tìm kiếm và lọc quán ăn theo loại món, giá cả
- Xem chi tiết thông tin quán ăn
- Đánh giá và bình luận về quán ăn
- Lưu trữ đánh giá bằng LocalStorage

## 🛠️ Công nghệ sử dụng

- **HTML5** - Cấu trúc semantic
- **CSS3** - Styling với Tailwind CSS (CDN)
- **JavaScript (Vanilla)** - Logic tương tác
- **Leaflet.js** - Bản đồ tương tác
- **LocalStorage** - Lưu trữ đánh giá người dùng

## 📁 Cấu trúc project

```
street-food-guide/
├── index.html              # Trang chính
├── css/
│   └── style.css          # Custom styles
├── js/
│   ├── main.js            # Logic chính
│   ├── map.js             # Leaflet map configuration
│   └── data.js            # Dữ liệu quán ăn
├── data/
│   └── restaurants.json   # Dữ liệu JSON (backup)
├── images/                # Thư mục hình ảnh
└── README.md              # File này
```

## 🚀 Cách chạy

1. Clone hoặc download project
2. Mở file `index.html` trong trình duyệt
3. Hoặc sử dụng Live Server extension trong VS Code

## 👥 Phân chia nhiệm vụ

### Nhóm trưởng (Frontend Architect)
- HTML semantic structure
- CSS Grid/Flexbox layout
- Accessibility & SEO
- GitHub repository
- Code review & merge

### Thành viên 2 (UI/UX Developer)
- UI components với Tailwind CSS
- Responsive design
- Animations
- Form đánh giá
- Typography & colors

### Thành viên 3 (JavaScript Engineer)
- Leaflet.js implementation
- Load & parse JSON data
- Search & filter logic
- Form validation
- LocalStorage cho đánh giá
- DOM manipulation

## 📝 Tính năng

- ✅ Bản đồ tương tác với Leaflet.js
- ✅ Danh sách quán ăn với hình ảnh
- ✅ Tìm kiếm theo tên, món, địa chỉ
- ✅ Lọc theo loại món và giá cả
- ✅ Modal chi tiết quán ăn
- ✅ Hệ thống đánh giá sao
- ✅ Form bình luận
- ✅ Lưu đánh giá với LocalStorage
- ✅ Responsive design

## 🔧 Tùy chỉnh dữ liệu

Để thêm quán ăn mới, chỉnh sửa file `js/data.js`:

```javascript
{
    id: 6,
    name: "Tên quán",
    cuisine: "loai-mon",
    cuisineName: "Tên loại món",
    address: "Địa chỉ",
    lat: 21.0285,
    lng: 105.8542,
    priceRange: "$",
    priceLevel: "cheap",
    rating: 4.0,
    image: "URL hình ảnh",
    description: "Mô tả quán",
    openingHours: "Giờ mở cửa",
    phone: "Số điện thoại",
    reviews: []
}
```

## 🌐 Deploy

Dự án có thể deploy miễn phí trên:
- GitHub Pages
- Netlify
- Vercel

## 📄 License

Dự án môn học Phân tích thiết kế hệ thống thông tin
