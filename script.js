// ==========================================
// AUTHENTICATION & NAVBAR LOGIC
// ==========================================
function checkLoginStatus() {
    let isLoggedIn = localStorage.getItem('isLoggedIn');
    let userName = localStorage.getItem('userName');

    let accountLink = document.getElementById('account-link');
    let userDisplay = document.getElementById('user-display');

    if (accountLink && userDisplay) {
        if (isLoggedIn === 'true' && userName) {
            // User is logged in
            userDisplay.innerText = "Hello, " + userName;
            accountLink.href = "profile.html"; // Redirect to Profile
        } else {
            // User is NOT logged in
            userDisplay.innerText = "Hello, sign in";
            accountLink.href = "index.html"; // Redirect to Login
        }
    }
}
// ==========================================
// HERO BANNER AUTO-SLIDER LOGIC
// ==========================================
function startSlider() {
    let slides = document.querySelectorAll('.slide');
    if (slides.length === 0) return; // Agar slider nahi hai toh kuch mat karo

    let currentSlide = 0;

    setInterval(() => {
        // Purani slide chhupao
        slides[currentSlide].classList.remove('active');
        // Nayi slide ka number nikalo
        currentSlide = (currentSlide + 1) % slides.length;
        // Nayi slide dikhao
        slides[currentSlide].classList.add('active');
    }, 3500); // 3.5 seconds me slide change hogi
}

// Page load hone par slider shuru karo
window.addEventListener('load', startSlider);
// Run this check when any page loads
window.addEventListener('load', checkLoginStatus);
// 1. Advance Database Array (With Loot Deals & Phones)
const products = [
    // --- PURANE PRODUCTS ---
    {
        id: "101", name: "boAt Rockerz 113, 40H Battery, Dual Pair, Fast Charge, Bluetooth Neckband",
        price: 999, mrp: 2490, discount: 60,
        images: ["https://m.media-amazon.com/images/I/61DLU-1Qe4L._SY450_.jpg"],
        features: ["Battery: Up to 40 hours.", "Fast Charge: 10 mins = 10 hours.", "Dual Pairing."]
    },
    {
        id: "102", name: "LG 1.5 Ton 5 Star DUAL Inverter Split AC (Copper, Super Convertible)",
        price: 45990, mrp: 75990, discount: 39,
        images: ["https://m.media-amazon.com/images/I/61H3LU2uaSL._AC_UY218_.jpg"],
        features: ["Split AC with inverter compressor.", "Capacity: 1.5 Ton.", "Energy Rating: 5 Star."]
    },
    {
        id: "103", name: "Scotch-Brite Sponge Wipe (Pack of 3) - Super Absorbent",
        price: 199, mrp: 250, discount: 20,
        images: ["https://m.media-amazon.com/images/I/71XdLLUEo9L._AC_UL320_.jpg"],
        features: ["Super absorbent material.", "Lint free cleaning.", "Durable."]
    },
    {
        id: "104", name: "Fire-Boltt Phoenix Smart Watch with Bluetooth Calling",
        price: 1499, mrp: 9999, discount: 85,
        images: ["https://m.media-amazon.com/images/I/717+Bu7jtLL._SL1500_.jpg"],
        features: ["Bluetooth Calling Watch.", "1.3 TFT Color Full Touch.", "120+ sports modes."]
    },

    // --- NAYE LOOT DEAL PRODUCTS (Smartphones) ---
    {
        id: "201", name: "Samsung Galaxy S25 Ultra 5G | Titanium Silverblue | Snapdragon ProVisual",
        price: 1500, mrp: 129999, discount: 99,
        images: [
            "https://m.media-amazon.com/images/I/71tl8pu4fKL._SL1500_.jpg", // YAHAN APNA LINK DAALEIN
            "https://m.media-amazon.com/images/I/818AxotDpiL._SL1500_.jpg"
        ],
        features: ["Premium Titanium Frame.", "AI ProVisual Engine.", "Built-in S-Pen."]
    },
    {
        id: "202", name: "OnePlus 13 | Smarter with OnePlus AI | 12GB RAM 256GB Storage",
        price: 999, mrp: 72999, discount: 99,
        images: [
            "https://m.media-amazon.com/images/I/71vRZZ+FCiL._SL1500_.jpg" // YAHAN APNA LINK DAALEIN
        ],
        features: ["Snapdragon 8 Elite Processor.", "5th Gen Hasselblad Cameras.", "Powered by OnePlus AI."]
    },
    {
        id: "203", name: "Spigen Liquid Air | Samsung Galaxy S25 Ultra Case [Flexible TPU]",
        price: 499, mrp: 1799, discount: 72,
        images: [
            "https://m.media-amazon.com/images/I/71KnJj9BPWL._SY450_.jpg" // YAHAN APNA LINK DAALEIN
        ],
        features: ["Air Cushion Protection.", "Flexible TPU Matte Black.", "Perfect fit for S25 Ultra."]
    },
    {
        id: "204", name: "OnePlus N6 | 4GB+128GB | Segment's Biggest 8000mAh Battery",
        price: 499, mrp: 30999, discount: 98,
        images: [
            "https://m.media-amazon.com/images/I/41zFO3p9wpL._SY300_SX300_QL70_FMwebp_.jpg" // YAHAN APNA LINK DAALEIN
        ],
        features: ["8000mAh Massive Battery.", "Smooth 120Hz Display.", "50MP Camera."]
    },
    {
        id: "205", name: "Samsung Galaxy M47 5G | 6GB RAM, 128GB Storage | Super AMOLED",
        price: 499, mrp: 46799, discount: 99,
        images: [
            "https://m.media-amazon.com/images/I/41HVXzQVQiL._SY300_SX300_QL70_FMwebp_.jpg" // YAHAN APNA LINK DAALEIN
        ],
        features: ["Gorilla Glass Victus+.", "Fast LPDDR5x RAM.", "IP64 Rating."]
    },
    {
        id: "206", name: "Samsung Galaxy S26 Ultra 5G (Black) | 200MP Camera | AI Phone",
        price: 1500, mrp: 139999, discount: 99,
        images: [
            "https://m.media-amazon.com/images/I/41HVXzQVQiL._SY300_SX300_QL70_FMwebp_.jpg" // YAHAN APNA LINK DAALEIN
        ],
        features: ["Creative Studio & Photo Assist.", "5000mAh Battery.", "Snapdragon 8 Elite Gen 5."]
    }
];

