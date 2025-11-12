#!/usr/bin/env python3
"""
Update all HTML files to use the new consolidated CSS file
"""

import os
import re

# HTML files to update
html_files = [
    'index.html',
    'about.html',
    'portfolio.html',
    'booking.html',
    'contact.html',
    'blog.html',
    'terms.html',
    'privacy.html',
    'thank-you.html',
    '404.html',
    'offline.html',
    'faq.html',
    'testimonials.html'
]

# Old CSS files to remove
old_css_links = [
    'assets/css/variables.css',
    'assets/css/typography.css',
    'assets/css/main.css',
    'assets/css/components.css',
    'assets/css/responsive.css',
    'assets/css/color-palette.css',
    'assets/css/enhancements.css',
    'assets/css/final-fixes.css'
]

# New CSS to add
new_css = '    <link rel="stylesheet" href="assets/css/styles.css">'

def update_html_file(filepath):
    """Update a single HTML file"""
    print(f"Processing {filepath}...")
    
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove old CSS link tags
        for old_css in old_css_links:
            pattern = f'\\s*<link rel="stylesheet" href="{old_css}">'
            content = re.sub(pattern, '', content)
        
        # Remove instagram.js reference (doesn't exist)
        content = re.sub(r'\s*<script src="assets/js/instagram\.js"></script>', '', content)
        
        # Find the loading-screen.css line and add new CSS after it
        loading_screen_pattern = r'(<link rel="stylesheet" href="assets/css/loading-screen\.css">)'
        if re.search(loading_screen_pattern, content):
            content = re.sub(
                loading_screen_pattern,
                f'\\1\n{new_css}',
                content
            )
        else:
            # If loading-screen.css not found, add before </head>
            content = re.sub(
                r'(\s*</head>)',
                f'\n{new_css}\n\\1',
                content
            )
        
        # Write updated content
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"✓ Updated {filepath}")
        return True
        
    except Exception as e:
        print(f"✗ Error updating {filepath}: {e}")
        return False

def main():
    """Main function"""
    print("=" * 60)
    print("Updating HTML files with consolidated CSS")
    print("=" * 60)
    
    updated = 0
    failed = 0
    
    for html_file in html_files:
        if os.path.exists(html_file):
            if update_html_file(html_file):
                updated += 1
            else:
                failed += 1
        else:
            print(f"⚠ File not found: {html_file}")
    
    print("\n" + "=" * 60)
    print(f"Summary: {updated} files updated, {failed} failed")
    print("=" * 60)

if __name__ == '__main__':
    main()