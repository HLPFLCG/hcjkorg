/* ============================================
   HCJK Collection - Loading Screen JavaScript
   Handle loading screen display and hide
   ============================================ */

(function() {
    'use strict';
    
    // Add loading class to body
    document.body.classList.add('loading');
    
    // Hide loading screen when page is fully loaded
    window.addEventListener('load', function() {
        const loadingScreen = document.getElementById('loading-screen');
        
        if (loadingScreen) {
            // Small delay to ensure smooth transition
            setTimeout(function() {
                loadingScreen.classList.add('hidden');
                document.body.classList.remove('loading');
                
                // Remove loading screen from DOM after transition
                setTimeout(function() {
                    loadingScreen.remove();
                }, 500);
            }, 300);
        }
    });
    
    // Fallback: Hide loading screen after 5 seconds if load event doesn't fire
    setTimeout(function() {
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen && !loadingScreen.classList.contains('hidden')) {
            loadingScreen.classList.add('hidden');
            document.body.classList.remove('loading');
        }
    }, 5000);
})();