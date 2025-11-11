/* ============================================
   Service Worker Registration
   ============================================ */

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then((registration) => {
                console.log('✅ Service Worker registered successfully:', registration.scope);

                // Check for updates
                registration.addEventListener('updatefound', () => {
                    const newWorker = registration.installing;
                    console.log('🔄 Service Worker update found');

                    newWorker.addEventListener('statechange', () => {
                        if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                            // New service worker available
                            console.log('✨ New content available, please refresh');
                            
                            // Show update notification
                            showUpdateNotification();
                        }
                    });
                });

                // Check for updates every hour
                setInterval(() => {
                    registration.update();
                }, 3600000);
            })
            .catch((error) => {
                console.error('❌ Service Worker registration failed:', error);
            });

        // Handle controller change
        navigator.serviceWorker.addEventListener('controllerchange', () => {
            console.log('🔄 Service Worker controller changed');
            window.location.reload();
        });
    });
}

// Show update notification
function showUpdateNotification() {
    // Create notification element
    const notification = document.createElement('div');
    notification.id = 'sw-update-notification';
    notification.innerHTML = `
        <div style="
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: #722F37;
            color: #F5F5DC;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
            z-index: 10000;
            max-width: 350px;
            animation: slideIn 0.3s ease;
        ">
            <p style="margin: 0 0 15px 0; font-weight: 600;">
                🎉 New content available!
            </p>
            <p style="margin: 0 0 15px 0; font-size: 14px;">
                A new version of the site is available. Refresh to get the latest updates.
            </p>
            <button onclick="window.location.reload()" style="
                background: #F5F5DC;
                color: #722F37;
                border: none;
                padding: 10px 20px;
                border-radius: 4px;
                cursor: pointer;
                font-weight: 600;
                margin-right: 10px;
            ">
                Refresh Now
            </button>
            <button onclick="this.parentElement.parentElement.remove()" style="
                background: transparent;
                color: #F5F5DC;
                border: 1px solid #F5F5DC;
                padding: 10px 20px;
                border-radius: 4px;
                cursor: pointer;
                font-weight: 600;
            ">
                Later
            </button>
        </div>
    `;

    // Add animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);
    document.body.appendChild(notification);
}

// Online/Offline status monitoring
window.addEventListener('online', () => {
    console.log('🌐 Back online');
    
    // Show notification
    if (window.dataLayer) {
        window.dataLayer.push({
            'event': 'connection_status',
            'status': 'online'
        });
    }
});

window.addEventListener('offline', () => {
    console.log('📡 Connection lost');
    
    // Show notification
    if (window.dataLayer) {
        window.dataLayer.push({
            'event': 'connection_status',
            'status': 'offline'
        });
    }
    
    // Show offline notification
    const notification = document.createElement('div');
    notification.innerHTML = `
        <div style="
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: #ff9800;
            color: white;
            padding: 15px 30px;
            border-radius: 8px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
            z-index: 10000;
            font-weight: 600;
        ">
            📡 You're offline. Some features may be limited.
        </div>
    `;
    document.body.appendChild(notification);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.remove();
    }, 5000);
});