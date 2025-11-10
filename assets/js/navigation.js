/* ============================================
   HCJK Collection - Navigation JavaScript
   Navigation Menu Functionality
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize navigation
    initMobileMenu();
    initScrollNavbar();
    initActiveNavLink();
    
});

/* ==================== MOBILE MENU ==================== */
function initMobileMenu() {
    const navbarToggle = document.getElementById('navbar-toggle');
    const navbarMenu = document.getElementById('navbar-menu');
    const navbarLinks = document.querySelectorAll('.navbar-link');
    
    if (!navbarToggle || !navbarMenu) return;
    
    // Toggle menu on button click
    navbarToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navbarMenu.classList.toggle('active');
        
        // Update ARIA attributes
        const isExpanded = this.classList.contains('active');
        this.setAttribute('aria-expanded', isExpanded);
        
        // Prevent body scroll when menu is open
        if (isExpanded) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
    
    // Close menu when clicking on a link
    navbarLinks.forEach(link => {
        link.addEventListener('click', function() {
            navbarToggle.classList.remove('active');
            navbarMenu.classList.remove('active');
            navbarToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navbarToggle.contains(event.target) || navbarMenu.contains(event.target);
        
        if (!isClickInsideNav && navbarMenu.classList.contains('active')) {
            navbarToggle.classList.remove('active');
            navbarMenu.classList.remove('active');
            navbarToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && navbarMenu.classList.contains('active')) {
            navbarToggle.classList.remove('active');
            navbarMenu.classList.remove('active');
            navbarToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
    });
}

/* ==================== SCROLL NAVBAR ==================== */
function initScrollNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    
    let lastScrollTop = 0;
    const scrollThreshold = 100;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add scrolled class when scrolled past threshold
        if (scrollTop > scrollThreshold) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Hide navbar on scroll down, show on scroll up (optional)
        // Uncomment the following code to enable this feature
        /*
        if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
            // Scrolling down
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            navbar.style.transform = 'translateY(0)';
        }
        */
        
        lastScrollTop = scrollTop;
    });
}

/* ==================== ACTIVE NAV LINK ==================== */
function initActiveNavLink() {
    const navbarLinks = document.querySelectorAll('.navbar-link');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    navbarLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        
        // Check if link matches current page
        if (linkPage === currentPage || 
            (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Update active link on scroll for single-page sections
    if (currentPage === 'index.html' || currentPage === '') {
        updateActiveOnScroll();
    }
}

/* ==================== UPDATE ACTIVE LINK ON SCROLL ==================== */
function updateActiveOnScroll() {
    const sections = document.querySelectorAll('section[id]');
    const navbarLinks = document.querySelectorAll('.navbar-link');
    
    if (sections.length === 0) return;
    
    window.addEventListener('scroll', function() {
        let current = '';
        const scrollPosition = window.pageYOffset + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navbarLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

/* ==================== DROPDOWN MENU (Optional) ==================== */
function initDropdownMenu() {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            const dropdown = this.nextElementSibling;
            
            if (dropdown && dropdown.classList.contains('dropdown-menu')) {
                dropdown.classList.toggle('show');
                this.setAttribute('aria-expanded', dropdown.classList.contains('show'));
            }
        });
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
                menu.classList.remove('show');
                const toggle = menu.previousElementSibling;
                if (toggle) {
                    toggle.setAttribute('aria-expanded', 'false');
                }
            });
        }
    });
}

/* ==================== MEGA MENU (Optional) ==================== */
function initMegaMenu() {
    const megaMenuToggles = document.querySelectorAll('.mega-menu-toggle');
    
    megaMenuToggles.forEach(toggle => {
        toggle.addEventListener('mouseenter', function() {
            const megaMenu = this.querySelector('.mega-menu');
            if (megaMenu) {
                megaMenu.classList.add('show');
            }
        });
        
        toggle.addEventListener('mouseleave', function() {
            const megaMenu = this.querySelector('.mega-menu');
            if (megaMenu) {
                megaMenu.classList.remove('show');
            }
        });
    });
}

/* ==================== SEARCH FUNCTIONALITY (Optional) ==================== */
function initNavbarSearch() {
    const searchToggle = document.querySelector('.search-toggle');
    const searchForm = document.querySelector('.search-form');
    const searchInput = document.querySelector('.search-input');
    const searchClose = document.querySelector('.search-close');
    
    if (!searchToggle || !searchForm) return;
    
    // Open search
    searchToggle.addEventListener('click', function(e) {
        e.preventDefault();
        searchForm.classList.add('active');
        searchInput.focus();
    });
    
    // Close search
    if (searchClose) {
        searchClose.addEventListener('click', function() {
            searchForm.classList.remove('active');
        });
    }
    
    // Close search on escape
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && searchForm.classList.contains('active')) {
            searchForm.classList.remove('active');
        }
    });
}

/* ==================== STICKY HEADER ==================== */
function initStickyHeader() {
    const header = document.querySelector('.navbar');
    if (!header) return;
    
    const headerHeight = header.offsetHeight;
    const placeholder = document.createElement('div');
    placeholder.style.height = `${headerHeight}px`;
    placeholder.style.display = 'none';
    
    header.parentNode.insertBefore(placeholder, header);
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > headerHeight) {
            header.classList.add('sticky');
            placeholder.style.display = 'block';
        } else {
            header.classList.remove('sticky');
            placeholder.style.display = 'none';
        }
    });
}

/* ==================== ACCESSIBILITY ENHANCEMENTS ==================== */
function initAccessibility() {
    // Trap focus in mobile menu when open
    const navbarMenu = document.getElementById('navbar-menu');
    const navbarToggle = document.getElementById('navbar-toggle');
    
    if (!navbarMenu || !navbarToggle) return;
    
    const focusableElements = navbarMenu.querySelectorAll(
        'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled])'
    );
    
    if (focusableElements.length === 0) return;
    
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];
    
    navbarMenu.addEventListener('keydown', function(e) {
        if (!navbarMenu.classList.contains('active')) return;
        
        if (e.key === 'Tab') {
            if (e.shiftKey) {
                // Shift + Tab
                if (document.activeElement === firstFocusable) {
                    e.preventDefault();
                    lastFocusable.focus();
                }
            } else {
                // Tab
                if (document.activeElement === lastFocusable) {
                    e.preventDefault();
                    firstFocusable.focus();
                }
            }
        }
    });
}

// Initialize accessibility features
document.addEventListener('DOMContentLoaded', initAccessibility);