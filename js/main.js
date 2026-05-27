$(function () {
    const KEY = "street_food_places_v3";
    const CENTER = [12.6792, 108.0439];
    const seed = [
        place("bun-do-co-ba", "Bún đỏ Cô Ba", "Bún đỏ nóng, nước dùng đậm vị, phù hợp ăn tối.", "nearby", 12.6792, 108.0439, 4),
        place("banh-mi-goc-pho", "Bánh mì Góc Phố", "Bánh mì giòn, nhiều topping, có nước sốt riêng.", "nearby", 12.6828, 108.0527, 4),
        place("che-dem-1988", "Chè đêm 1988", "Nhiều loại chè, topping tự chọn, mở muộn.", "trending", 12.6736, 108.0508, 5)
    ];

    let places = loadPlaces();
    let tab = "nearby";
    let selectedId = null;
    let detailId = null;
    let reviewStars = 5;
    let newPoint = L.latLng(CENTER);
    let markers = [];

    const map = L.map("mainMap").setView(CENTER, 15);
    addTiles(map, true);

    const miniMap = L.map("miniMap", { zoomControl: false, attributionControl: false }).setView(CENTER, 15);
    addTiles(miniMap, false);

    const miniMarker = L.marker(CENTER, { icon: markerIcon(true), draggable: true }).addTo(miniMap);
    miniMap.on("click", (e) => setNewPoint(e.latlng));
    miniMarker.on("dragend", () => setNewPoint(miniMarker.getLatLng(), false));

    bindEvents();
    if (location.hash === "#them") showAdd();
    render();

    function bindEvents() {
        $("#searchForm").on("submit", function (e) {
            e.preventDefault();
            selectedId = null;
            showHome();
            render();
        });

        $("#searchInput").on("input", renderList);

        $(".tab-button").on("click", function () {
            tab = $(this).data("tab");
            selectedId = null;
            detailId = null;
            render();
        });

        $("#openAddBtn").on("click", showAdd);
        $("#cancelAddBtn").on("click", showHome);
        $("#closeDetailBtn").on("click", closeDetail);
        $("#chooseLocationBtn").on("click", () => miniMap.getContainer().focus());
        $("#currentLocationBtn").on("click", useCurrentLocation);
        $("#addPlaceForm").on("submit", addPlace);
        $("#reviewForm").on("submit", addReview);

        $("#ratingInput button").on("click", function () {
            reviewStars = Number($(this).data("value"));
            renderRating();
        });

        $(document).on("click", "[data-detail]", function () {
            openDetail($(this).data("detail"));
        });

        $(document).on("keydown", (e) => {
            if (e.key === "Escape") closeDetail();
        });

        $(window).on("resize", () => {
            map.invalidateSize();
            miniMap.invalidateSize();
        });
    }

    function render() {
        renderTabs();
        renderList();
        renderMarkers();
        renderDetail();
        renderRating();
    }

    function renderTabs() {
        $(".tab-button").removeClass("active");
        $(`.tab-button[data-tab="${tab}"]`).addClass("active");
    }

    function renderList() {
        const html = filteredPlaces().map((p) => `
      <button class="place-card ${p.id === selectedId ? "active" : ""}" data-id="${esc(p.id)}" type="button">
        <span class="place-thumb">${placeImage(p)}</span>
        <span>
          <h3>${esc(p.name)}</h3>
          <span class="stars">${stars(avg(p))}</span>
          <p>${esc(p.description)}</p>
        </span>
      </button>
    `).join("");

        $("#placeList").html(html || '<p class="empty-message">Không tìm thấy địa điểm phù hợp.</p>');
        $(".place-card").on("click", function () {
            focusPlace($(this).data("id"));
        });
    }

    function renderMarkers() {
        markers.forEach((m) => m.remove());
        markers = places.map((p) => {
            const marker = L.marker([p.lat, p.lng], { icon: markerIcon(p.id === selectedId), title: p.name }).addTo(map);
            marker.bindPopup(popupHtml(p), { closeButton: true, maxWidth: 280 });
            marker.on("click", () => {
                focusPlace(p.id, false);
            });
            return marker;
        });

        const index = places.findIndex((p) => p.id === selectedId);
        if (index >= 0 && !detailId) markers[index].openPopup();
        if (detailId) map.closePopup();
    }

    function renderDetail() {
        const p = detailPlace();
        if (!p) {
            $("#detailPanel").addClass("hidden");
            $("body").removeClass("review-open");
            return;
        }

        $("#detailLogo").html(placeImage(p));
        $("#detailName").text(p.name);
        $("#detailDescription").text(p.description);
        $("#detailStars").html(stars(avg(p)));
        $("#reviewsList").html(p.reviews.length ? p.reviews.map(reviewHtml).join("") : '<p class="empty-message">Chưa có review.</p>');
        $("#detailPanel").removeClass("hidden");
        $("body").addClass("review-open");
    }

    function renderRating() {
        $("#ratingInput button").each(function () {
            $(this).toggleClass("active", Number($(this).data("value")) <= reviewStars);
        });
    }

    function openDetail(id) {
        const p = places.find((item) => item.id === id);
        if (!p) return;
        selectedId = p.id;
        detailId = p.id;
        showHome();
        map.closePopup();
        render();
        map.setView([p.lat, p.lng], Math.max(map.getZoom(), 16));
    }

    function focusPlace(id, moveMap = true) {
        const p = places.find((item) => item.id === id);
        if (!p) return;
        selectedId = p.id;
        detailId = null;
        showHome();
        render();
        if (moveMap) map.setView([p.lat, p.lng], Math.max(map.getZoom(), 16));
    }

    function closeDetail() {
        detailId = null;
        $("#detailPanel").addClass("hidden");
        $("body").removeClass("review-open");
        renderList();
        renderMarkers();
    }

    function showHome() {
        $("#addView").addClass("hidden");
        $("#homeView").removeClass("hidden");
        setTimeout(() => map.invalidateSize(), 0);
    }

    function showAdd() {
        closeDetail();
        $("#homeView").addClass("hidden");
        $("#addView").removeClass("hidden");
        setTimeout(() => {
            miniMap.invalidateSize();
            miniMap.setView(newPoint, 15);
        }, 0);
    }

    async function addPlace(e) {
        e.preventDefault();
        const name = $("#newName").val().trim();
        const description = $("#newDescription").val().trim();
        const logoFile = $("#newLogo")[0].files[0];
        if (!name || !description || !logoFile) return;

        const p = place(slug(name) + "-" + Date.now(), name, description, "nearby", newPoint.lat, newPoint.lng, 5);
        p.logo = await readImage(logoFile);
        places.unshift(p);
        tab = "nearby";
        selectedId = p.id;
        detailId = null;
        savePlaces();
        $("#addPlaceForm")[0].reset();
        showHome();
        render();
    }

    async function addReview(e) {
        e.preventDefault();
        const p = selectedPlace();
        const user = $("#reviewUser").val().trim();
        const comment = $("#reviewComment").val().trim();
        const imageFile = $("#reviewImage")[0].files[0];
        if (!p || !user || !comment) return;

        p.reviews.unshift({
            user,
            comment,
            rating: reviewStars,
            image: imageFile ? await readImage(imageFile) : ""
        });
        p.rating = avg(p);
        savePlaces();
        $("#reviewForm")[0].reset();
        reviewStars = 5;
        render();
    }

    function useCurrentLocation() {
        if (!navigator.geolocation) return setNewPoint(L.latLng(CENTER));
        navigator.geolocation.getCurrentPosition(
            (pos) => setNewPoint(L.latLng(pos.coords.latitude, pos.coords.longitude)),
            () => setNewPoint(L.latLng(CENTER)),
            { enableHighAccuracy: true, timeout: 5000 }
        );
    }

    function setNewPoint(latlng, pan = true) {
        newPoint = latlng;
        miniMarker.setLatLng(latlng);
        if (pan) miniMap.panTo(latlng);
    }

    function filteredPlaces() {
        const q = $("#searchInput").val().trim().toLowerCase();
        return places.filter((p) => (q || p.category === tab) && `${p.name} ${p.description}`.toLowerCase().includes(q));
    }

    function selectedPlace() {
        return places.find((p) => p.id === selectedId);
    }

    function detailPlace() {
        return places.find((p) => p.id === detailId);
    }

    function addTiles(target, attribution) {
        L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
            maxZoom: 19,
            attribution: attribution ? '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>' : ""
        }).addTo(target);
    }

    function markerIcon(active) {
        return L.divIcon({
            className: "food-marker" + (active ? " active" : ""),
            html: "<span></span>",
            iconSize: [34, 44],
            iconAnchor: [17, 44],
            popupAnchor: [0, -42]
        });
    }

    function popupHtml(p) {
        return `
      <div class="map-popup">
        <div class="map-popup-top">
          <span class="map-popup-logo">${placeImage(p)}</span>
          <span>
            <strong>${esc(p.name)}</strong>
            <span class="stars">${stars(avg(p))}</span>
          </span>
        </div>
        <p>${esc(shortText(p.description, 64))}</p>
        <button type="button" data-detail="${esc(p.id)}">Xem chi tiết</button>
      </div>
    `;
    }

    function reviewHtml(r) {
        return `
      <article class="review-item">
        <header><strong>${esc(r.user)}</strong><span class="stars">${stars(r.rating)}</span></header>
        <p>${esc(r.comment)}</p>
        ${r.image ? `<img class="review-photo" src="${esc(r.image)}" alt="Ảnh món ăn trong review">` : ""}
      </article>
    `;
    }

    function loadPlaces() {
        try {
            const data = JSON.parse(localStorage.getItem(KEY) || "null");
            return Array.isArray(data) && data.length ? data.map(normalize) : seed;
        } catch {
            return seed;
        }
    }

    function savePlaces() {
        localStorage.setItem(KEY, JSON.stringify(places));
    }

    function normalize(p) {
        return {
            id: p.id,
            name: p.name || "Quán chưa đặt tên",
            description: p.description || "Chưa có mô tả.",
            category: p.category === "trending" ? "trending" : "nearby",
            lat: Number(p.lat) || CENTER[0],
            lng: Number(p.lng) || CENTER[1],
            rating: Number(p.rating) || 5,
            logo: p.logo || "",
            reviews: Array.isArray(p.reviews) ? p.reviews.map((r) => ({ ...r, image: r.image || "" })) : []
        };
    }

    function place(id, name, description, category, lat, lng, rating) {
        return { id, name, description, category, lat, lng, rating, logo: "", reviews: [{ user: "User 1", rating, comment: "Review mẫu cho địa điểm này.", image: "" }] };
    }

    function avg(p) {
        if (!p.reviews.length) return Math.round(p.rating || 0);
        return Math.round(p.reviews.reduce((sum, r) => sum + Number(r.rating || 0), 0) / p.reviews.length);
    }

    function stars(n) {
        return [1, 2, 3, 4, 5].map((i) => `<span class="star${i <= n ? "" : " empty"}">★</span>`).join("");
    }

    function placeImage(p) {
        return p.logo ? `<img src="${esc(p.logo)}" alt="${esc(p.name)}">` : initial(p.name);
    }

    function readImage(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    }

    function initial(text) {
        return esc((text || "Ă").trim()[0].toUpperCase());
    }

    function shortText(text, max) {
        const value = String(text || "").trim();
        return value.length > max ? value.slice(0, max).trim() + "..." : value;
    }

    function slug(text) {
        return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    }

    function esc(text) {
        return String(text).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[c]));
    }
});
