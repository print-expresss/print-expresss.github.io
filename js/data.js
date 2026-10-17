// ============================================
// UTILITARE
// ============================================
function getQueryParam(param) {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function renderBreadcrumb(items) {
    var container = document.getElementById('breadcrumb');
    if (!container) return;
    var html = '';
    items.forEach(function (item, index) {
        var isLast = index === items.length - 1;
        if (isLast) {
            html += '<li><span class="current">' + item.label + '</span></li>';
        } else {
            html += '<li><a href="' + item.url + '">' + item.label + '</a></li>';
        }
    });
    container.innerHTML = html;
}

function initBackButton() {
    var backBtn = document.getElementById('backButton');
    if (backBtn) {
        backBtn.addEventListener('click', function (e) {
            e.preventDefault();
            if (window.history.length > 1) {
                window.history.back();
            } else {
                window.location.href = 'index.html';
            }
        });
    }
}

// ============================================
// CREARE CARD CATEGORIE
// ============================================
function createCategoryCard(cat, count, type) {
    var url = type === 'servicii'
        ? 'servicii-categorie.html?id=' + cat.id
        : 'produse-categorie.html?id=' + cat.id;
    var label = type === 'servicii' ? 'servicii' : 'produse';

    var div = document.createElement('div');
    div.className = 'category-card';
    div.innerHTML =
        '<a href="' + url + '" class="category-card-link">' +
            '<div class="category-card-image ' + cat.color + '">' +
                '<span class="icon">&#9679;</span>' +
            '</div>' +
            '<div class="category-card-body">' +
                '<h3>' + cat.title + '</h3>' +
                '<p>' + cat.shortDesc + '</p>' +
                '<span class="category-card-count">' + count + ' ' + label + '</span>' +
            '</div>' +
        '</a>';
    return div;
}

// ============================================
// CREARE CARD SERVICIU
// ============================================
function createServiceCard(service) {
    var div = document.createElement('div');
    div.className = 'card';
    div.innerHTML =
        '<a href="serviciu-detalii.html?id=' + service.id + '" class="card-link">' +
            '<h3>' + service.title + '</h3>' +
            '<p>' + service.shortDesc + '</p>' +
            '<span class="product-price">' + service.price + '</span>' +
            '<span class="card-arrow">Detalii &rarr;</span>' +
        '</a>';
    return div;
}

// ============================================
// CREARE CARD PRODUS
// ============================================
function createProductCard(product, categoryColor) {
    var div = document.createElement('div');
    div.className = 'card product-card';
    div.innerHTML =
        '<a href="produs-detalii.html?id=' + product.id + '" class="card-link">' +
            '<div class="product-image ' + (categoryColor || 'gradient-1') + '">' +
                '<span>' + product.title + '</span>' +
            '</div>' +
            '<div class="product-body">' +
                '<h3>' + product.title + '</h3>' +
                '<p>' + product.shortDesc + '</p>' +
                '<span class="product-price">' + product.price + '</span>' +
                '<span class="card-arrow">Vezi detalii &rarr;</span>' +
            '</div>' +
        '</a>';
    return div;
}

// ============================================
// RANDARE PAGINI
// ============================================
function renderIndexPreviews() {
    var servicesPreview = document.getElementById('servicesPreview');
    if (servicesPreview && typeof SERVICE_CATEGORIES !== 'undefined') {
        if (typeof COMING_SOON_SERVICES !== 'undefined' && COMING_SOON_SERVICES) {
            servicesPreview.innerHTML = '<div class="coming-soon"><h2>Va urma :)</h2><p>Lucrăm la această secțiune.</p></div>';
        } else {
            SERVICE_CATEGORIES.slice(0, 3).forEach(function (cat) {
                var count = getServicesByCategory(cat.id).length;
                servicesPreview.appendChild(createCategoryCard(cat, count, 'servicii'));
            });
        }
    }

    var productsPreview = document.getElementById('productsPreview');
    if (productsPreview && typeof PRODUCT_CATEGORIES !== 'undefined') {
        if (typeof COMING_SOON_PRODUCTS !== 'undefined' && COMING_SOON_PRODUCTS) {
            productsPreview.innerHTML = '<div class="coming-soon"><h2>Va urma :)</h2><p>Lucrăm la această secțiune.</p></div>';
        } else {
            PRODUCT_CATEGORIES.slice(0, 4).forEach(function (cat) {
                var count = getProductsByCategory(cat.id).length;
                productsPreview.appendChild(createCategoryCard(cat, count, 'produse'));
            });
        }
    }
}

function renderServiciiPage() {
    var el = document.getElementById('serviceCategories');
    if (!el || typeof SERVICE_CATEGORIES === 'undefined') return;

    renderBreadcrumb([
        { label: 'Acasă', url: 'index.html' },
        { label: 'Servicii', url: 'servicii.html' }
    ]);

    if (typeof COMING_SOON_SERVICES !== 'undefined' && COMING_SOON_SERVICES) {
        el.innerHTML = '<div class="coming-soon"><h2>Va urma :)</h2><p>Lucrăm la această secțiune.</p></div>';
        return;
    }

    SERVICE_CATEGORIES.forEach(function (cat) {
        var count = getServicesByCategory(cat.id).length;
        el.appendChild(createCategoryCard(cat, count, 'servicii'));
    });
}

function renderProdusePage() {
    var el = document.getElementById('productCategories');
    if (!el || typeof PRODUCT_CATEGORIES === 'undefined') return;

    renderBreadcrumb([
        { label: 'Acasă', url: 'index.html' },
        { label: 'Produse', url: 'produse.html' }
    ]);

    if (typeof COMING_SOON_PRODUCTS !== 'undefined' && COMING_SOON_PRODUCTS) {
        el.innerHTML = '<div class="coming-soon"><h2>Va urma :)</h2><p>Lucrăm la această secțiune.</p></div>';
        return;
    }

    PRODUCT_CATEGORIES.forEach(function (cat) {
        var count = getProductsByCategory(cat.id).length;
        el.appendChild(createCategoryCard(cat, count, 'produse'));
    });
}

function renderServiciiCategorie() {
    var el = document.getElementById('servicesInCategory');
    if (!el || typeof SERVICES === 'undefined') return;

    var catId = getQueryParam('id');
    var category = getServiceCategory(catId);
    var services = getServicesByCategory(catId);

    if (category) {
        document.getElementById('categoryTitle').textContent = category.title;
        document.getElementById('categoryDesc').textContent = category.shortDesc;
        document.title = category.title + ' - Servicii - PrintExpress';
        var hero = document.getElementById('categoryHero');
        if (hero) hero.classList.add(category.color);

        renderBreadcrumb([
            { label: 'Acasă', url: 'index.html' },
            { label: 'Servicii', url: 'servicii.html' },
            { label: category.title, url: '#' }
        ]);
    }

    if (services.length) {
        services.forEach(function (s) { el.appendChild(createServiceCard(s)); });
    } else {
        el.innerHTML = '<p>Nu există servicii în această categorie.</p>';
    }
}

function renderProduseCategorie() {
    var el = document.getElementById('productsInCategory');
    if (!el || typeof PRODUCTS === 'undefined') return;

    var catId = getQueryParam('id');
    var category = getProductCategory(catId);
    var products = getProductsByCategory(catId);

    if (category) {
        document.getElementById('categoryTitle').textContent = category.title;
        document.getElementById('categoryDesc').textContent = category.shortDesc;
        document.title = category.title + ' - Produse - PrintExpress';
        var hero = document.getElementById('categoryHero');
        if (hero) hero.classList.add(category.color);

        renderBreadcrumb([
            { label: 'Acasă', url: 'index.html' },
            { label: 'Produse', url: 'produse.html' },
            { label: category.title, url: '#' }
        ]);
    }

    if (products.length) {
        products.forEach(function (p) {
            el.appendChild(createProductCard(p, category ? category.color : 'gradient-1'));
        });
    } else {
        el.innerHTML = '<p>Nu există produse în această categorie.</p>';
    }
}

function renderServiciuDetalii() {
    var el = document.getElementById('serviceDetails');
    if (!el || typeof SERVICES === 'undefined') return;

    var id = getQueryParam('id');
    var service = SERVICES.find(function (s) { return s.id === id; });

    if (!service) {
        el.innerHTML = '<h1>Serviciu negăsit</h1><p><a href="servicii.html">Înapoi la servicii</a></p>';
        return;
    }

    var category = getServiceCategory(service.categoryId);
    var featuresHtml = service.features.map(function (f) { return '<li>' + f + '</li>'; }).join('');
    var galleryHtml = service.gallery.map(function () {
        return '<div class="gallery-thumb ' + (category ? category.color : 'gradient-1') + '"></div>';
    }).join('');

    el.innerHTML =
        '<div class="details-wrapper fade-in-up">' +
            '<div>' +
                '<div class="details-image-main ' + (category ? category.color : 'gradient-1') + '">' +
                    '<span>' + service.title + '</span>' +
                '</div>' +
                '<div class="details-gallery">' + galleryHtml + '</div>' +
            '</div>' +
            '<div class="details-content">' +
                '<h1>' + service.title + '</h1>' +
                '<div class="details-meta">' +
                    '<span>' + (category ? category.title : 'Serviciu') + '</span>' +
                    '<span>' + service.duration + '</span>' +
                '</div>' +
                '<p class="long-desc">' + service.longDesc + '</p>' +
                '<div class="details-price">' + service.price + '</div>' +
                '<h2 class="features-title">Ce include:</h2>' +
                '<ul class="features-list">' + featuresHtml + '</ul>' +
                '<div class="details-actions">' +
                    '<a href="index.html#contact" class="btn btn-primary">Contactează-ne</a>' +
                '</div>' +
            '</div>' +
        '</div>';

    document.title = service.title + ' - PrintExpress';

    renderBreadcrumb([
        { label: 'Acasă', url: 'index.html' },
        { label: 'Servicii', url: 'servicii.html' },
        { label: category ? category.title : 'Categorie', url: 'servicii-categorie.html?id=' + service.categoryId },
        { label: service.title, url: '#' }
    ]);
}

function renderProdusDetalii() {
    var el = document.getElementById('productDetails');
    if (!el || typeof PRODUCTS === 'undefined') return;

    var id = getQueryParam('id');
    var product = PRODUCTS.find(function (p) { return p.id === id; });

    if (!product) {
        el.innerHTML = '<h1>Produs negăsit</h1><p><a href="produse.html">Înapoi la produse</a></p>';
        return;
    }

    var category = getProductCategory(product.categoryId);
    var featuresHtml = product.features.map(function (f) { return '<li>' + f + '</li>'; }).join('');
    var galleryHtml = product.gallery.map(function () {
        return '<div class="gallery-thumb ' + (category ? category.color : 'gradient-1') + '"></div>';
    }).join('');

    el.innerHTML =
        '<div class="details-wrapper fade-in-up">' +
            '<div>' +
                '<div class="details-image-main ' + (category ? category.color : 'gradient-1') + '">' +
                    '<span>' + product.title + '</span>' +
                '</div>' +
                '<div class="details-gallery">' + galleryHtml + '</div>' +
            '</div>' +
            '<div class="details-content">' +
                '<h1>' + product.title + '</h1>' +
                '<div class="details-meta">' +
                    '<span>' + (category ? category.title : 'Produs') + '</span>' +
                    '<span>' + product.author + '</span>' +
                '</div>' +
                '<p class="long-desc">' + product.longDesc + '</p>' +
                '<div class="details-price">' + product.price + '</div>' +
                '<h2 class="features-title">Caracteristici:</h2>' +
                '<ul class="features-list">' + featuresHtml + '</ul>' +
                '<div class="details-actions">' +
                    '<a href="index.html#contact" class="btn btn-primary">Comandă acum</a>' +
                '</div>' +
            '</div>' +
        '</div>';

    document.title = product.title + ' - PrintExpress';

    renderBreadcrumb([
        { label: 'Acasă', url: 'index.html' },
        { label: 'Produse', url: 'produse.html' },
        { label: category ? category.title : 'Categorie', url: 'produse-categorie.html?id=' + product.categoryId },
        { label: product.title, url: '#' }
    ]);
}

// ============================================
// ANIMAȚII LA SCROLL
// ============================================
function initScrollAnimations() {
    var els = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');
    if (!els.length) return;

    if (!('IntersectionObserver' in window)) {
        els.forEach(function (el) { el.style.opacity = '1'; });
        return;
    }

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'none';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    els.forEach(function (el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });
}

function initCounters() {
    var counters = document.querySelectorAll('.counter');
    if (!counters.length || !('IntersectionObserver' in window)) return;

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                var el = entry.target;
                var target = parseInt(el.dataset.target, 10);
                var duration = 1800;
                var start = performance.now();

                function tick(now) {
                    var progress = Math.min((now - start) / duration, 1);
                    el.textContent = Math.floor(progress * target);
                    if (progress < 1) requestAnimationFrame(tick);
                    else el.textContent = target;
                }
                requestAnimationFrame(tick);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(function (c) { observer.observe(c); });
}

function initHeaderScroll() {
    var header = document.querySelector('.header');
    if (!header) return;
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
    });
}

