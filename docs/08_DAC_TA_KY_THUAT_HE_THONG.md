# Đặc tả kỹ thuật hệ thống

## 1. Mục đích tài liệu

Tài liệu này mô tả cấu trúc kỹ thuật của website để phục vụ bảo trì, mở rộng và làm nguồn dữ liệu cho AI phân tích khi cần tạo báo cáo Word hoặc slide PowerPoint.

## 2. Cấu trúc thư mục

```text
web_review/
├── index.html
├── about.html
├── README.md
├── favicon.ico
├── css/
│   └── style.css
├── js/
│   └── main.js
├── images/
│   └── logo/
│       └── logo.svg
└── docs/
    ├── 01_PHAN_TICH_YEU_CAU.md
    ├── 02_PHAN_CONG_NHIEM_VU.md
    ├── 03_KE_HOACH_VA_THEO_DOI_TIEN_DO.md
    ├── 04_DANH_GIA_THANH_VIEN.md
    ├── 05_HUONG_DAN_NOP_BAI_VA_DEPLOY.md
    ├── 06_KHUNG_BAO_CAO_DOCX.md
    ├── 07_TONG_HOP_HE_THONG_WEBSITE.md
    ├── 08_DAC_TA_KY_THUAT_HE_THONG.md
    └── 09_TAI_LIEU_DAU_VAO_CHO_AI_WORD_PPT.md
```

## 3. Vai trò từng file chính

| File | Vai trò |
| --- | --- |
| `index.html` | Trang chính, chứa bố cục website, danh sách quán, bản đồ, form thêm quán và drawer review. |
| `about.html` | Trang tổng quan dự án, thành viên, phân công nhiệm vụ và quy trình nộp bài. |
| `css/style.css` | Toàn bộ giao diện, layout, responsive, style popup, marker, form, review. |
| `js/main.js` | Logic dữ liệu, tìm kiếm, tab, Leaflet map, popup, thêm quán, review, localStorage. |
| `images/logo/logo.svg` | Logo SVG của website. |
| `favicon.ico` | Icon hiển thị trên tab trình duyệt. |
| `README.md` | Tóm tắt dự án và liên kết tài liệu. |

## 4. Thư viện ngoài

### jQuery

Được dùng để thao tác DOM và xử lý sự kiện cơ bản:

- `.on()` để bắt sự kiện.
- `.html()` để render nội dung.
- `.val()` để lấy dữ liệu form.
- `.addClass()` và `.removeClass()` để đổi trạng thái giao diện.

### Leaflet

Được dùng để hiển thị bản đồ:

- `L.map()` tạo bản đồ.
- `L.tileLayer()` tải nền bản đồ OpenStreetMap.
- `L.marker()` tạo marker vị trí quán.
- `marker.bindPopup()` tạo popup tóm tắt.
- `L.divIcon()` tạo marker đỏ tùy chỉnh.

## 5. Biến trạng thái chính trong JavaScript

| Biến | Ý nghĩa |
| --- | --- |
| `KEY` | Tên khóa lưu dữ liệu trong localStorage. |
| `CENTER` | Tọa độ trung tâm bản đồ mặc định. |
| `seed` | Dữ liệu mẫu ban đầu. |
| `places` | Danh sách quán hiện tại. |
| `tab` | Tab đang chọn: `nearby` hoặc `trending`. |
| `selectedId` | ID quán đang được chọn trên danh sách/bản đồ. |
| `detailId` | ID quán đang mở drawer chi tiết/review. |
| `reviewStars` | Số sao đang chọn trong form review. |
| `newPoint` | Tọa độ đang chọn khi thêm quán mới. |
| `markers` | Danh sách marker đang hiển thị trên bản đồ. |

## 6. Các hàm JavaScript quan trọng

