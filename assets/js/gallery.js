/* ============================================
   HCJK Collection - Gallery JavaScript
   Portfolio Filtering and Gallery Functionality
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize gallery filtering
    initPortfolioFilter();
    initLoadMore();
    
});

/* ==================== PORTFOLIO FILTERING ==================== */
function initPortfolioFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    if (filterButtons.length === 0 || galleryItems.length === 0) return;
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter gallery items
            filterGalleryItems(filter, galleryItems);
        });
    });
    
    // Check for hash in URL (e.g., #weddings)
    const hash = window.location.hash.substring(1);
    if (hash) {
        const filterButton = document.querySelector(`[data-filter="${hash}"]`);
        if (filterButton) {
            filterButton.click();
        }
    }
}

function filterGalleryItems(filter, items) {
    items.forEach(item => {
        const category = item.getAttribute('data-category');
        
        if (filter === 'all' || category === filter) {
            // Show item with animation
            item.style.display = 'block';
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'scale(1)';
            }, 10);
        } else {
            // Hide item with animation
            item.style.opacity = '0';
            item.style.transform = 'scale(0.8)';
            setTimeout(() => {
                item.style.display = 'none';
            }, 300);
        }
    });
}

/* ==================== LOAD MORE FUNCTIONALITY ==================== */
function initLoadMore() {
    const loadMoreBtn = document.getElementById('load-more-btn');
    
    if (!loadMoreBtn) return;
    
    let itemsToShow = 18; // Initial number of items to show
    const itemsPerLoad = 6; // Number of items to load each time
    
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    // Initially hide items beyond the first set
    hideExtraItems(galleryItems, itemsToShow);
    
    // Check if load more button should be shown
    if (galleryItems.length <= itemsToShow) {
        loadMoreBtn.style.display = 'none';
    }
    
    loadMoreBtn.addEventListener('click', function() {
        itemsToShow += itemsPerLoad;
        
        // Show more items
        showMoreItems(galleryItems, itemsToShow);
        
        // Hide button if all items are shown
        if (itemsToShow >= galleryItems.length) {
            loadMoreBtn.style.display = 'none';
        }
        
        // Smooth scroll to first new item
        const firstNewItem = galleryItems[itemsToShow - itemsPerLoad];
        if (firstNewItem) {
            setTimeout(() => {
                firstNewItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 100);
        }
    });
}

function hideExtraItems(items, showCount) {
    items.forEach((item, index) => {
        if (index >= showCount) {
            item.style.display = 'none';
        }
    });
}

function showMoreItems(items, showCount) {
    items.forEach((item, index) => {
        if (index < showCount) {
            const category = item.getAttribute('data-category');
            const activeFilter = document.querySelector('.filter-btn.active');
            const filter = activeFilter ? activeFilter.getAttribute('data-filter') : 'all';
            
            // Only show if it matches the current filter
            if (filter === 'all' || category === filter) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 10);
            }
        }
    });
}

/* ==================== MASONRY LAYOUT ==================== */
function initMasonryLayout() {
    // This is a simple implementation
    // For production, consider using a library like Masonry.js or Isotope
    
    const gallery = document.querySelector('.gallery-masonry');
    if (!gallery) return;
    
    // Adjust column count based on screen size
    function adjustColumns() {
        const width = window.innerWidth;
        let columns = 3;
        
        if (width < 768) {
            columns = 1;
        } else if (width < 1024) {
            columns = 2;
        }
        
        gallery.style.columnCount = columns;
    }
    
    adjustColumns();
    window.addEventListener('resize', adjustColumns);
}

/* ==================== GALLERY HOVER EFFECTS ==================== */
function initGalleryHoverEffects() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.querySelector('.gallery-item-overlay').style.opacity = '1';
        });
        
        item.addEventListener('mouseleave', function() {
            this.querySelector('.gallery-item-overlay').style.opacity = '0';
        });
    });
}

/* ==================== GALLERY SEARCH ==================== */
function initGallerySearch() {
    const searchInput = document.getElementById('gallery-search');
    
    if (!searchInput) return;
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const galleryItems = document.querySelectorAll('.gallery-item');
        
        galleryItems.forEach(item => {
            const title = item.querySelector('.gallery-item-title')?.textContent.toLowerCase() || '';
            const category = item.querySelector('.gallery-item-category')?.textContent.toLowerCase() || '';
            
            if (title.includes(searchTerm) || category.includes(searchTerm)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
}

/* ==================== EXPORT FUNCTIONS ==================== */
window.GalleryUtils = {
    filterGalleryItems,
    initMasonryLayout,
    initGalleryHoverEffects,
    initGallerySearch
};