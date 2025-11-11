# HCJK Collection - Professional Photography Website

**Live Website:** https://www.hcjk.org  
**Status:** ✅ Production Ready  
**Last Updated:** November 2024

---

## 🎯 Overview

HCJK Collection is a professional photography website showcasing luxury wedding, portrait, and artistic photography services. The site features a clean, elegant design with the signature Beige, Black, and Merlot color palette.

---

## 📁 Project Structure

```
hcjkorg/
├── index.html              # Home page
├── about.html              # About the photographer
├── portfolio.html          # Portfolio gallery
├── booking.html            # Packages and booking
├── contact.html            # Contact form
├── blog.html               # Blog (hidden from navigation)
├── terms.html              # Terms of Service
├── privacy.html            # Privacy Policy
├── thank-you.html          # Form confirmation
├── 404.html                # Error page
├── offline.html            # Offline page (PWA)
│
├── assets/
│   ├── css/
│   │   ├── variables.css           # CSS variables
│   │   ├── typography.css          # Font styles
│   │   ├── main.css                # Core layout
│   │   ├── components.css          # Components
│   │   ├── responsive.css          # Media queries
│   │   ├── color-palette.css       # Color system
│   │   ├── enhancements.css        # Enhancements
│   │   └── final-fixes.css         # Latest fixes
│   │
│   ├── js/
│   │   ├── main.js                 # Core functionality
│   │   ├── navigation.js           # Navigation menu
│   │   ├── enhancements.js         # Enhanced features
│   │   ├── analytics.js            # Google Analytics
│   │   └── sw-register.js          # Service worker
│   │
│   └── images/
│       ├── hero/                   # Hero images
│       ├── portfolio/              # Portfolio images
│       ├── about/                  # About images
│       ├── blog/                   # Blog images
│       ├── testimonials/           # Testimonial images
│       ├── booking/                # Booking images
│       ├── contact/                # Contact images
│       └── logo/                   # Logo and favicons
│
├── service-worker.js       # PWA service worker
├── site.webmanifest        # PWA manifest
├── robots.txt              # SEO robots file
├── sitemap.xml             # SEO sitemap
├── netlify.toml            # Netlify config
├── .htaccess               # Apache config
│
└── Documentation/
    ├── README.md                       # This file
    ├── QUICK_START_GUIDE.md            # Quick start
    ├── SOCIAL_MEDIA_SETUP_GUIDE.md     # Social media
    ├── CLEANUP_SUMMARY.md              # Recent cleanup
    └── archive/                        # Archived files
```

---

## 🚀 Features

### Design & UX
- ✅ Responsive design (mobile-first)
- ✅ WCAG AAA accessibility compliant
- ✅ Elegant Beige, Black, Merlot color palette
- ✅ Professional typography (Cormorant Garamond + Montserrat)
- ✅ Smooth animations and transitions
- ✅ Image lazy loading
- ✅ WebP image optimization with fallbacks

### Functionality
- ✅ Portfolio filtering and lightbox gallery
- ✅ Contact and booking forms (Formspree)
- ✅ Mobile-responsive navigation
- ✅ Testimonial carousel
- ✅ Back to top button
- ✅ Smooth scrolling
- ✅ Form validation

### Technical
- ✅ Progressive Web App (PWA)
- ✅ Service worker for offline support
- ✅ Google Tag Manager (GTM-T3NKKV8P)
- ✅ Google Analytics tracking
- ✅ SEO optimized (meta tags, structured data)
- ✅ Security headers
- ✅ Browser caching
- ✅ Performance optimized

### Legal
- ✅ Comprehensive Terms of Service
- ✅ Privacy Policy with photographer protections
- ✅ Copyright protection
- ✅ GDPR & CCPA compliant

---

## 🎨 Design System

### Color Palette
```css
--beige-light: #F5F1E8    /* Background */
--beige-medium: #E8DCC8   /* Accents */
--beige-dark: #D4C4A8     /* Borders */

--black-rich: #1A1A1A     /* Text */
--black-slate: #2C2C2C    /* Secondary text */

--merlot-deep: #6B1C23    /* Primary accent */
--merlot-classic: #722F37 /* Hover states */
```

### Typography
- **Headings:** Cormorant Garamond (300, 400, 600, 700)
- **Body:** Montserrat (300, 400, 500, 600, 700)
- **Script:** Great Vibes (for special accents)