// ============================================
// INIT GENERAL
// ============================================
document.addEventListener('DOMContentLoaded', function () {
    // Meniu mobil
    var menuToggle = document.querySelector('.menu-toggle');
    var nav = document.querySelector('.nav');
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function () {
            menuToggle.classList.toggle('active');
            nav.classList.toggle('active');
        });
        document.querySelectorAll('.nav-list a').forEach(function (link) {
            link.addEventListener('click', function () {
                menuToggle.classList.remove('active');
                nav.classList.remove('active');
            });
        });
    }

    // An curent
    var yearEl = document.getElementById('currentYear');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Formular
    var contactForm = document.getElementById('contactForm');
    var formStatus = document.getElementById('formStatus');
    if (contactForm && formStatus) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            var name = document.getElementById('name').value.trim();
            if (!name) {
                formStatus.textContent = 'Vă rugăm să completați toate câmpurile.';
                formStatus.style.color = '#dc2626';
                return;
            }
            formStatus.textContent = 'Mulțumim, ' + name + '! Mesajul a fost trimis.';
            formStatus.style.color = '#16a34a';
            contactForm.reset();
            setTimeout(function () { formStatus.textContent = ''; }, 5000);
        });
    }

    // Randare pagini
    renderIndexPreviews();
    renderServiciiPage();
    renderProdusePage();
    renderServiciiCategorie();
    renderProduseCategorie();
    renderServiciuDetalii();
    renderProdusDetalii();

    // Utilitare
    initBackButton();
    initHeaderScroll();
    initScrollAnimations();
    initCounters();
});