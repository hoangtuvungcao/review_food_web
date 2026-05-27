# BÁO CÁO DỰ ÁN WEBSITE

## CẨM NANG ẨM THỰC ĐƯỜNG PHỐ

**Chủ đề 19:** Cẩm nang ẩm thực đường phố: Bản đồ vị trí các quán ăn ngon và hệ thống đánh giá từ người dùng.

**Nhóm thực hiện:** Nhóm 1

**Thành viên:**

- Nguyễn Văn Trọng - Nhóm trưởng
- Lê Thuận
- Trần Văn Trường

**Sản phẩm:** Website tĩnh sử dụng HTML, CSS, JavaScript, jQuery, Leaflet và localStorage.

---

# MỤC LỤC

1. Giới thiệu đề tài
2. Mục tiêu và phạm vi dự án
3. Phân tích yêu cầu hệ thống
4. Phân công nhiệm vụ nhóm
5. Công nghệ sử dụng
6. Thiết kế hệ thống website
7. Thiết kế dữ liệu
8. Mô tả chức năng hệ thống
9. Thiết kế giao diện đa nền tảng
10. Quy trình thực hiện và theo dõi tiến độ
11. Kiểm thử hệ thống
12. Kết quả đạt được
13. Đánh giá thành viên
14. Hạn chế và hướng phát triển
15. Quy trình nộp bài
16. Kết luận

---

# 1. GIỚI THIỆU ĐỀ TÀI

Ẩm thực đường phố là một phần quen thuộc trong đời sống sinh viên, người dân địa phương và khách du lịch. Tuy nhiên, việc tìm kiếm một quán ăn ngon, biết vị trí chính xác và tham khảo đánh giá từ người dùng thường chưa được tổ chức rõ ràng nếu chỉ dựa vào truyền miệng hoặc các ghi chú cá nhân.

Từ nhu cầu đó, nhóm lựa chọn đề tài **Cẩm nang ẩm thực đường phố** nhằm xây dựng một website tĩnh mô phỏng hệ thống bản đồ quán ăn và đánh giá từ người dùng. Website cho phép hiển thị các địa điểm ăn uống trên bản đồ, xem thông tin tóm tắt, xem chi tiết, gửi đánh giá và thêm địa điểm mới.

Dự án không chỉ tập trung vào sản phẩm giao diện mà còn mô phỏng quy trình làm việc thực tế trong doanh nghiệp: phân tích yêu cầu, phân công nhiệm vụ theo vai trò, theo dõi tiến độ, kiểm thử, viết tài liệu và chuẩn bị triển khai sản phẩm.

---

# 2. MỤC TIÊU VÀ PHẠM VI DỰ ÁN

## 2.1. Mục tiêu chung

Xây dựng một website tĩnh có khả năng mô phỏng hệ thống thông tin bản đồ ẩm thực đường phố, trong đó người dùng có thể xem vị trí quán ăn, tìm kiếm, xem đánh giá và gửi review.

## 2.2. Mục tiêu cụ thể

- Thiết kế giao diện website rõ ràng, dễ sử dụng.
- Hiển thị bản đồ bằng Leaflet và OpenStreetMap.
- Hiển thị marker màu đỏ cho từng địa điểm quán ăn.
- Cho phép người dùng bấm vào danh sách quán để bản đồ di chuyển tới vị trí tương ứng.
- Hiển thị popup tóm tắt gồm logo, tên quán, số sao, mô tả rút gọn và nút xem chi tiết.
- Cho phép xem chi tiết quán và gửi đánh giá.
- Cho phép thêm quán mới kèm ảnh/logo bắt buộc.
- Cho phép review kèm ảnh món ăn tùy chọn.
- Lưu dữ liệu tạm bằng localStorage.
- Đảm bảo giao diện hoạt động trên desktop và mobile.
- Tạo tài liệu phục vụ báo cáo Word, PowerPoint và video demo.

## 2.3. Phạm vi thực hiện

Website được xây dựng dưới dạng web tĩnh, không có backend và cơ sở dữ liệu server. Dữ liệu được lưu trên trình duyệt bằng localStorage để mô phỏng việc lưu trữ. Chức năng upload ảnh được xử lý bằng FileReader và lưu dưới dạng data URL trong localStorage.

---

# 3. PHÂN TÍCH YÊU CẦU HỆ THỐNG

## 3.1. Yêu cầu chức năng

