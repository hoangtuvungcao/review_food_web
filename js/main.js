// 1. Khởi tạo bản đồ, gắn vào thẻ div có id="my-map"
// [12.6771, 108.0438] là tọa độ (Vĩ độ, Kinh độ). 14 là mức độ zoom.
var map = L.map('map').setView([12.6771, 108.0438], 14);

// 2. Tải lớp hình ảnh bản đồ (tiles) từ OpenStreetMap
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// 3. Thêm một cái ghim (Marker) lên bản đồ
var marker = L.marker([12.6771, 108.0438]).addTo(map);

// 4. Hiện chữ khi bấm vào cái ghim
marker.bindPopup("<b>Chào bạn!</b><br>Đây là Buôn Ma Thuột.").openPopup();