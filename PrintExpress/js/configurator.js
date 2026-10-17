// ============================================
// CONFIGURATOR PERSONALIZARE - PrintExpress
// ============================================
(function () {
    'use strict';

    var state = {
        productId: null,
        shapeId: null,
        sizeId: null,
        materialId: null,
        imageDataUrl: null,
        imageScale: 1,
        imageX: 0,
        imageY: 0
    };

    var isDragging = false;
    var dragStartX = 0;
    var dragStartY = 0;

    function $(id) { return document.getElementById(id); }

    // ----------------------------------------
    // PAS 1: ALEGERE PRODUS
    // ----------------------------------------
    function renderProductChoices() {
        var container = $('productChoices');
        if (!container || typeof PERSONALIZABLE_PRODUCTS === 'undefined') return;

        renderBreadcrumb([
            { label: 'Acasă', url: 'index.html' },
            { label: 'Personalizare', url: 'personalizare.html' }
        ]);

        PERSONALIZABLE_PRODUCTS.forEach(function (product) {
            var firstShape = product.shapes[0];
            var thumbImage = firstShape ? firstShape.baseImage : '';
            var card = document.createElement('div');
            card.className = 'category-card';
            card.innerHTML =
                '<a href="#" class="category-card-link" data-product="' + product.id + '">' +
                    '<div class="category-card-image custom-product-thumb">' +
                        '<img src="' + thumbImage + '" alt="' + product.title + '" ' +
                             'onerror="this.parentNode.innerHTML=\'<span class=&quot;icon&quot;>&#9679;</span>\'">' +
                    '</div>' +
                    '<div class="category-card-body">' +
                        '<h3>' + product.title + '</h3>' +
                        '<p>' + product.shortDesc + '</p>' +
                        '<span class="category-card-count">De la ' + product.basePrice + ' lei</span>' +
                    '</div>' +
                '</a>';
            container.appendChild(card);
        });

        container.addEventListener('click', function (e) {
            var link = e.target.closest('[data-product]');
            if (!link) return;
            e.preventDefault();
            selectProduct(link.getAttribute('data-product'));
        });
    }

    // ----------------------------------------
    // SELECTARE PRODUS
    // ----------------------------------------
    function selectProduct(productId) {
        var product = getPersonalizableProduct(productId);
        if (!product) return;

        state.productId = productId;
        state.shapeId = product.shapes[0].id;
        state.sizeId = product.sizes[0].id;
        state.materialId = product.materials[0].id;

        $('stepProduct').classList.add('hidden');
        $('stepConfig').classList.remove('hidden');

        renderBreadcrumb([
            { label: 'Acasă', url: 'index.html' },
            { label: 'Personalizare', url: 'personalizare.html' },
            { label: product.title, url: '#' }
        ]);

        renderOptionGroup('shapeOptions', product.shapes, 'shapeId');
        renderOptionGroup('sizeOptions', product.sizes, 'sizeId');
        renderOptionGroup('materialOptions', product.materials, 'materialId');

        resetImage();
        updatePreview();
        updatePrice();

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // ----------------------------------------
    // OPȚIUNI
    // ----------------------------------------
    function renderOptionGroup(containerId, options, stateKey) {
        var container = $(containerId);
        if (!container) return;
        container.innerHTML = '';

        options.forEach(function (opt) {
            var btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'option-btn';
            btn.setAttribute('data-value', opt.id);
            if (state[stateKey] === opt.id) btn.classList.add('active');

            var extra = opt.priceExtra > 0 ? ' (+' + opt.priceExtra + ' lei)' : '';
            btn.innerHTML = '<span>' + opt.label + '</span>' +
                            (extra ? '<small>' + extra + '</small>' : '');

            btn.addEventListener('click', function () {
                state[stateKey] = opt.id;
                container.querySelectorAll('.option-btn').forEach(function (b) {
                    b.classList.remove('active');
                });
                btn.classList.add('active');
                
                if (stateKey === 'shapeId') {
                    resetImagePosition();
                }
                
                updatePreview();
                updatePrice();
            });

            container.appendChild(btn);
        });
    }

    // ----------------------------------------
    // UPLOAD IMAGINE & GESTIONARE
    // ----------------------------------------
    function initUpload() {
        var zone = $('uploadZone');
        var input = $('imageInput');
        var removeBtn = $('removeImageBtn');
        var resetPosBtn = $('resetImagePositionBtn');
        var zoomSlider = $('zoomSlider');
        var previewImg = $('previewImage');

        if (!zone || !input) return;

        zone.addEventListener('click', function () { input.click(); });

        zone.addEventListener('dragover', function (e) {
            e.preventDefault();
            zone.classList.add('drag-over');
        });
        zone.addEventListener('dragleave', function () {
            zone.classList.remove('drag-over');
        });
        zone.addEventListener('drop', function (e) {
            e.preventDefault();
            zone.classList.remove('drag-over');
            if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                handleFile(e.dataTransfer.files[0]);
            }
        });

        input.addEventListener('change', function () {
            if (input.files && input.files[0]) {
                handleFile(input.files[0]);
            }
        });

        if (removeBtn) {
            removeBtn.addEventListener('click', function () {
                resetImage();
                updatePreview();
            });
        }

        if (resetPosBtn) {
            resetPosBtn.addEventListener('click', function() {
                resetImagePosition();
            });
        }

        if (zoomSlider) {
            zoomSlider.addEventListener('input', function() {
                state.imageScale = parseFloat(this.value);
                updateImageTransform();
            });
        }

        if (previewImg) {
            previewImg.addEventListener('mousedown', startDrag);
            previewImg.addEventListener('touchstart', startDrag, { passive: false });
        }
    }

    function startDrag(e) {
        if (!state.imageDataUrl) return;
        isDragging = true;
        
        var clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
        var clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;

        dragStartX = clientX - state.imageX;
        dragStartY = clientY - state.imageY;

        document.addEventListener('mousemove', onDrag);
        document.addEventListener('touchmove', onDrag, { passive: false });
        document.addEventListener('mouseup', stopDrag);
        document.addEventListener('touchend', stopDrag);
    }

    function onDrag(e) {
        if (!isDragging) return;
        e.preventDefault();

        var clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
        var clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;

        state.imageX = clientX - dragStartX;
        state.imageY = clientY - dragStartY;

        updateImageTransform();
    }

    function stopDrag() {
        isDragging = false;
        document.removeEventListener('mousemove', onDrag);
        document.removeEventListener('touchmove', onDrag);
        document.removeEventListener('mouseup', stopDrag);
        document.removeEventListener('touchend', stopDrag);
    }

    function updateImageTransform() {
        var previewImg = $('previewImage');
        if (previewImg) {
            previewImg.style.transform = 'translate(' + state.imageX + 'px, ' + state.imageY + 'px) scale(' + state.imageScale + ')';
        }
    }

    function resetImagePosition() {
        state.imageScale = 1;
        state.imageX = 0;
        state.imageY = 0;
        
        var slider = $('zoomSlider');
        if (slider) slider.value = 1;
        
        updateImageTransform();
    }

    function handleFile(file) {
        if (!file.type.match('image.*')) {
            showToast('Te rugăm să încarci un fișier imagine.');
            return;
        }
        if (file.size > 5 * 1024 * 1024) {
            showToast('Imaginea este prea mare (max 5 MB).');
            return;
        }

        var reader = new FileReader();
        reader.onload = function (e) {
            state.imageDataUrl = e.target.result;
            resetImagePosition();

            var previewImg = $('previewImage');
            if (previewImg) previewImg.src = state.imageDataUrl;

            var uploadInner = $('uploadInner');
            if (uploadInner) {
                uploadInner.innerHTML =
                    '<img src="' + state.imageDataUrl + '" alt="Previzualizare" class="upload-thumb">' +
                    '<p><strong>Imagine încărcată</strong></p>' +
                    '<p class="upload-hint">Click pentru a schimba imaginea</p>';
            }
            
            var rb = $('removeImageBtn');
            if (rb) rb.classList.remove('hidden');
            
            var adjuster = $('imageAdjuster');
            if (adjuster) adjuster.classList.remove('hidden');

            updatePreview();
        };
        reader.readAsDataURL(file);
    }

    function resetImage() {
        state.imageDataUrl = null;
        resetImagePosition();
        
        var previewImg = $('previewImage');
        if (previewImg) previewImg.removeAttribute('src');
        
        var uploadInner = $('uploadInner');
        if (uploadInner) {
            uploadInner.innerHTML =
                '<div class="upload-icon">+</div>' +
                '<p><strong>Click pentru a încărca</strong> sau trage imaginea aici</p>' +
                '<p class="upload-hint">JPG, PNG sau WEBP, max 5 MB</p>';
        }
        
        var rb = $('removeImageBtn');
        if (rb) rb.classList.add('hidden');
        
        var adjuster = $('imageAdjuster');
        if (adjuster) adjuster.classList.add('hidden');
        
        var input = $('imageInput');
        if (input) input.value = '';
    }

    // ----------------------------------------
    // PREVIEW LIVE & CONVERSIE COORDONATE (MAP)
    // ----------------------------------------
    function applyCoords(imgElement, printArea, shape) {
        // 1. CURĂȚĂM TOATE STILURILE VECHI PENTRU A EVITA CONFLICTELE
        printArea.style.clipPath = 'none';
        printArea.style.webkitMaskImage = 'none';
        printArea.style.maskImage = 'none';
        printArea.style.borderRadius = '0';
        printArea.style.zIndex = ''; 

        var imgW = imgElement.naturalWidth;
        var imgH = imgElement.naturalHeight;
        
        if (!imgW || !imgH) return;

        var x1, y1, x2, y2;

        if (shape.coords) {
            x1 = shape.coords[0];
            y1 = shape.coords[1];
            x2 = shape.coords[2];
            y2 = shape.coords[3];
        } else if (shape.printArea) {
            printArea.style.left = shape.printArea.left;
            printArea.style.top = shape.printArea.top;
            printArea.style.width = shape.printArea.width;
            printArea.style.height = shape.printArea.height;
            printArea.style.borderRadius = shape.printArea.borderRadius || '0';
            if (shape.printArea.clipPath) printArea.style.clipPath = shape.printArea.clipPath;
            return;
        } else {
            return;
        }

        // 2. CALCULĂM PROCENTELE
        var leftPct = (x1 / imgW) * 100;
        var topPct = (y1 / imgH) * 100;
        var widthPct = ((x2 - x1) / imgW) * 100;
        var heightPct = ((y2 - y1) / imgH) * 100;

        printArea.style.left = leftPct + '%';
        printArea.style.top = topPct + '%';
        printArea.style.width = widthPct + '%';
        printArea.style.height = heightPct + '%';
        printArea.style.borderRadius = shape.borderRadius || '0';

        // 3. APLICĂM NOILE DECUPĂRI / MASCA
        if (shape.clipPath) {
            printArea.style.clipPath = shape.clipPath;
        }

        if (shape.maskImage) {
            printArea.style.webkitMaskImage = shape.maskImage;
            printArea.style.maskImage = shape.maskImage;
            // FORȚĂM MASCA SĂ SE ÎNTINDĂ PE TOATĂ ZONA
            printArea.style.webkitMaskSize = '100% 100%';
            printArea.style.maskSize = '100% 100%';
            printArea.style.webkitMaskRepeat = 'no-repeat';
            printArea.style.maskRepeat = 'no-repeat';
            printArea.style.webkitMaskPosition = 'center';
            printArea.style.maskPosition = 'center';
        }
    }

    function updatePreview() {
        var product = getPersonalizableProduct(state.productId);
        if (!product) return;

        var shape = product.shapes.find(function (s) { return s.id === state.shapeId; });
        var size = product.sizes.find(function (s) { return s.id === state.sizeId; });
        var material = product.materials.find(function (m) { return m.id === state.materialId; });

        if (!shape) return;

        var productBaseImg = $('productBaseImage');
        var printArea = $('printArea');
        var previewImg = $('previewImage');
        var previewHint = $('previewHint');

        if (productBaseImg && printArea) {
            productBaseImg.onload = null;
            
            productBaseImg.src = shape.baseImage;
            productBaseImg.alt = product.title + ' - ' + shape.label;
            
            productBaseImg.classList.remove('layer-front');
            printArea.classList.remove('layer-behind');
            
            if (shape.layer === 'behind') {
                printArea.classList.add('layer-behind');
                productBaseImg.classList.add('layer-front');
            }

            var apply = function() {
                applyCoords(productBaseImg, printArea, shape);
            };

            if (productBaseImg.complete && productBaseImg.naturalWidth > 0) {
                apply();
            } else {
                productBaseImg.onload = apply;
            }
        }

        if (state.imageDataUrl) {
            if (previewImg) {
                previewImg.src = state.imageDataUrl;
                previewImg.style.display = 'block';
                updateImageTransform();
            }
            if (previewHint) previewHint.style.display = 'none';
        } else {
            if (previewImg) previewImg.style.display = 'none';
            if (previewHint) previewHint.style.display = 'block';
        }

        var infoEl = $('previewInfo');
        if (infoEl) {
            infoEl.innerHTML =
                '<div class="preview-info-item"><strong>Produs:</strong> ' + product.title + '</div>' +
                '<div class="preview-info-item"><strong>Formă:</strong> ' + shape.label + '</div>' +
                '<div class="preview-info-item"><strong>Mărime:</strong> ' + size.label + '</div>' +
                '<div class="preview-info-item"><strong>Material:</strong> ' + material.label + '</div>';
        }
    }

    // ----------------------------------------
    // PREȚ
    // ----------------------------------------
    function updatePrice() {
        var product = getPersonalizableProduct(state.productId);
        if (!product) return;

        var shape = product.shapes.find(function (s) { return s.id === state.shapeId; });
        var size = product.sizes.find(function (s) { return s.id === state.sizeId; });
        var material = product.materials.find(function (m) { return m.id === state.materialId; });

        var extras = (shape ? shape.priceExtra : 0) +
                     (size ? size.priceExtra : 0) +
                     (material ? material.priceExtra : 0);

        var total = product.basePrice + extras;

        var baseEl = $('basePriceDisplay');
        var extrasEl = $('extrasDisplay');
        var totalEl = $('totalPriceDisplay');
        
        if (baseEl) baseEl.textContent = product.basePrice + ' lei';
        if (extrasEl) extrasEl.textContent = (extras > 0 ? '+' : '') + extras + ' lei';
        if (totalEl) {
            totalEl.textContent = total + ' lei';
            totalEl.classList.remove('price-bump');
            void totalEl.offsetWidth;
            totalEl.classList.add('price-bump');
        }

        return { product: product, shape: shape, size: size, material: material, total: total };
    }

    // ----------------------------------------
    // ACȚIUNI & MODAL
    // ----------------------------------------
    function initActions() {
        var resetBtn = $('resetConfigBtn');
        if (resetBtn) {
            resetBtn.addEventListener('click', function () {
                if (!state.productId) return;
                var product = getPersonalizableProduct(state.productId);
                state.shapeId = product.shapes[0].id;
                state.sizeId = product.sizes[0].id;
                state.materialId = product.materials[0].id;
                resetImage();
                renderOptionGroup('shapeOptions', product.shapes, 'shapeId');
                renderOptionGroup('sizeOptions', product.sizes, 'sizeId');
                renderOptionGroup('materialOptions', product.materials, 'materialId');
                updatePreview();
                updatePrice();
                showToast('Configurația a fost resetată.');
            });
        }

        var addBtn = $('addToCartBtn');
        if (addBtn) {
            addBtn.addEventListener('click', function () {
                if (!state.imageDataUrl) {
                    showToast('Te rugăm să încarci o imagine mai întâi.');
                    return;
                }
                var result = updatePrice();
                var modal = $('confirmModal');
                var summary = $('modalSummary');
                if (summary && result) {
                    summary.innerHTML =
                        'Ai comandat un <strong>' + result.product.title + '</strong> ' +
                        '(' + result.shape.label + ', ' + result.size.label + ', ' + result.material.label + ') ' +
                        'la prețul total de <strong>' + result.total + ' lei</strong>.';
                }
                if (modal) modal.classList.remove('hidden');
            });
        }

        var closeBtn = $('modalCloseBtn');
        if (closeBtn) {
            closeBtn.addEventListener('click', function () {
                $('confirmModal').classList.add('hidden');
            });
        }

        var modal = $('confirmModal');
        if (modal) {
            modal.addEventListener('click', function (e) {
                if (e.target === modal) modal.classList.add('hidden');
            });
        }
    }

    // ----------------------------------------
    // TOAST
    // ----------------------------------------
    function showToast(message) {
        var existing = document.querySelector('.toast');
        if (existing) existing.remove();

        var toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        document.body.appendChild(toast);

        requestAnimationFrame(function () { toast.classList.add('show'); });
        setTimeout(function () {
            toast.classList.remove('show');
            setTimeout(function () { toast.remove(); }, 300);
        }, 3000);
    }

    // ----------------------------------------
    // INIT
    // ----------------------------------------
    document.addEventListener('DOMContentLoaded', function () {
        if (!$('productChoices')) return;
        renderProductChoices();
        initUpload();
        initActions();
    });
})();