// ... (Niche ka baaki code jaisa tha waisa hi rahega)

let currentProduct = null;

function changeMainImage(src, element) {
    document.getElementById('main-img').src = src;
    let thumbs = document.querySelectorAll('.thumbnails img');
    thumbs.forEach(img => img.classList.remove('active'));
    element.classList.add('active');
}

function formatPrice(num) {
    return num.toLocaleString('en-IN');
}

// Load Product Page Data
function loadProductPage() {
    const params = new URLSearchParams(window.location.search);
    const prodId = params.get('id') || "101";

    currentProduct = products.find(p => p.id === prodId);

    if (currentProduct) {
        document.getElementById('prod-title').innerText = currentProduct.name;
        document.getElementById('prod-price').innerText = formatPrice(currentProduct.price);
        document.getElementById('buy-price').innerText = formatPrice(currentProduct.price);
        document.getElementById('prod-mrp').innerText = "M.R.P.: ₹" + formatPrice(currentProduct.mrp);
        document.getElementById('prod-discount').innerText = "-" + currentProduct.discount + "%";

        const descBox = document.getElementById('prod-desc');
        descBox.innerHTML = "";
        currentProduct.features.forEach(f => descBox.innerHTML += `<li>${f}</li>`);

        const thumbBox = document.getElementById('thumb-gallery');
        thumbBox.innerHTML = "";
        currentProduct.images.forEach((imgSrc, index) => {
            let activeClass = index === 0 ? "active" : "";
            thumbBox.innerHTML += `<img src="${imgSrc}" class="${activeClass}" onmouseover="changeMainImage('${imgSrc}', this)" onclick="changeMainImage('${imgSrc}', this)">`;
        });
        document.getElementById('main-img').src = currentProduct.images[0];

        populateSlider(currentProduct.id);
    }
}

// Button Actions
function addToCartAction() {
    if (!currentProduct) return;
    let qty = document.getElementById('qty-select').value;
    addToCart(currentProduct, qty);
}

function buyNowAction() {
    if (!currentProduct) return;
    let qty = document.getElementById('qty-select').value;
    addToCart(currentProduct, qty);
    window.location.href = 'cart.html';
}

function populateSlider(excludeId) {
    const slider = document.getElementById('related-slider');
    slider.innerHTML = "";
    let relatedProds = products.filter(p => p.id !== excludeId);

    relatedProds.forEach(prod => {
        slider.innerHTML += `
            <div class="related-item" onclick="window.location.href='product.html?id=${prod.id}'">
                <img src="${prod.images[0]}">
                <p class="title">${prod.name}</p>
                <div style="color: #ffa41c; font-size: 13px;">★★★★☆ (4,000)</div>
                <p class="price">₹${formatPrice(prod.price)}</p>
            </div>
        `;
    });
}

