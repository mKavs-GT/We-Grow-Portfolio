// ==========================================
// CORE DATA & DYNAMIC GENERATION
// ==========================================
const productData = [
    { title: "Growth Serum", price: "Rs. 649", oldPrice: "Rs. 999", img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400", badge: "Best Selling", badgeColor: "var(--primary-color)" },
    { title: "Saffron Gel & Almond Scrub", price: "Rs. 595", oldPrice: "Rs. 690", img: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400", badge: "-30%", badgeColor: "var(--sale-red)" },
    { title: "ABC Malt Pack of 2", price: "Rs. 699", oldPrice: "Rs. 990", img: "https://cdn.shopify.com/s/files/1/0901/3375/8246/files/ABCMaltFront.png?v=1751574913", badge: "", badgeColor: "" },
    { title: "Nalungu Mavu Soap", price: "Rs. 250", oldPrice: "", img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400", badge: "New", badgeColor: "var(--primary-color)" },
    { title: "Moringa Hair Gel", price: "Rs. 350", oldPrice: "Rs. 450", img: "https://vithoba.co.in/cdn/shop/files/Kesh-Hair-Oil-01_00f396d2-b1a5-4e2d-b1c8-af8bc34d0a08.png?v=1756980957", badge: "", badgeColor: "" }
];

const sections = [
    "Recommended for You", "Best Sellers", "Superfoods", "Combos",
    "Hair Care", "Face Care", "Body Care", "Lip Care", "Baby Care"
];

function generateProductCarousels() {
    const container = document.getElementById('dynamic-carousels-container');
    if (!container) return;

    let html = '';
    sections.forEach(section => {
        let slides = '';
        productData.forEach(p => {
            const badgeHtml = p.badge ? `<span class="product-badge" style="background-color: ${p.badgeColor};">${p.badge}</span>` : '';
            const oldPriceHtml = p.oldPrice ? `<span class="original-price">${p.oldPrice}</span>` : '';
            slides += `
                <div class="swiper-slide">
                    <div class="product-card">
                        ${badgeHtml}
                        <div class="product-img-wrapper" onclick="window.location.href='product-detail.html'" style="cursor:pointer;">
                            <img src="${p.img}" alt="${p.title}">
                        </div>
                        <div class="product-info">
                            <div class="rating"><i class='bx bxs-star'></i> 4.8 | 120 Reviews</div>
                            <h3 class="product-title" onclick="window.location.href='product-detail.html'" style="cursor:pointer;">${p.title}</h3>
                            <div class="price-block">
                                <span class="current-price">${p.price}</span>
                                ${oldPriceHtml}
                            </div>
                            <button class="btn-card" onclick="addToCart('${p.title}', '${p.price.replace('Rs. ', '')}', '${p.img}')">Add To Cart</button>
                        </div>
                    </div>
                </div>
            `;
        });

        html += `
            <section class="container" style="padding-top: 60px;">
                <h2 class="section-heading" style="margin-bottom: 20px;">${section}</h2>
                <div class="product-slider-container swiper productSwiper">
                    <div class="swiper-wrapper">
                        ${slides}
                    </div>
                    <!-- Navigation -->
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                </div>
                <div class="view-all-wrapper">
                    <button class="btn-view-all" onclick="location.href='all-products.html'">View All</button>
                </div>
            </section>
        `;
    });

    container.innerHTML = html;
}

// ==========================================
// SEARCH BAR LOGIC
// ==========================================
const mainSearch = document.getElementById('mainSearch');
const searchContainer = document.getElementById('searchContainer');
const searchDropdown = document.getElementById('searchDropdown');
const closeSearchBtn = document.getElementById('closeSearchBtn');
const searchProductsGrid = document.getElementById('searchProductsGrid');

function populateSearchDropdown() {
    if (!searchProductsGrid) return;

    // Screenshot exact replicated data
    const searchData = [
        { title: "Growth Serum", desc: "Helps 5X Faster Hair Regrow", price: "Rs. 649", oldPrice: "Rs. 999", img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=200", badge: "", rating: "4.77 | 35 Reviews", btnText: "View" },
        { title: "Advanced Hair Regrowth Kit", desc: "Hair Growth in Instant", price: "Rs. 1,248", oldPrice: "Rs. 2,200", img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=200", badge: "Best Selling", badgeColor: "#000", rating: "4.71 | 14 Reviews", btnText: "Add" },
        { title: "ABC Malt Pack of 2", desc: "Power-Packed Nutrition in Every Scoop", price: "Rs. 699", oldPrice: "Rs. 990", img: "https://cdn.shopify.com/s/files/1/0901/3375/8246/files/ABCMaltFront.png?v=1751574913", badge: "", rating: "4.46 | 39 Reviews", btnText: "Add" },
        { title: "Combo of Saffron Gel & Almond Scrub", desc: "Helps Your Skin To Glow", price: "Rs. 595", oldPrice: "Rs. 690", img: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=200", badge: "", rating: "4.62 | 21 Reviews", btnText: "Add" }
    ];

    let html = '';
    searchData.forEach(p => {
        const badgeHtml = p.badge ? `<span class="product-badge" style="background-color: ${p.badgeColor}; z-index:5;">${p.badge}</span>` : '';
        const oldPriceHtml = p.oldPrice ? `<span class="original-price" style="font-size:11px;">${p.oldPrice}</span>` : '';
        html += `
            <div class="search-product-card" style="position:relative; overflow:hidden;">
                ${badgeHtml}
                <div style="height:140px; overflow:hidden; border-radius:4px; margin-bottom:10px; cursor:pointer;" onclick="window.location.href='product-detail.html'">
                    <img src="${p.img}" style="width:100%; height:100%; object-fit:cover;">
                </div>
                <div style="font-size:11px; color:#FFB800; margin-bottom:6px;"><i class='bx bxs-star'></i> ${p.rating}</div>
                <h4 style="font-size:13px; font-weight:700; margin-bottom:4px; line-height:1.3; cursor:pointer;" onclick="window.location.href='product-detail.html'">${p.title}</h4>
                <p style="font-size:11px; color:var(--text-muted); margin-bottom:10px; line-height:1.4; flex:1;">${p.desc}</p>
                <div style="margin-bottom:12px;">
                    <span style="font-size:13px; font-weight:700; color:var(--sale-red);">${p.price}</span>
                    ${oldPriceHtml}
                </div>
                <button style="width:100%; padding:8px; background:var(--primary-color); color:white; border-radius:4px; font-weight:700; font-size:12px; border:none; cursor:pointer;" onclick="addToCart('${p.title}', '${p.price.replace('Rs. ', '')}', '${p.img}')">${p.btnText}</button>
            </div>
        `;
    });
    searchProductsGrid.innerHTML = html;
}

if (mainSearch) {
    populateSearchDropdown();

    mainSearch.addEventListener('focus', () => {
        searchDropdown.classList.add('active');
        searchContainer.classList.add('active');

        if (!document.getElementById('searchOverlayBg')) {
            const bg = document.createElement('div');
            bg.id = 'searchOverlayBg';
            bg.style.cssText = 'position:fixed; top:0; left:0; width:100vw; height:100vh; background:rgba(0,0,0,0.5); z-index:880; cursor:pointer;';
            document.body.appendChild(bg);

            bg.addEventListener('click', closeSearch);
        }
    });

    mainSearch.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const cards = searchProductsGrid.querySelectorAll('.search-product-card');
        cards.forEach(card => {
            const title = card.querySelector('h4').innerText.toLowerCase();
            if (title.includes(query) || query === '') {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

function closeSearch() {
    if (searchDropdown) searchDropdown.classList.remove('active');
    if (searchContainer) searchContainer.classList.remove('active');
    if (mainSearch) mainSearch.value = '';

    const cards = searchProductsGrid ? searchProductsGrid.querySelectorAll('.search-product-card') : [];
    cards.forEach(card => card.style.display = 'flex');

    const bg = document.getElementById('searchOverlayBg');
    if (bg) bg.remove();
}

if (closeSearchBtn) {
    closeSearchBtn.addEventListener('click', closeSearch);
}

// ==========================================
// SWIPER INITIALIZATION & INITIAL LOAD LOGIC
// ==========================================
document.addEventListener('DOMContentLoaded', () => {

    // Generate the massive page sections dynamically
    generateProductCarousels();

    // Hero Carousel
    if (document.querySelector('.heroSwiper')) {
        new Swiper('.heroSwiper', {
            loop: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.hero-section .swiper-button-next',
                prevEl: '.hero-section .swiper-button-prev',
            },
        });
    }

    // Product Carousels (Apply to all generated ones)
    document.querySelectorAll('.productSwiper').forEach(el => {
        new Swiper(el, {
            slidesPerView: 1.5,
            spaceBetween: 20,
            navigation: {
                nextEl: el.querySelector('.swiper-button-next'),
                prevEl: el.querySelector('.swiper-button-prev'),
            },
            breakpoints: {
                640: { slidesPerView: 2.5 },
                1024: { slidesPerView: 4.5 }
            }
        });
    });
});

window.addEventListener('load', () => {
    // Fulfil Requirement: Show popups on page load after a slight natural delay
    // ONLY show if not already shown in this session
    if (!sessionStorage.getItem('popupsShown')) {
        setTimeout(() => {
            // Show push notification prompt
            const pushPrompt = document.getElementById('pushNotificationPrompt');
            if (pushPrompt) pushPrompt.classList.add('active');

            // Show login modal
            openLoginModal();
            
            // Mark as shown
            sessionStorage.setItem('popupsShown', 'true');
        }, 1200);
    }
    
    // Refresh cart UI on load
    updateCartUI();
});

// Hide push notification
function closePush() {
    const pushPrompt = document.getElementById('pushNotificationPrompt');
    if (pushPrompt) pushPrompt.classList.remove('active');
}

// ==========================================
// CART FUNCTIONALITY
// ==========================================
let cartCount = 0;
const cartDrawer = document.getElementById('cartDrawer');
const cartOverlay = document.getElementById('cartOverlay');
const cartBadge = document.getElementById('cartBadge');
const cartCountTitle = document.getElementById('cartCountTitle');

function openCart() {
    cartDrawer.classList.add('active');
    cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    cartDrawer.classList.remove('active');
    cartOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

/* ==========================================
   CART SYSTEM (High-Fidelity)
   ========================================== */
let cart = [];
let cartTotalAmount = 0;

function addToCart(title, price, img) {
    const existing = cart.find(i => i.title === title);
    if (existing) {
        existing.qty++;
    } else {
        cart.push({ title, price: parseFloat(price) || 590, img: img || 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=100', qty: 1 });
    }
    updateCartUI();
    openCart();
}

function updateQtyInCart(index, delta) {
    cart[index].qty += delta;
    if (cart[index].qty < 1) {
        cart.splice(index, 1);
    }
    updateCartUI();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function updateCartUI() {
    const list = document.getElementById('cartItemsList');
    const badge = document.getElementById('cartBadge');
    const countTitle = document.getElementById('cartCountTitle');
    const subtotalEl = document.getElementById('cartSubtotal');
    const totalEl = document.getElementById('cartTotal');
    const fill = document.getElementById('cartProgressFill');
    const giftText = document.querySelector('.gift-text');

    if (!list) return;

    let itemsHtml = '';
    let subtotal = 0;
    let count = 0;

    cart.forEach((item, index) => {
        subtotal += item.price * item.qty;
        count += item.qty;
        itemsHtml += `
            <div class="cart-item-card">
                <img src="${item.img}" class="cart-item-img">
                <div class="cart-item-details">
                    <div class="cart-item-top">
                        <h4 class="cart-item-title">${item.title}</h4>
                        <span class="cart-item-price">₹${(item.price * item.qty).toFixed(2)}</span>
                    </div>
                    <div class="cart-item-actions">
                        <div class="qty-pill">
                            <button onclick="updateQtyInCart(${index}, -1)">-</button>
                            <span>${item.qty}</span>
                            <button onclick="updateQtyInCart(${index}, 1)">+</button>
                        </div>
                        <i class='bx bx-trash' style="cursor:pointer; color:#999; font-size:18px;" onclick="removeFromCart(${index})"></i>
                    </div>
                </div>
            </div>
        `;
    });

    if (cart.length === 0) {
        itemsHtml = '<p style="text-align:center; padding:40px; color:#999;">Your cart is empty</p>';
    }

    list.innerHTML = itemsHtml;

    // Badge & Counts
    if (badge) {
        badge.innerText = count;
        badge.style.display = count > 0 ? 'flex' : 'none';
    }
    if (countTitle) countTitle.innerText = count;

    // Totals
    const discount = subtotal > 0 ? (subtotal * 0.1) : 0; // 10% Discount simulation if items exist
    const finalTotal = subtotal - discount;
    if (subtotalEl) subtotalEl.innerText = `₹${subtotal.toFixed(2)}`;
    if (totalEl) totalEl.innerText = `₹${finalTotal.toFixed(2)}`;

    // Savings Bar & Coupon Block
    const savingsBar = document.querySelector('.savings-bar');
    const couponBlock = document.querySelector('.coupon-applied-status');
    const checkoutBtn = document.querySelector('.checkout-btn-black');

    if (count > 0) {
        if (savingsBar) {
            savingsBar.style.display = 'block';
            savingsBar.innerText = `₹${discount.toFixed(2)} Saved so far!`;
        }
        if (couponBlock) couponBlock.style.display = 'block';
        if (checkoutBtn) checkoutBtn.style.opacity = '1';
        if (checkoutBtn) checkoutBtn.disabled = false;
    } else {
        if (savingsBar) savingsBar.style.display = 'none';
        if (couponBlock) couponBlock.style.display = 'none';
        if (checkoutBtn) checkoutBtn.style.opacity = '0.5';
        if (checkoutBtn) checkoutBtn.disabled = true;
    }

    // Progress bar
    if (fill) {
        const pct = Math.min((subtotal / 1200) * 100, 100);
        fill.style.width = pct + '%';

        const milestones = document.querySelectorAll('.progress-milestone');
        milestones.forEach((m, idx) => {
            const mPct = idx === 0 ? 70 : 100; // Adjusted for better visual logic
            if (pct >= mPct) m.classList.add('active');
            else m.classList.remove('active');
        });

        if (subtotal <= 0) {
            if (giftText) giftText.innerText = `Add items to start unlocking gifts!`;
            fill.style.width = '0%';
        } else if (subtotal < 1000) {
            if (giftText) giftText.innerText = `Add ₹${(1000 - subtotal).toFixed(0)} more to unlock Free Hibiscus Shampoo`;
        } else if (subtotal < 1200) {
            if (giftText) giftText.innerText = `Add ₹${(1200 - subtotal).toFixed(0)} more to unlock 3 Goat Milk Soap`;
        } else {
            if (giftText) giftText.innerText = `Congratulations! All gifts unlocked!`;
        }
    }
}

// ==========================================
// NAVIGATION MEGA-MENU LOGIC
// ==========================================
const navOverlay = document.getElementById('navOverlay');
const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        if (item.querySelector('.mega-menu') || item.querySelector('.simple-dropdown')) {
            navOverlay.classList.add('active');
        }
    });
    item.addEventListener('mouseleave', () => {
        navOverlay.classList.remove('active');
    });
});

// Close search if clicking overlay
navOverlay.addEventListener('click', () => {
    navOverlay.classList.remove('active');
});

// ==========================================
// AUTHENTICATION
// ==========================================
let isAuthenticated = false;
const loginModal = document.getElementById('loginModal');
const authText = document.getElementById('authText');

function openLoginModal() {
    if (isAuthenticated) {
        window.location.href = "account.html";
    } else {
        loginModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeLoginModal() {
    loginModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function processLogin() {
    const btn = document.querySelector('.k-btn');
    btn.innerHTML = "Sending OTP...";

    setTimeout(() => {
        btn.innerHTML = "Verified!";
        isAuthenticated = true;

        setTimeout(() => {
            closeLoginModal();
            updateAuthUI();
        }, 800);

    }, 1000);
}

function updateAuthUI() {
    if (isAuthenticated) {
        authText.innerText = "Account";
        authText.parentElement.style.color = "var(--primary-color)";
    }
}

function openCheckout() {
    const overlay = document.getElementById('checkoutOverlay');
    const totalAmount = document.getElementById('cartTotal').innerText;
    const count = document.getElementById('cartCountTitle').innerText;

    // Update checkout modal data
    document.getElementById('checkoutTotalAmount').innerText = totalAmount;
    document.getElementById('checkoutItemCount').innerText = count;
    document.querySelectorAll('.checkout-total-val').forEach(el => el.innerText = totalAmount);

    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCheckout() {
    document.getElementById('checkoutOverlay').classList.remove('active');
    document.body.style.overflow = 'auto';
}

function initiateCheckout() {
    if (cart.length === 0) return;
    if (!isAuthenticated) {
        closeCart();
        openLoginModal();
    } else {
        closeCart();
        openCheckout();
    }
}

// ==========================================
// MOBILE NAVIGATION & STICKY ACTIONS
// ==========================================
function openMobileNav() {
    const drawer = document.getElementById('mobileNavDrawer');
    const overlay = document.getElementById('mobileNavOverlay');
    if (drawer) drawer.classList.add('active');
    if (overlay) overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMobileNav() {
    const drawer = document.getElementById('mobileNavDrawer');
    const overlay = document.getElementById('mobileNavOverlay');
    if (drawer) drawer.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = '';
}

function toggleMobileSubmenu(link) {
    const sublist = link.nextElementSibling;
    const chevron = link.querySelector('i');
    if (sublist) {
        const isHidden = window.getComputedStyle(sublist).display === 'none';
        sublist.style.display = isHidden ? 'block' : 'none';
        if (chevron) {
            chevron.style.transform = isHidden ? 'rotate(180deg)' : 'rotate(0deg)';
        }
    }
}

// Sticky Mobile Action Bar on Product Detail
document.addEventListener('DOMContentLoaded', () => {
    const stickyBar = document.getElementById('mobileStickyBar');
    const mainAddBtn = document.querySelector('.btn-add-p-cart');

    if (stickyBar && mainAddBtn) {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (window.innerWidth <= 768) {
                    if (entry.isIntersecting) {
                        stickyBar.style.display = 'none';
                    } else {
                        stickyBar.style.display = 'flex';
                    }
                }
            },
            { threshold: 0.1 }
        );
        observer.observe(mainAddBtn);

        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                stickyBar.style.display = 'none';
            }
        });
    }

    // Search input enter support
    document.querySelectorAll('.search-bar').forEach(input => {
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && input.value.trim() !== '') {
                window.location.href = 'all-products.html';
            }
        });
    });
});



// ==========================================
// WE-GROW DIALOG MODAL & TOAST SYSTEM
// ==========================================
let selectedPaymentMethod = 'UPI (Paytm, GPay, PhonePe)';

function selectPaymentRow(el, method) {
    document.querySelectorAll('.payment-row').forEach(r => r.classList.remove('selected'));
    if (el) el.classList.add('selected');
    selectedPaymentMethod = method;
    showWeGrowToast(`Payment method selected: ${method}`);
}

function showWeGrowModal(opts) {
    const overlay = document.getElementById('wegrow-modal-overlay');
    if (!overlay) return;
    const badge = document.getElementById('wegrow-modal-badge');
    const title = document.getElementById('wegrow-modal-title');
    const desc = document.getElementById('wegrow-modal-desc');
    const details = document.getElementById('wegrow-modal-details');
    const icon = document.getElementById('wegrow-modal-icon');

    if (badge) badge.textContent = opts.badge || 'ORDER ACCEPTED & CONFIRMED';
    if (title) title.textContent = opts.title || 'Order Placed Successfully!';
    if (desc) desc.textContent = opts.message || 'Your order has been accepted for fulfillment.';
    if (icon) icon.innerHTML = opts.icon || '&#10003;';

    if (details && opts.details) {
        details.innerHTML = opts.details.map(d => `
            <div class="wegrow-detail-row">
                <span class="wegrow-detail-label">${d.label}</span>
                <span class="wegrow-detail-val ${d.highlight ? 'highlight' : ''}">${d.value}</span>
            </div>
        `).join('');
        details.style.display = 'flex';
    } else if (details) {
        details.style.display = 'none';
    }

    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeWeGrowModal() {
    const overlay = document.getElementById('wegrow-modal-overlay');
    if (overlay) {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

let wegrowToastTimer;
function showWeGrowToast(msg) {
    const toast = document.getElementById('wegrow-toast');
    const msgEl = document.getElementById('wegrow-toast-msg');
    if (!toast) return;
    if (msgEl) msgEl.textContent = msg;
    toast.classList.add('active');
    clearTimeout(wegrowToastTimer);
    wegrowToastTimer = setTimeout(() => {
        toast.classList.remove('active');
    }, 3200);
}

function showWeGrowLegal(title) {
    showWeGrowModal({
        badge: 'LEGAL & ASSURANCE',
        title: title,
        message: 'WeGrow Organic Care products are 100% Ayush certified, dermatologically tested, and packaged using eco-friendly compostable materials.',
        details: [
            { label: 'Certification', value: 'GMP & Ayush Ministry Approved' },
            { label: 'Return Policy', value: '7-Day Easy Returns Guarantee' },
            { label: 'Customer Care', value: '+91 9019099314 / tintedtimber@gmail.com' }
        ]
    });
}

function completeOrder() {
    const payBtn = document.getElementById('btnCompletePayment');
    const totalAmount = document.getElementById('checkoutTotalAmount')?.innerText || '₹590';
    const count = document.getElementById('checkoutItemCount')?.innerText || '1';

    if (payBtn) {
        payBtn.disabled = true;
        payBtn.innerHTML = "<i class='bx bx-loader-alt bx-spin'></i> Authorizing Payment...";
    }

    setTimeout(() => {
        if (payBtn) {
            payBtn.disabled = false;
            payBtn.innerHTML = "<i class='bx bx-lock-alt'></i> Pay & Place Order (" + totalAmount + ")";
        }

        const orderId = 'WG-' + Math.floor(100000 + Math.random() * 900000);
        closeCheckout();

        showWeGrowModal({
            badge: 'ORDER ACCEPTED & CONFIRMED',
            title: 'Order Placed Successfully!',
            message: 'Thank you for your order! Your Ayurvedic wellness products have been accepted for dispatch from our Bangalore central hub.',
            details: [
                { label: 'Order ID', value: orderId, highlight: true },
                { label: 'Recipient', value: 'Krishawn V Rahul' },
                { label: 'Delivery Address', value: '3 Daisy Villa Pillana Garden, Bangalore - 560049' },
                { label: 'Items Ordered', value: count + ' Product(s)' },
                { label: 'Amount Paid', value: totalAmount, highlight: true },
                { label: 'Payment Mode', value: selectedPaymentMethod },
                { label: 'Dispatch Speed', value: 'Within 24 Hours via Bluedart Air' },
                { label: 'Status', value: 'Payment Accepted & Packing', highlight: true }
            ]
        });

        // Clear cart
        cart = [];
        try { localStorage.removeItem('wegrow_cart'); } catch(e){}
        updateCartUI();
    }, 800);
}

function buyNow(title, price, img) {
    addToCart(title, price, img);
    setTimeout(() => {
        initiateCheckout();
    }, 300);
}

// Auto-check stored authentication state
try {
    if (localStorage.getItem('wegrow_auth') === 'true') {
        isAuthenticated = true;
        updateAuthUI();
    }
} catch(e){}