| Mã | Chức năng | Mô tả |
| --- | --- | --- |
| F01 | Xem bản đồ | Hiển thị bản đồ Leaflet với các marker quán ăn. |
| F02 | Xem danh sách quán | Hiển thị danh sách quán ăn theo tab. |
| F03 | Tìm kiếm | Tìm quán theo tên hoặc nội dung mô tả. |
| F04 | Lọc theo tab | Lọc danh sách theo gợi ý gần đây hoặc top trending. |
| F05 | Popup tóm tắt | Hiển thị logo, tên quán, sao, mô tả rút gọn, nút xem chi tiết. |
| F06 | Xem chi tiết | Mở khung chi tiết quán và khu vực review. |
| F07 | Thêm review | Nhập tên, chọn sao, nhập bình luận. |
| F08 | Upload ảnh review | Cho phép gửi ảnh món ăn trong review, không bắt buộc. |
| F09 | Thêm quán mới | Nhập tên, mô tả, logo và vị trí trên bản đồ. |
| F10 | Upload logo quán | Bắt buộc chọn ảnh/logo khi thêm quán mới. |
| F11 | Lưu dữ liệu | Lưu danh sách quán và review vào localStorage. |

## 3.2. Yêu cầu phi chức năng

| Yêu cầu | Mô tả |
| --- | --- |
| Dễ sử dụng | Giao diện đơn giản, thao tác trực quan. |
| Responsive | Hoạt động trên máy tính và điện thoại. |
| Tốc độ | Website tĩnh, tải nhanh, không cần backend. |
| Dễ bảo trì | Mã nguồn chia thành HTML, CSS, JS riêng biệt. |
| Dễ deploy | Có thể deploy bằng Netlify hoặc Vercel. |
| Dễ mở rộng | Có thể phát triển thêm backend, database và tài khoản người dùng. |

## 3.3. Đối tượng người dùng

| Người dùng | Nhu cầu |
| --- | --- |
| Sinh viên | Tìm quán ăn gần khu vực học tập. |
| Người dân địa phương | Xem gợi ý quán ăn và đánh giá. |
| Khách du lịch | Tìm vị trí quán và thông tin nhanh. |
| Nhóm phát triển | Mô phỏng hệ thống, kiểm thử và trình bày dự án. |

## 3.4. Đánh giá mức độ đáp ứng

| Hạng mục | Trạng thái |
| --- | --- |
| Website tĩnh | Đã hoàn thành |
| Bản đồ Leaflet | Đã hoàn thành |
| Marker địa điểm | Đã hoàn thành |
| Popup tóm tắt | Đã hoàn thành |
| Chi tiết và review | Đã hoàn thành |
| Thêm quán mới | Đã hoàn thành |
| Upload logo quán | Đã hoàn thành |
| Upload ảnh món ăn | Đã hoàn thành |
| Responsive | Đã hoàn thành |
| Tài liệu dự án | Đã hoàn thành cơ bản |
| Deploy trực tuyến | Cần thực hiện khi nộp bài |

---

# 4. PHÂN CÔNG NHIỆM VỤ NHÓM

## 4.1. Mô hình phân công

Nhóm gồm 03 thành viên, được phân công nhiệm vụ theo vai trò mô phỏng quy trình phát triển phần mềm tại doanh nghiệp.

| Thành viên | Vai trò | Nhiệm vụ chính |
| --- | --- | --- |
| Nguyễn Văn Trọng | Nhóm trưởng / Frontend Architect | Phân tích yêu cầu, HTML semantic, layout tổng thể, GitHub, tổng hợp báo cáo. |
| Lê Thuận | UI/UX Developer | Xây dựng giao diện, component, responsive, kiểm tra trải nghiệm người dùng. |
| Trần Văn Trường | JavaScript Engineer | Lập trình jQuery, Leaflet, form, validation, localStorage và xử lý dữ liệu. |

## 4.2. Nhiệm vụ chi tiết

### Nguyễn Văn Trọng

- Phân tích yêu cầu đề tài.
- Thiết kế cấu trúc trang `index.html` và `about.html`.
- Xây dựng bố cục tổng thể bằng CSS Grid/Flexbox.
- Kiểm tra tính rõ ràng của giao diện.
- Quản lý mã nguồn và tổng hợp tài liệu.
- Chuẩn bị nội dung báo cáo và thuyết trình.

### Lê Thuận

