# Khung nội dung báo cáo .docx

## 1. Trang bìa

- Tên trường/khoa.
- Tên học phần.
- Tên đề tài: Cẩm nang ẩm thực đường phố.
- Nhóm thực hiện: Nhóm 1.
- Danh sách thành viên.
- Giảng viên hướng dẫn.
- Thời gian thực hiện.

## 2. Giới thiệu đề tài

Website Cẩm nang ẩm thực đường phố hỗ trợ người dùng xem vị trí các quán ăn trên bản đồ, tìm kiếm địa điểm, xem đánh giá và gửi review. Hệ thống được xây dựng dưới dạng web tĩnh để mô phỏng quy trình phân tích, thiết kế và triển khai sản phẩm frontend.

## 3. Mục tiêu hệ thống

- Cung cấp bản đồ các địa điểm ăn uống.
- Hiển thị danh sách quán ăn gợi ý và top trending.
- Cho phép người dùng xem thông tin tóm tắt và chi tiết quán.
- Cho phép thêm quán mới kèm ảnh/logo.
- Cho phép gửi đánh giá, số sao và ảnh món ăn.
- Tối ưu giao diện trên desktop và mobile.

## 4. Công nghệ sử dụng

- HTML5: xây dựng cấu trúc trang.
- CSS3: bố cục, responsive, giao diện.
- JavaScript và jQuery: xử lý tương tác người dùng.
- Leaflet: hiển thị bản đồ và marker.
- OpenStreetMap: dữ liệu bản đồ nền.
- localStorage: lưu dữ liệu tạm trên trình duyệt.
- GitHub: quản lý mã nguồn.
- Netlify hoặc Vercel: deploy website tĩnh.

## 5. Phân tích chức năng

### 5.1. Trang chủ

- Header điều hướng.
- Khu vực tìm kiếm.
- Danh sách quán ăn.
- Bản đồ Leaflet.
- Popup tóm tắt địa điểm.
- Khung chi tiết và đánh giá.

### 5.2. Thêm địa điểm

- Nhập tên quán.
- Nhập mô tả.
- Upload ảnh/logo quán bắt buộc.
- Chọn vị trí trên bản đồ.
- Lưu địa điểm vào localStorage.

### 5.3. Review quán

- Nhập tên người đánh giá.
- Chọn số sao.
- Nhập bình luận.
- Upload ảnh món ăn tùy chọn.
- Hiển thị review mới trong danh sách.

## 6. Phân công nhiệm vụ

Nội dung lấy từ file `docs/02_PHAN_CONG_NHIEM_VU.md`.

## 7. Theo dõi tiến độ

Nội dung lấy từ file `docs/03_KE_HOACH_VA_THEO_DOI_TIEN_DO.md`.

## 8. Kiểm thử

| Trường hợp kiểm thử | Kết quả |
| --- | --- |
| Mở trang chủ | Đạt |
| Tìm kiếm quán | Đạt |
| Bấm danh sách di chuyển tới marker | Đạt |
| Mở popup tóm tắt | Đạt |
| Mở khung chi tiết | Đạt |
| Gửi review | Đạt |
| Gửi review kèm ảnh món ăn | Đạt |
| Thêm quán mới kèm logo | Đạt |
| Kiểm tra responsive mobile | Đạt |

## 9. Đánh giá kết quả

Nhóm đã xây dựng được website tĩnh có chức năng chính đúng yêu cầu đề tài. Giao diện có khả năng đáp ứng trên nhiều kích thước màn hình. Hệ thống sử dụng Leaflet để mô phỏng bản đồ thực tế và localStorage để lưu dữ liệu tạm.

## 10. Hạn chế và hướng phát triển

### Hạn chế

- Dữ liệu chỉ lưu trên trình duyệt bằng localStorage.
- Chưa có tài khoản người dùng.
- Chưa có backend và cơ sở dữ liệu thật.
- Chưa có kiểm duyệt review.

### Hướng phát triển

- Xây dựng backend bằng Node.js/PHP/Python.
- Dùng database như MySQL, PostgreSQL hoặc Firebase.
- Thêm đăng nhập người dùng.
- Thêm bộ lọc theo loại món ăn, khoảng cách, giá.
- Thêm chức năng upload ảnh lên server.

