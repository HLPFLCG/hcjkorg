/* ============================================
   HCJK Collection - Analytics JavaScript
   Google Analytics Event Tracking
   ============================================ */

// Wait for Google Analytics to load
window.addEventListener('load', function() {
    
    // Initialize analytics tracking
    initAnalyticsTracking();
    
});

/* ==================== ANALYTICS TRACKING ==================== */
function initAnalyticsTracking() {
    // Check if gtag is available
    if (typeof gtag === 'undefined') {
        console.log('Google Analytics not loaded');
        return;
    }
    
    // Track outbound links
    trackOutboundLinks();
    
    // Track downloads
    trackDownloads();
    
    // Track social media clicks
    trackSocialClicks();
    
    // Track form submissions
    trackFormSubmissions();
    
    // Track button clicks
    trackButtonClicks();
    
    // Track scroll depth
    trackScrollDepth();
}

/* ==================== OUTBOUND LINK TRACKING ==================== */
function trackOutboundLinks() {
    document.querySelectorAll('a[href^="http"]').forEach(link => {
        // Skip links to own domain
        if (link.hostname === window.location.hostname) return;
        
        link.addEventListener('click', function(e) {
            const url = this.href;
            
            gtag('event', 'click', {
                'event_category': 'Outbound Link',
                'event_label': url,
                'transport_type': 'beacon'
            });
        });
    });
}

/* ==================== DOWNLOAD TRACKING ==================== */
function trackDownloads() {
    const downloadExtensions = ['.pdf', '.zip', '.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx'];
    
    document.querySelectorAll('a').forEach(link => {
        const href = link.getAttribute('href');
        if (!href) return;
        
        const isDownload = downloadExtensions.some(ext => href.toLowerCase().endsWith(ext));
        
        if (isDownload) {
            link.addEventListener('click', function(e) {
                gtag('event', 'download', {
                    'event_category': 'File Download',
                    'event_label': href,
                    'transport_type': 'beacon'
                });
            });
        }
    });
}

/* ==================== SOCIAL MEDIA TRACKING ==================== */
function trackSocialClicks() {
    const socialPlatforms = {
        'instagram.com': 'Instagram',
        'facebook.com': 'Facebook',
        'twitter.com': 'Twitter',
        'pinterest.com': 'Pinterest',
        'linkedin.com': 'LinkedIn',
        'youtube.com': 'YouTube'
    };
    
    document.querySelectorAll('a[href*="instagram.com"], a[href*="facebook.com"], a[href*="twitter.com"], a[href*="pinterest.com"], a[href*="linkedin.com"], a[href*="youtube.com"]').forEach(link => {
        link.addEventListener('click', function(e) {
            const url = this.href;
            let platform = 'Unknown';
            
            for (const [domain, name] of Object.entries(socialPlatforms)) {
                if (url.includes(domain)) {
                    platform = name;
                    break;
                }
            }
            
            gtag('event', 'social_click', {
                'event_category': 'Social Media',
                'event_label': platform,
                'transport_type': 'beacon'
            });
        });
    });
}

/* ==================== FORM SUBMISSION TRACKING ==================== */
function trackFormSubmissions() {
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', function(e) {
            const formName = this.getAttribute('name') || this.getAttribute('id') || 'Unknown Form';
            
            gtag('event', 'form_submission', {
                'event_category': 'Form',
                'event_label': formName
            });
        });
    });
}

/* ==================== BUTTON CLICK TRACKING ==================== */
function trackButtonClicks() {
    // Track CTA buttons
    document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
        button.addEventListener('click', function(e) {
            const buttonText = this.textContent.trim();
            const buttonClass = this.className;
            
            gtag('event', 'button_click', {
                'event_category': 'CTA Button',
                'event_label': buttonText,
                'button_class': buttonClass
            });
        });
    });
    
    // Track booking buttons specifically
    document.querySelectorAll('a[href*="booking"], button[href*="booking"]').forEach(button => {
        button.addEventListener('click', function(e) {
            gtag('event', 'booking_intent', {
                'event_category': 'Conversion',
                'event_label': 'Booking Button Click'
            });
        });
    });
    
    // Track contact buttons specifically
    document.querySelectorAll('a[href*="contact"], button[href*="contact"]').forEach(button => {
        button.addEventListener('click', function(e) {
            gtag('event', 'contact_intent', {
                'event_category': 'Conversion',
                'event_label': 'Contact Button Click'
            });
        });
    });
}

/* ==================== SCROLL DEPTH TRACKING ==================== */
function trackScrollDepth() {
    const scrollDepths = [25, 50, 75, 100];
    const trackedDepths = new Set();
    
    window.addEventListener('scroll', throttle(function() {
        const scrollPercentage = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight * 100;
        
        scrollDepths.forEach(depth => {
            if (scrollPercentage >= depth && !trackedDepths.has(depth)) {
                trackedDepths.add(depth);
                
                gtag('event', 'scroll_depth', {
                    'event_category': 'Engagement',
                    'event_label': `${depth}%`,
                    'value': depth
                });
            }
        });
    }, 500));
}

/* ==================== PAGE TIMING TRACKING ==================== */
function trackPageTiming() {
    window.addEventListener('load', function() {
        // Get page load time
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        
        gtag('event', 'timing_complete', {
            'name': 'page_load',
            'value': pageLoadTime,
            'event_category': 'Performance'
        });
    });
}

/* ==================== VIDEO TRACKING (Optional) ==================== */
function trackVideoPlays() {
    document.querySelectorAll('video').forEach(video => {
        let tracked25 = false;
        let tracked50 = false;
        let tracked75 = false;
        let tracked100 = false;
        
        video.addEventListener('play', function() {
            gtag('event', 'video_play', {
                'event_category': 'Video',
                'event_label': this.src || 'Unknown Video'
            });
        });
        
        video.addEventListener('timeupdate', function() {
            const percentage = (this.currentTime / this.duration) * 100;
            
            if (percentage >= 25 && !tracked25) {
                tracked25 = true;
                gtag('event', 'video_progress', {
                    'event_category': 'Video',
                    'event_label': '25%',
                    'value': 25
                });
            }
            
            if (percentage >= 50 && !tracked50) {
                tracked50 = true;
                gtag('event', 'video_progress', {
                    'event_category': 'Video',
                    'event_label': '50%',
                    'value': 50
                });
            }
            
            if (percentage >= 75 && !tracked75) {
                tracked75 = true;
                gtag('event', 'video_progress', {
                    'event_category': 'Video',
                    'event_label': '75%',
                    'value': 75
                });
            }
        });
        
        video.addEventListener('ended', function() {
            if (!tracked100) {
                tracked100 = true;
                gtag('event', 'video_complete', {
                    'event_category': 'Video',
                    'event_label': this.src || 'Unknown Video'
                });
            }
        });
    });
}

/* ==================== UTILITY FUNCTIONS ==================== */
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/* ==================== CUSTOM EVENT TRACKING ==================== */
// Function to track custom events from anywhere in the site
window.trackEvent = function(category, action, label, value) {
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            'event_category': category,
            'event_label': label,
            'value': value
        });
    }
};

// Function to track page views (for single-page apps)
window.trackPageView = function(path, title) {
    if (typeof gtag !== 'undefined') {
        gtag('config', 'G-XXXXXXXXXX', {
            'page_path': path,
            'page_title': title
        });
    }
};

/* ==================== EXPORT FUNCTIONS ==================== */
window.AnalyticsUtils = {
    trackEvent: window.trackEvent,
    trackPageView: window.trackPageView,
    trackVideoPlays,
    trackPageTiming
};

// Initialize page timing tracking
trackPageTiming();