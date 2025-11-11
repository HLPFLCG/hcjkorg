/* ============================================
   HCJK Photography - Enhanced Features
   Additional functionality for improved UX
   ============================================ */

(function() {
    'use strict';

    // ============================================
    // FORM VALIDATION & LOADING STATES
    // ============================================
    const enhanceForms = () => {
        const forms = document.querySelectorAll('form');
        
        forms.forEach(form => {
            // Add loading state on submit
            form.addEventListener('submit', function(e) {
                const submitBtn = this.querySelector('button[type="submit"]');
                if (submitBtn && !submitBtn.disabled) {
                    submitBtn.disabled = true;
                    submitBtn.classList.add('loading');
                    const originalText = submitBtn.textContent;
                    submitBtn.innerHTML = '<span class="spinner"></span> Sending...';
                    
                    // Reset after 10 seconds if no response
                    setTimeout(() => {
                        if (submitBtn.disabled) {
                            submitBtn.disabled = false;
                            submitBtn.classList.remove('loading');
                            submitBtn.textContent = originalText;
                        }
                    }, 10000);
                }
            });

            // Real-time validation
            const inputs = form.querySelectorAll('input, textarea, select');
            inputs.forEach(input => {
                input.addEventListener('blur', function() {
                    validateField(this);
                });

                input.addEventListener('input', function() {
                    if (this.classList.contains('error')) {
                        validateField(this);
                    }
                });
            });
        });
    };

    const validateField = (field) => {
        const value = field.value.trim();
        let isValid = true;
        let errorMessage = '';

        // Required field check
        if (field.hasAttribute('required') && !value) {
            isValid = false;
            errorMessage = 'This field is required';
        }

        // Email validation
        if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Please enter a valid email address';
            }
        }

        // Phone validation
        if (field.type === 'tel' && value) {
            const phoneRegex = /^[\d\s\-\+\(\)]+$/;
            if (!phoneRegex.test(value) || value.replace(/\D/g, '').length < 10) {
                isValid = false;
                errorMessage = 'Please enter a valid phone number';
            }
        }

        // Update field state
        if (isValid) {
            field.classList.remove('error');
            field.classList.add('valid');
            removeErrorMessage(field);
        } else {
            field.classList.remove('valid');
            field.classList.add('error');
            showErrorMessage(field, errorMessage);
        }

        return isValid;
    };

    const showErrorMessage = (field, message) => {
        removeErrorMessage(field);
        const errorDiv = document.createElement('div');
        errorDiv.className = 'field-error';
        errorDiv.textContent = message;
        errorDiv.setAttribute('role', 'alert');
        field.parentNode.appendChild(errorDiv);
    };

    const removeErrorMessage = (field) => {
        const existingError = field.parentNode.querySelector('.field-error');
        if (existingError) {
            existingError.remove();
        }
    };

    // ============================================
    // SKIP NAVIGATION LINK
    // ============================================
    const addSkipLink = () => {
        const main = document.querySelector('main');
        if (!main) return;

        if (!main.id) {
            main.id = 'main-content';
        }

        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.className = 'skip-link';
        skipLink.textContent = 'Skip to main content';
        skipLink.setAttribute('tabindex', '0');
        document.body.insertBefore(skipLink, document.body.firstChild);
    };

    // ============================================
    // KEYBOARD NAVIGATION ENHANCEMENT
    // ============================================
    const enhanceKeyboardNav = () => {
        // Make all interactive elements keyboard accessible
        document.querySelectorAll('[onclick]').forEach(element => {
            if (!element.hasAttribute('tabindex')) {
                element.setAttribute('tabindex', '0');
            }
            
            element.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.click();
                }
            });
        });

        // Visible focus indicators for keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                document.body.classList.add('keyboard-nav');
            }
        });

        document.addEventListener('mousedown', () => {
            document.body.classList.remove('keyboard-nav');
        });
    };

    // ============================================
    // PORTFOLIO FILTERING
    // ============================================
    const initPortfolioFilter = () => {
        const filterButtons = document.querySelectorAll('[data-filter]');
        const portfolioItems = document.querySelectorAll('[data-category]');

        if (filterButtons.length === 0 || portfolioItems.length === 0) return;

        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const filter = this.dataset.filter;

                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');

                // Filter items with animation
                portfolioItems.forEach(item => {
                    if (filter === 'all' || item.dataset.category === filter) {
                        item.style.display = '';
                        setTimeout(() => item.classList.add('fade-in'), 10);
                    } else {
                        item.classList.remove('fade-in');
                        setTimeout(() => item.style.display = 'none', 300);
                    }
                });

                // Announce to screen readers
                const visibleCount = Array.from(portfolioItems).filter(
                    item => item.style.display !== 'none'
                ).length;
                announceToScreenReader(
                    `Showing ${visibleCount} ${filter === 'all' ? '' : filter} images`
                );
            });
        });
    };

    // ============================================
    // TESTIMONIAL CAROUSEL
    // ============================================
    const initTestimonialCarousel = () => {
        const testimonials = document.querySelectorAll('.testimonial-item');
        if (testimonials.length <= 1) return;

        let currentIndex = 0;
        const totalTestimonials = testimonials.length;

        // Create navigation dots
        const dotsContainer = document.createElement('div');
        dotsContainer.className = 'testimonial-dots';
        
        for (let i = 0; i < totalTestimonials; i++) {
            const dot = document.createElement('button');
            dot.className = 'testimonial-dot';
            dot.setAttribute('aria-label', `View testimonial ${i + 1}`);
            dot.addEventListener('click', () => showTestimonial(i));
            dotsContainer.appendChild(dot);
        }

        const testimonialsContainer = testimonials[0].parentElement;
        testimonialsContainer.appendChild(dotsContainer);

        const showTestimonial = (index) => {
            testimonials.forEach((testimonial, i) => {
                testimonial.classList.toggle('active', i === index);
            });
            
            const dots = dotsContainer.querySelectorAll('.testimonial-dot');
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
            
            currentIndex = index;
        };

        const nextTestimonial = () => {
            currentIndex = (currentIndex + 1) % totalTestimonials;
            showTestimonial(currentIndex);
        };

        // Auto-rotate every 6 seconds
        setInterval(nextTestimonial, 6000);

        // Initialize
        showTestimonial(0);
    };

    // ============================================
    // SCREEN READER ANNOUNCEMENTS
    // ============================================
    const announceToScreenReader = (message) => {
        let announcer = document.getElementById('sr-announcer');
        if (!announcer) {
            announcer = document.createElement('div');
            announcer.id = 'sr-announcer';
            announcer.className = 'sr-only';
            announcer.setAttribute('aria-live', 'polite');
            announcer.setAttribute('aria-atomic', 'true');
            document.body.appendChild(announcer);
        }
        announcer.textContent = message;
    };

    // ============================================
    // SCROLL DEPTH TRACKING
    // ============================================
    const trackScrollDepth = () => {
        const milestones = [25, 50, 75, 100];
        const tracked = new Set();

        const checkScrollDepth = () => {
            const scrollPercentage = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight * 100;
            
            milestones.forEach(milestone => {
                if (scrollPercentage >= milestone && !tracked.has(milestone)) {
                    tracked.add(milestone);
                    
                    // Send to GTM
                    if (window.dataLayer) {
                        window.dataLayer.push({
                            'event': 'scroll_depth',
                            'scroll_percentage': milestone
                        });
                    }
                }
            });
        };

        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    checkScrollDepth();
                    ticking = false;
                });
                ticking = true;
            }
        });
    };

    // ============================================
    // FORM ABANDONMENT TRACKING
    // ============================================
    const trackFormAbandonment = () => {
        const forms = document.querySelectorAll('form');
        
        forms.forEach(form => {
            let formStarted = false;
            let formSubmitted = false;

            form.addEventListener('input', () => {
                if (!formStarted) {
                    formStarted = true;
                    
                    if (window.dataLayer) {
                        window.dataLayer.push({
                            'event': 'form_start',
                            'form_id': form.id || 'unknown'
                        });
                    }
                }
            });

            form.addEventListener('submit', () => {
                formSubmitted = true;
            });

            // Track abandonment on page unload
            window.addEventListener('beforeunload', () => {
                if (formStarted && !formSubmitted) {
                    if (window.dataLayer) {
                        window.dataLayer.push({
                            'event': 'form_abandonment',
                            'form_id': form.id || 'unknown'
                        });
                    }
                }
            });
        });
    };

    // ============================================
    // PERFORMANCE MONITORING
    // ============================================
    const monitorPerformance = () => {
        if ('PerformanceObserver' in window) {
            // Monitor Largest Contentful Paint
            try {
                const lcpObserver = new PerformanceObserver((list) => {
                    const entries = list.getEntries();
                    const lastEntry = entries[entries.length - 1];
                    
                    if (window.dataLayer) {
                        window.dataLayer.push({
                            'event': 'performance_metric',
                            'metric_name': 'LCP',
                            'metric_value': Math.round(lastEntry.renderTime || lastEntry.loadTime)
                        });
                    }
                });
                lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
            } catch (e) {
                console.log('LCP monitoring not supported');
            }

            // Monitor First Input Delay
            try {
                const fidObserver = new PerformanceObserver((list) => {
                    const entries = list.getEntries();
                    entries.forEach(entry => {
                        if (window.dataLayer) {
                            window.dataLayer.push({
                                'event': 'performance_metric',
                                'metric_name': 'FID',
                                'metric_value': Math.round(entry.processingStart - entry.startTime)
                            });
                        }
                    });
                });
                fidObserver.observe({ entryTypes: ['first-input'] });
            } catch (e) {
                console.log('FID monitoring not supported');
            }
        }

        // Track page load time
        window.addEventListener('load', () => {
            setTimeout(() => {
                const perfData = performance.timing;
                const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
                
                if (window.dataLayer) {
                    window.dataLayer.push({
                        'event': 'performance_metric',
                        'metric_name': 'page_load_time',
                        'metric_value': pageLoadTime
                    });
                }
            }, 0);
        });
    };

    // ============================================
    // MOBILE MENU ENHANCEMENT
    // ============================================
    const enhanceMobileMenu = () => {
        const nav = document.querySelector('nav');
        const menuToggle = document.querySelector('.mobile-menu-toggle, .menu-toggle');
        
        if (!nav || !menuToggle) return;

        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && nav.classList.contains('active')) {
                menuToggle.click();
                menuToggle.focus();
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (nav.classList.contains('active') && 
                !nav.contains(e.target) && 
                !menuToggle.contains(e.target)) {
                menuToggle.click();
            }
        });

        // Close menu when navigating to anchor
        const navLinks = nav.querySelectorAll('a[href^="#"]');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (nav.classList.contains('active')) {
                    setTimeout(() => menuToggle.click(), 100);
                }
            });
        });
    };

    // ============================================
    // TOUCH TARGET OPTIMIZATION
    // ============================================
    const optimizeTouchTargets = () => {
        // Ensure all interactive elements have minimum 44x44px touch target
        const interactiveElements = document.querySelectorAll('a, button, input, select, textarea');
        
        interactiveElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.width < 44 || rect.height < 44) {
                element.style.minWidth = '44px';
                element.style.minHeight = '44px';
            }
        });
    };

    // ============================================
    // EVENT TRACKING
    // ============================================
    const setupEventTracking = () => {
        // Track button clicks
        document.querySelectorAll('button, .btn, .cta-button').forEach(button => {
            button.addEventListener('click', function() {
                if (window.dataLayer) {
                    window.dataLayer.push({
                        'event': 'button_click',
                        'button_text': this.textContent.trim(),
                        'button_location': window.location.pathname
                    });
                }
            });
        });

        // Track external links
        document.querySelectorAll('a[href^="http"]').forEach(link => {
            if (!link.href.includes(window.location.hostname)) {
                link.addEventListener('click', function() {
                    if (window.dataLayer) {
                        window.dataLayer.push({
                            'event': 'external_link_click',
                            'link_url': this.href,
                            'link_text': this.textContent.trim()
                        });
                    }
                });
            }
        });

        // Track email and phone clicks
        document.querySelectorAll('a[href^="mailto:"], a[href^="tel:"]').forEach(link => {
            link.addEventListener('click', function() {
                const type = this.href.startsWith('mailto:') ? 'email' : 'phone';
                if (window.dataLayer) {
                    window.dataLayer.push({
                        'event': 'contact_click',
                        'contact_type': type,
                        'contact_value': this.href.replace(/^(mailto:|tel:)/, '')
                    });
                }
            });
        });
    };

    // ============================================
    // INITIALIZATION
    // ============================================
    const init = () => {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
            return;
        }

        // Initialize all enhancements
        addSkipLink();
        enhanceForms();
        enhanceKeyboardNav();
        initPortfolioFilter();
        initTestimonialCarousel();
        trackScrollDepth();
        trackFormAbandonment();
        monitorPerformance();
        enhanceMobileMenu();
        optimizeTouchTargets();
        setupEventTracking();

        console.log('HCJK Photography enhancements loaded');
    };

    // Start initialization
    init();

})();