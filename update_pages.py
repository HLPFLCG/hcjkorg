#!/usr/bin/env python3
"""
Update all HTML pages with:
1. Standardized navigation from index.html
2. Updated favicon to match logo
3. Loading screen
"""

import re
import os

# Standard navigation HTML (from index.html)
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

# Loading screen HTML
LOADING_SCREEN = '''    <!-- Loading Screen -->
    <div id="loading-screen" class="loading-screen">
        <img src="assets/images/logo/logo.png" alt="HCJK Collection" class="loading-logo">
        <div class="loading-spinner"></div>
        <p class="loading-text">Loading</p>
    </div>
    '''

# Favicon links (updated to use logo)
FAVICON_LINKS = '''    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="assets/images/logo/favicon.ico">
    <link rel="icon" type="image/png" sizes="16x16" href="assets/images/logo/favicon-16x16.png">
    <link rel="icon" type="image/png" sizes="32x32" href="assets/images/logo/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="48x48" href="assets/images/logo/favicon-48x48.png">
    <link rel="apple-touch-icon" sizes="180x180" href="assets/images/logo/apple-touch-icon.png">
    <link rel="manifest" href="site.webmanifest">'''

# Loading screen CSS link
LOADING_CSS = '    <link rel="stylesheet" href="assets/css/loading-screen.css">'

# Loading screen JS
LOADING_JS = '    <script src="assets/js/loading-screen.js"></script>'

def update_page(filename):
    """Update a single HTML page"""
    print(f"Updating {filename}...")
    
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 1. Replace navigation
    # Find and replace the entire nav section
    nav_pattern = r'<nav class="navbar"[^>]*>.*?</nav>'
    content = re.sub(nav_pattern, STANDARD_NAV, content, flags=re.DOTALL)
    
    # 2. Update active link based on current page
    page_name = os.path.basename(filename)
    if page_name == 'index.html':
        content = content.replace('<a href="index.html" class="navbar-link">Home</a>',
                                 '<a href="index.html" class="navbar-link active">Home</a>')
    elif page_name == 'portfolio.html':
        content = content.replace('<a href="portfolio.html" class="navbar-link">Portfolio</a>',
                                 '<a href="portfolio.html" class="navbar-link active">Portfolio</a>')
    elif page_name == 'about.html':
        content = content.replace('<a href="about.html" class="navbar-link">About</a>',
                                 '<a href="about.html" class="navbar-link active">About</a>')
    elif page_name == 'booking.html':
        content = content.replace('<a href="booking.html" class="navbar-link">Booking</a>',
                                 '<a href="booking.html" class="navbar-link active">Booking</a>')
    elif page_name == 'contact.html':
        content = content.replace('<a href="contact.html" class="navbar-link">Contact</a>',
                                 '<a href="contact.html" class="navbar-link active">Contact</a>')
    
    # 3. Update/add favicon links
    # Remove existing favicon section
    favicon_pattern = r'<!-- Favicon -->.*?<link rel="manifest"[^>]*>'
    content = re.sub(favicon_pattern, FAVICON_LINKS, content, flags=re.DOTALL)
    
    # 4. Add loading screen CSS if not present
    if 'loading-screen.css' not in content:
        # Add before </head>
        content = content.replace('</head>', f'{LOADING_CSS}\n    </head>')
    
    # 5. Add loading screen HTML if not present
    if 'loading-screen' not in content:
        # Add right after <body> tag
        body_pattern = r'(<body[^>]*>)'
        content = re.sub(body_pattern, r'\1\n' + LOADING_SCREEN, content)
    
    # 6. Add loading screen JS if not present
    if 'loading-screen.js' not in content:
        # Add before </body>
        content = content.replace('</body>', f'{LOADING_JS}\n</body>')
    
    # Write updated content
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"✓ {filename} updated successfully")

def main():
    """Update all HTML pages"""
    pages = [
        'index.html',
        'about.html',
        'portfolio.html',
        'booking.html',
        'contact.html',
        'blog.html',
        'terms.html',
        'privacy.html',
        'thank-you.html'
    ]
    
    for page in pages:
        if os.path.exists(page):
            try:
                update_page(page)
            except Exception as e:
                print(f"✗ Error updating {page}: {e}")
        else:
            print(f"⊘ {page} not found, skipping")
    
    print("\n✓ All pages updated successfully!")

if __name__ == '__main__':
    main()