- Xây dựng giao diện danh sách quán, bản đồ, popup, form và footer.
- Tối ưu giao diện cho desktop và mobile.
- Thiết kế trạng thái hover, active, hidden, popup và drawer.
- Kiểm tra giao diện khi dữ liệu dài hoặc có ảnh upload.

### Trần Văn Trường

- Tích hợp Leaflet và OpenStreetMap.
- Xử lý marker, popup và di chuyển bản đồ.
- Lập trình tìm kiếm, lọc tab, xem chi tiết.
- Xử lý thêm địa điểm mới kèm ảnh/logo.
- Xử lý review, đánh giá sao và ảnh món ăn.
- Lưu và đọc dữ liệu từ localStorage.

---

# 5. CÔNG NGHỆ SỬ DỤNG

| Công nghệ | Vai trò |
| --- | --- |
| HTML5 | Xây dựng cấu trúc nội dung website. |
| CSS3 | Thiết kế giao diện, layout và responsive. |
| JavaScript | Xử lý logic tương tác người dùng. |
| jQuery | Hỗ trợ thao tác DOM và sự kiện đơn giản. |
| Leaflet | Hiển thị bản đồ và marker. |
| OpenStreetMap | Cung cấp nền bản đồ. |
| localStorage | Lưu dữ liệu tạm trên trình duyệt. |
| FileReader | Đọc ảnh upload thành data URL. |
| GitHub | Quản lý mã nguồn. |
| Netlify/Vercel | Triển khai website tĩnh trực tuyến. |

## 5.1. Lý do chọn công nghệ

HTML, CSS và JavaScript phù hợp với yêu cầu xây dựng website tĩnh. jQuery giúp xử lý DOM đơn giản, dễ hiểu với sinh viên mới làm dự án frontend. Leaflet là thư viện bản đồ nhẹ, dễ tích hợp và phù hợp để hiển thị marker địa điểm. localStorage giúp mô phỏng lưu dữ liệu mà không cần backend.

---

# 6. THIẾT KẾ HỆ THỐNG WEBSITE

## 6.1. Cấu trúc thư mục

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
    └── các tài liệu dự án
