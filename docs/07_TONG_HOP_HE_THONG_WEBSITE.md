# Tổng hợp hệ thống website

## 1. Tên hệ thống

**Cẩm nang ẩm thực đường phố - Street Food Map**

Hệ thống là một website tĩnh mô phỏng ứng dụng bản đồ quán ăn đường phố. Người dùng có thể xem địa điểm trên bản đồ, tìm kiếm quán, xem thông tin tóm tắt, xem chi tiết và gửi đánh giá.

## 2. Mục tiêu xây dựng

- Mô phỏng một hệ thống thông tin có dữ liệu địa điểm, bản đồ và đánh giá người dùng.
- Thực hành phân tích, thiết kế và triển khai giao diện web đa nền tảng.
- Áp dụng quy trình làm việc nhóm như trong doanh nghiệp: phân công vai trò, theo dõi tiến độ, kiểm thử và tổng hợp báo cáo.
- Tạo sản phẩm có thể deploy trực tuyến bằng Netlify hoặc Vercel.

## 3. Người dùng mục tiêu

| Nhóm người dùng | Nhu cầu |
| --- | --- |
| Sinh viên | Tìm quán ăn gần khu vực học tập, xem đánh giá nhanh. |
| Người dân địa phương | Gợi ý quán ăn đường phố phổ biến. |
| Khách du lịch | Xem vị trí quán và thông tin cơ bản trên bản đồ. |
| Quản trị/nhóm phát triển | Thêm dữ liệu mẫu, kiểm thử chức năng và trình bày dự án. |

## 4. Chức năng chính

### 4.1. Xem bản đồ quán ăn

- Website dùng Leaflet để hiển thị bản đồ.
- Mỗi quán ăn được biểu diễn bằng marker màu đỏ.
- Bấm vào marker hoặc bấm quán trong danh sách sẽ mở popup tóm tắt.

### 4.2. Popup tóm tắt trên bản đồ

Popup hiển thị:

- Logo hoặc chữ cái đại diện của quán.
- Tên quán.
- Số sao đánh giá.
- Mô tả rút gọn.
- Nút `Xem chi tiết`.

### 4.3. Xem chi tiết và đánh giá

Khi bấm `Xem chi tiết`, hệ thống mở khung chi tiết gồm:

- Logo quán.
- Tên quán.
- Số sao trung bình.
- Mô tả quán.
- Form thêm đánh giá.
- Danh sách review gần đây.

### 4.4. Tìm kiếm

Người dùng có thể tìm quán theo:

- Tên quán.
- Từ khóa trong mô tả.

Khi nhập từ khóa, danh sách được lọc trực tiếp.

### 4.5. Lọc danh sách

Hệ thống có 2 tab:

- `Gợi ý gần đây`: các quán gợi ý.
- `Top trending`: các quán nổi bật.

### 4.6. Thêm quán mới

Người dùng có thể thêm quán mới với các thông tin:

- Tên quán.
- Mô tả.
- Ảnh/logo quán bắt buộc.
- Vị trí trên bản đồ.

Dữ liệu được lưu tạm bằng `localStorage`.

### 4.7. Thêm review

Người dùng có thể gửi review gồm:

- Tên người đánh giá.
- Số sao.
- Nội dung nhận xét.
- Ảnh món ăn tại quán, không bắt buộc.

## 5. Cấu trúc trang

### Trang `index.html`

Trang chính của hệ thống, gồm:

- Header: logo, tên website, menu điều hướng.
- Main:
  - Khu vực giới thiệu và tìm kiếm.
  - Danh sách quán ăn.
  - Bản đồ Leaflet.
  - Form thêm địa điểm.
- Drawer chi tiết/review.
- Footer.

### Trang `about.html`

Trang tổng quan, gồm:

- Giới thiệu chức năng.
- Thành viên nhóm.
- Phân công nhiệm vụ.
- Quy trình nộp bài.

## 6. Công nghệ sử dụng

| Công nghệ | Mục đích |
| --- | --- |
| HTML5 | Xây dựng cấu trúc nội dung. |
| CSS3 | Thiết kế giao diện, responsive. |
| JavaScript | Xử lý logic tương tác. |
| jQuery | Thao tác DOM và sự kiện đơn giản. |
| Leaflet | Hiển thị bản đồ và marker. |
| OpenStreetMap | Nền bản đồ. |
| localStorage | Lưu dữ liệu tạm trên trình duyệt. |
| GitHub | Quản lý mã nguồn. |
| Netlify/Vercel | Deploy website tĩnh. |

## 7. Dữ liệu hệ thống

Mỗi quán ăn có cấu trúc dữ liệu:

```json
{
  "id": "bun-do-co-ba",
  "name": "Bún đỏ Cô Ba",
  "description": "Bún đỏ nóng, nước dùng đậm vị, phù hợp ăn tối.",
  "category": "nearby",
  "lat": 12.6792,
  "lng": 108.0439,
  "rating": 4,
  "logo": "",
  "reviews": []
}
```

Mỗi review có cấu trúc:

```json
{
  "user": "User 1",
  "rating": 5,
  "comment": "Review mẫu cho địa điểm này.",
  "image": ""
}
```

## 8. Luồng hoạt động chính

### Luồng xem quán

1. Người dùng mở trang chủ.
2. Hệ thống hiển thị danh sách quán và marker trên bản đồ.
3. Người dùng bấm một quán trong danh sách.
4. Bản đồ di chuyển tới vị trí quán.
5. Popup tóm tắt hiển thị trên marker.
6. Người dùng bấm `Xem chi tiết`.
7. Khung chi tiết/review được mở.

### Luồng thêm quán

1. Người dùng bấm `Thêm địa điểm`.
2. Nhập tên quán và mô tả.
3. Chọn ảnh/logo quán.
4. Chọn vị trí trên mini-map.
5. Bấm `Thêm quán`.
6. Quán mới được lưu vào `localStorage` và hiển thị trên danh sách/bản đồ.

### Luồng thêm review

1. Người dùng mở chi tiết quán.
2. Nhập tên người đánh giá.
3. Chọn số sao.
4. Nhập bình luận.
5. Có thể chọn ảnh món ăn.
6. Bấm `Gửi đánh giá`.
7. Review mới hiển thị trong danh sách review.

## 9. Đánh giá mức độ hoàn thiện

| Hạng mục | Trạng thái |
| --- | --- |
| Giao diện trang chủ | Hoàn thành |
| Trang tổng quan | Hoàn thành |
| Bản đồ Leaflet | Hoàn thành |
| Marker và popup | Hoàn thành |
| Tìm kiếm | Hoàn thành |
| Tab lọc danh sách | Hoàn thành |
| Thêm quán mới | Hoàn thành |
| Upload logo quán | Hoàn thành |
| Review quán | Hoàn thành |
| Upload ảnh món ăn trong review | Hoàn thành |
| Responsive PC/mobile | Hoàn thành |
| Tài liệu phân tích | Hoàn thành cơ bản |
| Deploy trực tuyến | Cần thực hiện sau |
| File Word/PPT/video | Cần tạo từ tài liệu Markdown |

## 10. Hướng phát triển lâu dài

- Thêm backend và database thật.
- Thêm tài khoản người dùng.
- Thêm phân quyền quản trị.
- Thêm bộ lọc theo loại món, giá, khoảng cách.
- Thêm chức năng upload ảnh lên server.
- Thêm API lấy vị trí hiện tại ổn định hơn.
- Thêm kiểm duyệt review.
- Thêm thống kê địa điểm nổi bật.