| Hàm | Chức năng |
| --- | --- |
| `bindEvents()` | Gắn sự kiện cho form, tab, nút, resize, phím Escape. |
| `render()` | Render toàn bộ giao diện chính. |
| `renderList()` | Render danh sách quán theo tab/tìm kiếm. |
| `renderMarkers()` | Render marker Leaflet trên bản đồ. |
| `renderDetail()` | Render drawer chi tiết và review. |
| `openDetail(id)` | Mở drawer chi tiết của quán. |
| `focusPlace(id)` | Di chuyển bản đồ tới quán và mở popup tóm tắt. |
| `addPlace(e)` | Thêm quán mới, đọc logo và lưu vào localStorage. |
| `addReview(e)` | Thêm review mới, có thể kèm ảnh món ăn. |
| `useCurrentLocation()` | Lấy vị trí hiện tại nếu trình duyệt hỗ trợ. |
| `loadPlaces()` | Đọc dữ liệu từ localStorage hoặc dùng dữ liệu mẫu. |
| `savePlaces()` | Lưu danh sách quán vào localStorage. |
| `popupHtml(p)` | Tạo HTML popup tóm tắt trên bản đồ. |
| `reviewHtml(r)` | Tạo HTML cho từng review. |
| `readImage(file)` | Đọc ảnh upload thành data URL. |

## 7. Quy ước dữ liệu

### Place

| Thuộc tính | Kiểu | Bắt buộc | Mô tả |
| --- | --- | --- | --- |
| `id` | string | Có | Mã định danh quán. |
| `name` | string | Có | Tên quán. |
| `description` | string | Có | Mô tả cơ bản. |
| `category` | string | Có | `nearby` hoặc `trending`. |
| `lat` | number | Có | Vĩ độ. |
| `lng` | number | Có | Kinh độ. |
| `rating` | number | Có | Số sao trung bình. |
| `logo` | string | Có khi thêm mới | Data URL ảnh/logo quán. |
| `reviews` | array | Có | Danh sách review. |

### Review

| Thuộc tính | Kiểu | Bắt buộc | Mô tả |
| --- | --- | --- | --- |
| `user` | string | Có | Tên người đánh giá. |
| `rating` | number | Có | Số sao. |
| `comment` | string | Có | Nội dung nhận xét. |
| `image` | string | Không | Data URL ảnh món ăn. |

## 8. Quy tắc giao diện

- Marker địa điểm màu đỏ để dễ nhận biết trên bản đồ.
- Popup bản đồ chỉ hiển thị thông tin tóm tắt.
- Drawer chi tiết chỉ mở khi người dùng bấm `Xem chi tiết`.
- Khi drawer mở, popup bản đồ được ẩn để tránh chồng lớp giao diện.
- Form thêm quán bắt buộc có ảnh/logo quán.
- Form review cho phép ảnh món ăn nhưng không bắt buộc.
- Giao diện dùng responsive CSS để phù hợp desktop và mobile.

## 9. Kiểm thử đề xuất

| Mã kiểm thử | Nội dung | Kết quả mong đợi |
| --- | --- | --- |
| TC01 | Mở trang chủ | Bản đồ và danh sách quán hiển thị. |
| TC02 | Bấm quán trong danh sách | Bản đồ di chuyển tới marker và mở popup tóm tắt. |
| TC03 | Bấm `Xem chi tiết` | Drawer review mở, popup bản đồ ẩn. |
| TC04 | Tìm kiếm tên quán | Danh sách lọc đúng kết quả. |
| TC05 | Chuyển tab trending | Danh sách chỉ hiển thị quán trending. |
| TC06 | Thêm quán không có logo | Trình duyệt không cho submit vì input required. |
| TC07 | Thêm quán có logo | Quán mới xuất hiện trong danh sách và trên bản đồ. |
| TC08 | Gửi review không ảnh | Review mới hiển thị bình thường. |
| TC09 | Gửi review có ảnh | Review hiển thị ảnh món ăn. |
| TC10 | Kiểm tra mobile | Layout chuyển thành 1 cột, không vỡ giao diện. |

## 10. Lưu ý bảo trì

- Dữ liệu ảnh lưu trong localStorage dưới dạng data URL, chỉ phù hợp demo nhỏ.
- Nếu upload nhiều ảnh lớn, localStorage có thể đầy.
- Khi chuyển sang hệ thống thật, cần backend và nơi lưu ảnh riêng.
- Nếu đổi cấu trúc dữ liệu, cần cập nhật hàm `normalize()`.
- Nếu đổi ID trong HTML, cần cập nhật selector trong `js/main.js`.