```

## 6.2. Vai trò từng file

| File | Vai trò |
| --- | --- |
| `index.html` | Trang chính của website. |
| `about.html` | Trang tổng quan dự án và phân công nhiệm vụ. |
| `css/style.css` | Giao diện, bố cục, responsive. |
| `js/main.js` | Logic tương tác, bản đồ, form và dữ liệu. |
| `images/logo/logo.svg` | Logo website. |
| `favicon.ico` | Icon trên tab trình duyệt. |
| `README.md` | Tóm tắt dự án và liên kết tài liệu. |

## 6.3. Cấu trúc giao diện

Trang chính gồm các vùng:

- Header: logo, tên website, menu điều hướng.
- Intro: tiêu đề và form tìm kiếm.
- App layout:
  - Cột danh sách quán.
  - Khu vực bản đồ.
  - Khu vực thêm địa điểm.
- Detail drawer: khung chi tiết và review.
- Footer: thông tin nhóm.

## 6.4. Luồng xử lý chính

### Luồng xem địa điểm

1. Người dùng mở trang chủ.
2. Danh sách quán và marker được hiển thị.
3. Người dùng bấm một quán trong danh sách.
4. Bản đồ di chuyển tới vị trí quán.
5. Popup tóm tắt hiển thị trên marker.
6. Người dùng bấm `Xem chi tiết`.
7. Drawer chi tiết/review được mở.

### Luồng thêm địa điểm

1. Người dùng bấm `Thêm địa điểm`.
2. Nhập tên quán, mô tả.
3. Upload ảnh/logo quán bắt buộc.
4. Chọn vị trí trên mini-map.
5. Bấm `Thêm quán`.
6. Dữ liệu được lưu vào localStorage.
7. Quán mới xuất hiện trên danh sách và bản đồ.

### Luồng thêm review

1. Người dùng mở chi tiết quán.
2. Nhập tên người đánh giá.
3. Chọn số sao.
4. Nhập nội dung review.
5. Có thể upload ảnh món ăn.
6. Bấm `Gửi đánh giá`.
7. Review mới hiển thị trong danh sách.

---

# 7. THIẾT KẾ DỮ LIỆU

## 7.1. Dữ liệu quán ăn

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

| Thuộc tính | Ý nghĩa |
| --- | --- |
| `id` | Mã định danh quán. |
| `name` | Tên quán. |
| `description` | Mô tả quán. |
| `category` | Nhóm hiển thị: nearby hoặc trending. |
| `lat` | Vĩ độ. |
| `lng` | Kinh độ. |
| `rating` | Điểm sao trung bình. |
| `logo` | Ảnh/logo quán dạng data URL. |
| `reviews` | Danh sách đánh giá. |

## 7.2. Dữ liệu review

```json
{
  "user": "User 1",
  "rating": 5,
  "comment": "Review mẫu cho địa điểm này.",
  "image": ""
}
```

| Thuộc tính | Ý nghĩa |
| --- | --- |
| `user` | Tên người đánh giá. |
| `rating` | Số sao. |
| `comment` | Nội dung nhận xét. |
| `image` | Ảnh món ăn dạng data URL, không bắt buộc. |

## 7.3. Lưu trữ

Dữ liệu được lưu trong localStorage với khóa `street_food_places_v3`. Khi tải trang, hệ thống đọc dữ liệu từ localStorage. Nếu chưa có dữ liệu, hệ thống dùng dữ liệu mẫu trong JavaScript.

---

# 8. MÔ TẢ CHỨC NĂNG HỆ THỐNG

## 8.1. Bản đồ Leaflet

Bản đồ được tạo bằng `L.map()` và dùng nền bản đồ từ OpenStreetMap thông qua `L.tileLayer()`. Marker được tạo bằng `L.marker()` và tùy biến giao diện bằng `L.divIcon()`.

## 8.2. Danh sách quán ăn

Danh sách quán được render từ mảng `places`. Mỗi item hiển thị logo hoặc chữ cái đại diện, tên quán, số sao và mô tả ngắn.

Khi bấm item:

- Quán được chọn.
- Bản đồ di chuyển tới marker.
- Popup tóm tắt mở trên bản đồ.

## 8.3. Popup tóm tắt

Popup trên bản đồ hiển thị:

- Logo quán.
- Tên quán.
- Số sao.
- Mô tả rút gọn.
- Nút `Xem chi tiết`.

Popup chỉ dùng để xem nhanh. Khi cần đánh giá, người dùng phải bấm `Xem chi tiết`.

## 8.4. Drawer chi tiết và đánh giá

Drawer chi tiết hiển thị thông tin đầy đủ hơn và form đánh giá. Khi drawer mở, popup bản đồ được ẩn để giao diện không bị chồng lấn.

Form đánh giá gồm:

- Tên người đánh giá.
- Số sao.
- Nội dung nhận xét.
- Ảnh món ăn tùy chọn.

## 8.5. Thêm quán mới

Form thêm quán yêu cầu:

- Tên quán.
- Mô tả.
- Ảnh/logo quán bắt buộc.
- Vị trí trên bản đồ.

Ảnh/logo được đọc bằng FileReader và lưu vào localStorage.

## 8.6. Tìm kiếm

Tìm kiếm lọc danh sách theo tên quán và mô tả. Người dùng có thể nhập từ khóa và danh sách sẽ cập nhật theo nội dung nhập.

## 8.7. Lọc theo tab

Hệ thống có 2 tab:

- `Gợi ý gần đây`
- `Top trending`

Tab giúp nhóm địa điểm theo mục đích hiển thị.

---

# 9. THIẾT KẾ GIAO DIỆN ĐA NỀN TẢNG

## 9.1. Giao diện desktop

Trên desktop, website sử dụng bố cục 2 cột:

- Cột trái: danh sách quán.
- Cột phải: bản đồ hoặc form thêm địa điểm.

Cách bố trí này giúp người dùng vừa xem danh sách vừa quan sát vị trí trên bản đồ.

## 9.2. Giao diện mobile

Trên mobile, bố cục chuyển thành 1 cột:

- Header xếp dọc.
- Form tìm kiếm chiếm toàn chiều ngang.
- Danh sách quán nằm trên bản đồ.
- Bản đồ có chiều cao cố định phù hợp màn hình nhỏ.
- Drawer chi tiết nằm gần cuối màn hình và có thể cuộn.

## 9.3. Nguyên tắc thiết kế

- Giao diện đơn giản, dễ hiểu.
- Màu chính là xanh đậm, tạo cảm giác rõ ràng và ổn định.
- Marker màu đỏ để nổi bật trên bản đồ.
- Nút chính có màu xanh, dễ nhận biết.
- Form có label và placeholder rõ ràng.

---

# 10. QUY TRÌNH THỰC HIỆN VÀ THEO DÕI TIẾN ĐỘ

## 10.1. Công cụ quản lý

Nhóm có thể sử dụng Jira, Trello, GitHub Projects hoặc MS Project để quản lý công việc. Trong phạm vi báo cáo, nhóm mô phỏng bảng Kanban với các trạng thái:

- To Do
- In Progress
- Review
- Done

## 10.2. Tiến độ thực hiện

| Giai đoạn | Công việc | Phụ trách | Trạng thái |
| --- | --- | --- | --- |
| 1 | Phân tích yêu cầu | Nguyễn Văn Trọng | Done |
| 2 | Thiết kế layout | Nguyễn Văn Trọng, Lê Thuận | Done |
| 3 | Xây dựng giao diện | Lê Thuận | Done |
| 4 | Tích hợp bản đồ | Trần Văn Trường | Done |
| 5 | Tìm kiếm và lọc danh sách | Trần Văn Trường | Done |
| 6 | Popup và xem chi tiết | Trần Văn Trường | Done |
| 7 | Thêm quán mới | Trần Văn Trường | Done |
| 8 | Review và ảnh món ăn | Trần Văn Trường | Done |
| 9 | Kiểm thử responsive | Cả nhóm | Done |
| 10 | Viết tài liệu | Nguyễn Văn Trọng | Done |
| 11 | Deploy sản phẩm | Nguyễn Văn Trọng | To Do |
| 12 | Làm slide và video demo | Cả nhóm | To Do |

---

# 11. KIỂM THỬ HỆ THỐNG

## 11.1. Bảng test case

| Mã | Trường hợp kiểm thử | Kết quả mong đợi | Trạng thái |
| --- | --- | --- | --- |
| TC01 | Mở trang chủ | Header, danh sách và bản đồ hiển thị | Đạt |
| TC02 | Bấm quán trong danh sách | Bản đồ di chuyển tới marker và mở popup | Đạt |
| TC03 | Bấm marker | Popup tóm tắt mở | Đạt |
| TC04 | Bấm `Xem chi tiết` | Drawer đánh giá mở | Đạt |
| TC05 | Gửi review không ảnh | Review mới hiển thị | Đạt |
| TC06 | Gửi review có ảnh | Review hiển thị ảnh món ăn | Đạt |
| TC07 | Thêm quán không có logo | Form không cho submit | Đạt |
| TC08 | Thêm quán có logo | Quán mới xuất hiện trên danh sách/bản đồ | Đạt |
| TC09 | Tìm kiếm quán | Danh sách lọc đúng | Đạt |
| TC10 | Chuyển tab | Danh sách đổi theo category | Đạt |
| TC11 | Kiểm tra mobile | Layout không vỡ | Đạt |
| TC12 | Bấm nút đóng | Popup/drawer đóng đúng | Đạt |

## 11.2. Kết quả kiểm thử

Các chức năng chính hoạt động đúng theo yêu cầu. Website có thể chạy trực tiếp bằng trình duyệt hoặc thông qua server tĩnh. Giao diện hiển thị ổn định trên desktop và mobile.

---

# 12. KẾT QUẢ ĐẠT ĐƯỢC

Nhóm đã hoàn thành website tĩnh với các kết quả chính:

- Có trang chủ và trang tổng quan.
- Có bản đồ Leaflet hiển thị marker địa điểm.
- Có danh sách quán ăn và chức năng tìm kiếm.
- Có popup tóm tắt khi chọn địa điểm.
- Có khung chi tiết và form đánh giá.
- Có chức năng thêm quán mới kèm ảnh/logo.
- Có chức năng review kèm ảnh món ăn tùy chọn.
- Có localStorage để lưu dữ liệu tạm.
- Có giao diện responsive.
- Có logo và favicon riêng.
- Có bộ tài liệu phân tích, đặc tả, phân công và báo cáo.

---

# 13. ĐÁNH GIÁ THÀNH VIÊN

## 13.1. Nguyễn Văn Trọng

- Vai trò: Nhóm trưởng / Frontend Architect.
- Kết quả:
  - Phân tích yêu cầu.
  - Xây dựng cấu trúc HTML và bố cục.
  - Tổng hợp tài liệu.
  - Quản lý tiến độ và định hướng sản phẩm.
- Mức độ hoàn thành: Tốt.

## 13.2. Lê Thuận

- Vai trò: UI/UX Developer.
- Kết quả:
  - Xây dựng giao diện.
  - Tối ưu responsive.
  - Kiểm tra trải nghiệm thao tác.
  - Hỗ trợ hoàn thiện giao diện popup, form và footer.
- Mức độ hoàn thành: Tốt.

## 13.3. Trần Văn Trường

- Vai trò: JavaScript Engineer.
- Kết quả:
  - Lập trình Leaflet map.
  - Xử lý marker, popup, tìm kiếm, tab.
  - Xử lý thêm địa điểm và review.
  - Xử lý ảnh upload và localStorage.
- Mức độ hoàn thành: Tốt.

---

# 14. HẠN CHẾ VÀ HƯỚNG PHÁT TRIỂN

## 14.1. Hạn chế

- Dữ liệu chỉ lưu trong localStorage của trình duyệt.
- Chưa có backend và database thật.
- Chưa có tài khoản người dùng.
- Ảnh upload được lưu dạng data URL nên không phù hợp dữ liệu lớn.
- Chưa có chức năng kiểm duyệt review.
- Chưa có chức năng phân quyền quản trị.

## 14.2. Hướng phát triển

- Xây dựng backend bằng Node.js, PHP hoặc Python.
- Dùng database như MySQL, PostgreSQL hoặc Firebase.
- Thêm đăng nhập/đăng ký người dùng.
- Thêm phân quyền quản trị địa điểm và review.
- Thêm bộ lọc theo loại món, giá, khoảng cách.
- Lưu ảnh lên server hoặc dịch vụ cloud storage.
- Thêm thống kê top quán được đánh giá cao.
- Tích hợp API định vị và chỉ đường.

---

# 15. QUY TRÌNH NỘP BÀI

## 15.1. Mã nguồn

- Đưa toàn bộ mã nguồn lên GitHub repository chung.
- Repository cần có đủ:
  - `index.html`
  - `about.html`
  - `css/style.css`
  - `js/main.js`
  - `images/logo/logo.svg`
  - `favicon.ico`
  - `README.md`
  - thư mục `docs/`

## 15.2. Deploy

Website có thể deploy bằng Netlify hoặc Vercel:

- Build command: để trống.
- Publish directory: `.`
- Framework: Other hoặc Static site.

## 15.3. Báo cáo

Cần chuẩn bị:

- File `.docx`: chuyển từ nội dung báo cáo Markdown này.
- File `.pptx`: tạo từ dàn ý trong tài liệu PowerPoint.
- Video demo 3-5 phút.
- Upload báo cáo lên Google Drive.
- Chia sẻ link và nộp lên LMS/eLearning.

---

# 16. KẾT LUẬN

Dự án **Cẩm nang ẩm thực đường phố** đã mô phỏng được một hệ thống thông tin cơ bản phục vụ việc tra cứu quán ăn trên bản đồ và đánh giá từ người dùng. Website đáp ứng yêu cầu của một sản phẩm web tĩnh với các chức năng chính như bản đồ, marker, popup, tìm kiếm, thêm địa điểm, upload ảnh/logo, review và lưu dữ liệu tạm.

Thông qua dự án, nhóm đã thực hành quy trình phân tích thiết kế hệ thống, phân công nhiệm vụ theo vai trò, triển khai giao diện đa nền tảng và chuẩn bị tài liệu nộp bài. Sản phẩm có thể tiếp tục phát triển thành hệ thống hoàn chỉnh hơn nếu bổ sung backend, database và tài khoản người dùng.

---

# PHỤ LỤC A. DANH SÁCH FILE TÀI LIỆU

- `docs/01_PHAN_TICH_YEU_CAU.md`
- `docs/02_PHAN_CONG_NHIEM_VU.md`
- `docs/03_KE_HOACH_VA_THEO_DOI_TIEN_DO.md`
- `docs/04_DANH_GIA_THANH_VIEN.md`
- `docs/05_HUONG_DAN_NOP_BAI_VA_DEPLOY.md`
- `docs/06_KHUNG_BAO_CAO_DOCX.md`
- `docs/07_TONG_HOP_HE_THONG_WEBSITE.md`
- `docs/08_DAC_TA_KY_THUAT_HE_THONG.md`
- `docs/09_TAI_LIEU_DAU_VAO_CHO_AI_WORD_PPT.md`
- `docs/10_BAO_CAO_HOAN_CHINH.md`

# PHỤ LỤC B. LỆNH CHẠY THỬ

```bash
python3 -m http.server 4173
```

Sau đó mở:

```text
http://127.0.0.1:4173
```