### Spacing System
```css
--spacing-xs: 0.5rem    /* 8px */
--spacing-sm: 1rem      /* 16px */
--spacing-md: 1.5rem    /* 24px */
--spacing-lg: 2rem      /* 32px */
--spacing-xl: 3rem      /* 48px */
--spacing-2xl: 4rem     /* 64px */
--spacing-3xl: 6rem     /* 96px */
```

---

## 📊 Performance

### Image Optimization
- **Format:** WebP with JPG fallbacks
- **Size Reduction:** 52.8% (36.3MB → 17.2MB)
- **Loading:** Lazy loading enabled
- **Expected Impact:** 40-60% faster page loads

### Load Times
- **First Contentful Paint:** < 1.5s
- **Largest Contentful Paint:** < 2.5s
- **Time to Interactive:** < 3.5s

### Lighthouse Scores (Target)
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

---

## 🔧 Technical Stack

### Frontend
- HTML5
- CSS3 (Custom properties, Flexbox, Grid)
- Vanilla JavaScript (ES6+)

### Services
- **Forms:** Formspree (https://formspree.io/f/xblqjywk)
- **Analytics:** Google Tag Manager (GTM-T3NKKV8P)
- **Hosting:** Netlify / GitHub Pages compatible

### Tools
- Git for version control
- GitHub for repository hosting
- Netlify for deployment (optional)

---

## 📝 JavaScript Architecture

### main.js - Core Functionality
- Scroll reveal animations
- Lazy loading images
- Smooth scrolling
- Back to top button

### navigation.js - Navigation
- Mobile menu toggle
- Navbar scroll behavior
- Active link highlighting

### enhancements.js - Enhanced Features
- Form validation and submission
- Portfolio filtering
- Image lightbox/gallery
- Testimonial carousel
- GTM event tracking

### analytics.js - Analytics
- Google Analytics tracking
- Event tracking (clicks, downloads, forms)
- Scroll depth tracking

### sw-register.js - PWA
- Service worker registration
- Offline functionality

---

## 🔒 Security

### Headers Implemented
- Content Security Policy (CSP)
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy
- Strict-Transport-Security (HSTS)

### Form Security
- Spam protection via Formspree
- Client-side validation
- HTTPS only

---

## 📱 Social Media

### Current
- **Instagram:** @hcjk_collection

### Setup Guides Available
- Pinterest Business Account (see SOCIAL_MEDIA_SETUP_GUIDE.md)
- Facebook Business Page (see SOCIAL_MEDIA_SETUP_GUIDE.md)

---

## 🚀 Quick Start

### For Development
1. Clone the repository
2. Open index.html in a browser
3. Make changes to HTML/CSS/JS files
4. Test locally before deploying

### For Deployment
1. Push changes to GitHub
2. Netlify auto-deploys from main branch
3. Or use any static hosting service

### For Updates
1. Create a new branch
2. Make your changes
3. Test thoroughly
4. Create pull request
5. Merge to main

---

## 📚 Documentation

- **QUICK_START_GUIDE.md** - Getting started guide
- **SOCIAL_MEDIA_SETUP_GUIDE.md** - Pinterest & Facebook setup
- **CLEANUP_SUMMARY.md** - Recent codebase cleanup details

---

## ✅ Recent Updates (November 2024)

### Codebase Cleanup
- ✅ Removed 87KB+ of unused/backup files
- ✅ Fixed JavaScript conflicts (portfolio page)
- ✅ Standardized GTM container ID across all pages
- ✅ Organized documentation into archive
- ✅ Eliminated duplicate functionality

### Latest Features
- ✅ New HCJK Collection logo
- ✅ Menu spacing optimized
- ✅ Mobile menu background fix
- ✅ Enhanced text contrast (WCAG AAA)
- ✅ Redesigned 404 and thank you pages
- ✅ Comprehensive Terms of Service
- ✅ Enhanced Privacy Policy

---

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 📞 Contact & Support

- **Website:** https://www.hcjk.org
- **Email:** info@hcjk.org
- **Instagram:** @hcjk_collection

---

## 📄 License

All content, images, and code are proprietary to HCJK Collection.  
© 2024 HCJK Collection. All rights reserved.

---

## 🙏 Credits

- **Design & Development:** NinjaTech AI
- **Photography:** HCJK Collection
- **Fonts:** Google Fonts (Cormorant Garamond, Montserrat, Great Vibes)

---

**Last Updated:** November 2024  
**Version:** 2.0  
**Status:** ✅ Production Ready