/* ============================================
   HCJK Collection - Lightbox JavaScript
   Image Lightbox/Modal Functionality
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize lightbox
    initLightbox();
    
});

/* ==================== LIGHTBOX FUNCTIONALITY ==================== */
function initLightbox() {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    const modal = document.getElementById('lightbox-modal');
    const modalImage = document.getElementById('lightbox-image');
    const closeBtn = document.getElementById('modal-close');
    const prevBtn = document.getElementById('modal-prev');
    const nextBtn = document.getElementById('modal-next');
    
    if (!modal || !modalImage) return;
    
    let currentIndex = 0;
    let visibleImages = [];
    
    // Update visible images based on current filter
    function updateVisibleImages() {
        visibleImages = Array.from(galleryItems).filter(img => {
            const item = img.closest('.gallery-item');
            return item && window.getComputedStyle(item).display !== 'none';
        });
    }
    
    // Open lightbox
    galleryItems.forEach((img, index) => {
        img.addEventListener('click', function() {
            updateVisibleImages();
            currentIndex = visibleImages.indexOf(this);
            openLightbox(this);
        });
    });
    
    // Close lightbox
    if (closeBtn) {
        closeBtn.addEventListener('click', closeLightbox);
    }
    
    // Close on background click
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeLightbox();
        }
    });
    
    // Previous image
    if (prevBtn) {
        prevBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            showPreviousImage();
        });
    }
    
    // Next image
    if (nextBtn) {
        nextBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            showNextImage();
        });
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (!modal.classList.contains('active')) return;
        
        switch(e.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowLeft':
                showPreviousImage();
                break;
            case 'ArrowRight':
                showNextImage();
                break;
        }
    });
    
    // Open lightbox function
    function openLightbox(img) {
        modalImage.src = img.src;
        modalImage.alt = img.alt;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Add fade-in animation
        modalImage.style.opacity = '0';
        setTimeout(() => {
            modalImage.style.opacity = '1';
        }, 10);
    }
    
    // Close lightbox function
    function closeLightbox() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // Show previous image
    function showPreviousImage() {
        if (visibleImages.length === 0) return;
        
        currentIndex = (currentIndex - 1 + visibleImages.length) % visibleImages.length;
        updateLightboxImage();
    }
    
    // Show next image
    function showNextImage() {
        if (visibleImages.length === 0) return;
        
        currentIndex = (currentIndex + 1) % visibleImages.length;
        updateLightboxImage();
    }
    
    // Update lightbox image
    function updateLightboxImage() {
        const img = visibleImages[currentIndex];
        if (!img) return;
        
        // Fade out
        modalImage.style.opacity = '0';
        
        // Change image after fade
        setTimeout(() => {
            modalImage.src = img.src;
            modalImage.alt = img.alt;
            
            // Fade in
            setTimeout(() => {
                modalImage.style.opacity = '1';
            }, 10);
        }, 200);
    }
    
    // Touch/swipe support for mobile
    initTouchSupport(modal);
}

/* ==================== TOUCH/SWIPE SUPPORT ==================== */
function initTouchSupport(modal) {
    let touchStartX = 0;
    let touchEndX = 0;
    
    modal.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    }, false);
    
    modal.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, false);
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe left - next image
                const nextBtn = document.getElementById('modal-next');
                if (nextBtn) nextBtn.click();
            } else {
                // Swipe right - previous image
                const prevBtn = document.getElementById('modal-prev');
                if (prevBtn) prevBtn.click();
            }
        }
    }
}

/* ==================== ZOOM FUNCTIONALITY ==================== */
function initImageZoom() {
    const modalImage = document.getElementById('lightbox-image');
    if (!modalImage) return;
    
    let scale = 1;
    const maxScale = 3;
    const minScale = 1;
    
    modalImage.addEventListener('dblclick', function() {
        if (scale === 1) {
            scale = 2;
        } else {
            scale = 1;
        }
        
        this.style.transform = `scale(${scale})`;
        this.style.cursor = scale > 1 ? 'zoom-out' : 'zoom-in';
    });
    
    // Mouse wheel zoom
    modalImage.addEventListener('wheel', function(e) {
        e.preventDefault();
        
        if (e.deltaY < 0) {
            // Zoom in
            scale = Math.min(scale + 0.1, maxScale);
        } else {
            // Zoom out
            scale = Math.max(scale - 0.1, minScale);
        }
        
        this.style.transform = `scale(${scale})`;
        this.style.cursor = scale > 1 ? 'zoom-out' : 'zoom-in';
    });
}

/* ==================== IMAGE PRELOADING ==================== */
function preloadAdjacentImages(currentIndex, images) {
    const preloadCount = 2; // Number of images to preload on each side
    
    for (let i = 1; i <= preloadCount; i++) {
        // Preload next images
        const nextIndex = (currentIndex + i) % images.length;
        if (images[nextIndex]) {
            const img = new Image();
            img.src = images[nextIndex].src;
        }
        
        // Preload previous images
        const prevIndex = (currentIndex - i + images.length) % images.length;
        if (images[prevIndex]) {
            const img = new Image();
            img.src = images[prevIndex].src;
        }
    }
}

/* ==================== LIGHTBOX WITH CAPTIONS ==================== */
function initLightboxCaptions() {
    const modal = document.getElementById('lightbox-modal');
    if (!modal) return;
    
    // Create caption element if it doesn't exist
    let caption = modal.querySelector('.lightbox-caption');
    if (!caption) {
        caption = document.createElement('div');
        caption.className = 'lightbox-caption';
        modal.querySelector('.modal-content').appendChild(caption);
    }
    
    // Update caption when image changes
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        const img = item.querySelector('img');
        const title = item.querySelector('.gallery-item-title')?.textContent;
        const category = item.querySelector('.gallery-item-category')?.textContent;
        
        if (img) {
            img.addEventListener('click', function() {
                if (title || category) {
                    caption.innerHTML = `
                        ${title ? `<h3>${title}</h3>` : ''}
                        ${category ? `<p>${category}</p>` : ''}
                    `;
                    caption.style.display = 'block';
                } else {
                    caption.style.display = 'none';
                }
            });
        }
    });
}

/* ==================== EXPORT FUNCTIONS ==================== */
window.LightboxUtils = {
    initImageZoom,
    preloadAdjacentImages,
    initLightboxCaptions
};