// ==========================================
// CART FUNCTIONALITY & STORAGE LOGIC
// ==========================================

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // NaN Fix: Agar localStorage me purana kachra hai toh usko ignore karega
    let count = cart.reduce((sum, item) => {
        let q = parseInt(item.qty);
        return sum + (isNaN(q) ? 0 : q);
    }, 0);

    let cartCountEl = document.getElementById('cart-count');
    if (cartCountEl) {
        cartCountEl.innerText = count;
    }
}
window.addEventListener('load', updateCartCount);

function addToCart(product, qty) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    // Remove invalid old data just in case
    cart = cart.filter(item => item && item.id && !isNaN(item.price));

    let existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
        existingItem.qty = parseInt(existingItem.qty) + parseInt(qty);
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            img: product.images[0],
            qty: parseInt(qty)
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();

    let msg = document.getElementById('success-msg');
    if (msg) {
        msg.style.display = 'block';
        setTimeout(() => { msg.style.display = 'none'; }, 3000);
    }
}

// BAKI KA LOAD CART AUR DELETE CART CODE YAHAN SAME RAHEGA JO PEHLE DIYA THA
function loadCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartDiv = document.getElementById('cart-items');
    let total = 0;
    let totalItems = 0;

    if (cart.length === 0 || cart.every(item => isNaN(item.price))) {
        cartDiv.innerHTML = "<p style='padding: 20px; font-size: 18px;'>Your Amazon Cart is empty.</p>";
        document.getElementById('cart-subtotal-bottom').innerText = "0";
        document.getElementById('cart-subtotal-right').innerText = "0";
        document.getElementById('cart-item-count').innerText = "0";
        document.getElementById('right-item-count').innerText = "0";
    } else {
        cartDiv.innerHTML = "";
        cart.forEach((item) => {
            if (isNaN(item.price)) return; // Skip broken items
            let itemTotal = item.price * item.qty;
            total += itemTotal;
            totalItems += parseInt(item.qty);

            cartDiv.innerHTML += `
                <div style="display: flex; justify-content: space-between; border-bottom: 1px solid #ddd; padding: 20px 0;">
                    <div style="display: flex; gap: 20px;">
                        <input type="checkbox" checked style="margin-top: 10px; cursor: pointer;">
                        <img src="${item.img}" style="width: 150px; height: 150px; object-fit: contain;">
                        <div>
                            <h3 style="font-size: 18px; color: #007185; margin-bottom: 5px;">${item.name}</h3>
                            <p style="color: #007600; font-size: 12px; margin-bottom: 5px;">In stock</p>
                            <p style="font-size: 12px; color: #565959; margin-bottom: 10px;">Eligible for FREE Shipping</p>
                            <div style="display: flex; align-items: center; gap: 15px;">
                                <div style="background: #f0f2f2; border: 1px solid #d5d9d9; border-radius: 8px; padding: 2px 8px; box-shadow: 0 2px 5px rgba(15,17,17,.15);">
                                    <span style="font-size: 14px;">Qty: <b>${item.qty}</b></span>
                                </div>
                                <span style="color: #ddd;">|</span>
                                <a href="#" onclick="deleteCartItem('${item.id}')" style="font-size: 12px; color: #007185;">Delete</a>
                            </div>
                        </div>
                    </div>
                    <div style="font-size: 18px; font-weight: bold;">₹${item.price.toLocaleString('en-IN')}</div>
                </div>
            `;
        });

        document.getElementById('cart-subtotal-bottom').innerText = total.toLocaleString('en-IN');
        document.getElementById('cart-subtotal-right').innerText = total.toLocaleString('en-IN');
        document.getElementById('cart-item-count').innerText = totalItems;
        document.getElementById('right-item-count').innerText = totalItems;
    }
}

function deleteCartItem(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
    updateCartCount();
}

function proceedToBuy() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let address = document.getElementById('delivery-address').value;

    if (cart.length === 0) {
        alert("Your cart is empty! Please add some products.");
        return;
    }
    if (address.trim() === "") {
        alert("Please enter your delivery address before proceeding.");
        return;
    }

    let total = 0;
    cart.forEach(item => { if (!isNaN(item.price)) total += (item.price * item.qty) });

    localStorage.setItem('checkoutTotal', total);
    localStorage.setItem('customerAddress', address);
    window.location.href = 'checkout.html';
}