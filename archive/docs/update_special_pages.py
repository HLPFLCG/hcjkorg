#!/usr/bin/env python3
"""Update 404.html and offline.html"""

import re

STANDARD_NAV = '''    <nav class="navbar" id="navbar">
        <div class="navbar-container">
            <a href="index.html" class="navbar-brand">
                <picture>
        <source srcset="assets/images/logo/logo.webp" type="image/webp">
        <img src="assets/images/logo/logo.png" alt="HCJK Collection Logo" width="120" height="40" loading="lazy">
    </picture>
            </a>
            
            <button class="navbar-toggle" id="navbar-toggle" aria-label="Toggle navigation menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
            
            <ul class="navbar-menu" id="navbar-menu">
                <li class="navbar-item">
                    <a href="index.html" class="navbar-link">Home</a>
                </li>
                <li class="navbar-item">
                    <a href="portfolio.html" class="navbar-link">Portfolio</a>
                </li>
                <li class="navbar-item">
                    <a href="about.html" class="navbar-link">About</a>
                </li>
                <li class="navbar-item">
                    <!-- <a href="blog.html" class="navbar-link">Blog</a> -->
                </li>
                <li class="navbar-item">
                    <a href="booking.html" class="navbar-link">Booking</a>
                </li>
                <li class="navbar-item">
                    <a href="contact.html" class="navbar-link">Contact</a>
                </li>
            </ul>
        </div>
    </nav>'''

LOADING_SCREEN = '''    <!-- Loading Screen -->
    <div id="loading-screen" class="loading-screen">
        <img src="assets/images/logo/logo.png" alt="HCJK Collection" class="loading-logo">
        <div class="loading-spinner"></div>
        <p class="loading-text">Loading</p>
    </div>
    '''

LOADING_CSS = '    <link rel="stylesheet" href="assets/css/loading-screen.css">'
LOADING_JS = '    <script src="assets/js/loading-screen.js"></script>'

pages = ['404.html', 'offline.html']

for page in pages:
    try:
        with open(page, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Replace navigation if it exists
        if '<nav' in content:
            nav_pattern = r'<nav class="navbar"[^>]*>.*?</nav>'
            content = re.sub(nav_pattern, STANDARD_NAV, content, flags=re.DOTALL)
        
        # Add loading screen CSS if not present
        if 'loading-screen.css' not in content:
            content = content.replace('</head>', f'{LOADING_CSS}\n    </head>')
        
        # Add loading screen HTML if not present
        if 'loading-screen' not in content:
            body_pattern = r'(<body[^>]*>)'
            content = re.sub(body_pattern, r'\1\n' + LOADING_SCREEN, content)
        
        # Add loading screen JS if not present
        if 'loading-screen.js' not in content:
            content = content.replace('</body>', f'{LOADING_JS}\n</body>')
        
        with open(page, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f'✓ {page} updated')
    except Exception as e:
        print(f'✗ Error updating {page}: {e}')

print('\n✓ Special pages updated!')