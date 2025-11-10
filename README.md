# HCJK Collection - Professional Photography Portfolio

A luxury, minimal, and sophisticated photography portfolio website showcasing wedding, portrait, landscape, and custom photography services.

![HCJK Collection](assets/images/logo/logo.svg)

## 🌟 Features

- **Responsive Design** - Beautiful on all devices (mobile, tablet, desktop)
- **SEO Optimized** - Built with search engine optimization best practices
- **Fast Loading** - Optimized images and efficient code
- **Accessible** - WCAG 2.1 AA compliant
- **Modern Stack** - HTML5, CSS3, Vanilla JavaScript
- **Easy to Maintain** - Clean, well-documented code

## 📸 Photography Services

- Wedding Photography
- Portrait Photography (Family, Children, Seniors)
- Landscape & Nature Photography
- Cityscape/Urban Photography
- Macro Photography
- Custom Photography Projects

## 🚀 Quick Start

### Prerequisites

- Git installed on your computer
- Visual Studio Code (or any code editor)
- Basic understanding of HTML/CSS

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/hcjk-photography.git
   cd hcjk-photography
   ```

2. **Open in VSCode**
   ```bash
   code .
   ```

3. **Install Live Server extension** (if not already installed)
   - Open VSCode Extensions (Ctrl+Shift+X)
   - Search for "Live Server"
   - Install by Ritwick Dey

4. **Launch the website**
   - Right-click on `index.html`
   - Select "Open with Live Server"
   - Your browser will open at `http://localhost:5500`

## 📁 Project Structure

```
hcjk-photography/
├── index.html              # Home page
├── portfolio.html          # Portfolio gallery
├── about.html             # About/Bio page
├── blog.html              # Travel blog
├── contact.html           # Contact page
├── booking.html           # Booking/Packages page
├── testimonials.html      # Client testimonials
├── faq.html               # FAQ page
├── privacy.html           # Privacy policy
├── terms.html             # Terms of service
│
├── assets/
│   ├── css/
│   │   ├── variables.css      # Design system variables
│   │   ├── typography.css     # Font styles
│   │   ├── main.css          # Core styles
│   │   ├── components.css    # UI components
│   │   └── responsive.css    # Media queries
│   │
│   ├── js/
│   │   ├── main.js           # Core JavaScript
│   │   ├── navigation.js     # Navigation functionality
│   │   ├── gallery.js        # Portfolio gallery
│   │   ├── lightbox.js       # Image lightbox
│   │   ├── instagram.js      # Instagram feed
│   │   └── analytics.js      # Analytics tracking
│   │
│   └── images/
│       ├── logo/             # Logo files
│       ├── hero/             # Hero images
│       ├── portfolio/        # Portfolio images
│       ├── about/            # About page images
│       └── blog/             # Blog images
│
├── docs/
│   ├── PROJECT_PLAN.md       # Complete project documentation
│   ├── SETUP_GUIDE.md        # Step-by-step setup instructions
│   └── DEPLOYMENT.md         # Deployment guide
│
├── robots.txt               # SEO - Search engine instructions
├── sitemap.xml              # SEO - Site structure
└── README.md                # This file
```

## 🎨 Customization

### Colors

Edit `assets/css/variables.css` to customize your brand colors:

```css
:root {
  --color-primary: #2C2C2C;        /* Main text color */
  --color-secondary: #8B7355;      /* Accent color */
  --color-accent: #D4AF87;         /* Highlight color */
  --color-background: #FAFAFA;     /* Background color */
}
```

### Typography

The site uses:
- **Cormorant Garamond** - Elegant serif for headings
- **Montserrat** - Clean sans-serif for body text
- **Allura** - Script font for special elements

### Images

Replace placeholder images with your photography:

1. Add images to appropriate folders in `assets/images/`
2. Update image paths in HTML files
3. Optimize images before uploading (recommended: under 500KB each)

## 📱 Pages Overview

### Home Page (index.html)
- Hero section with full-screen image
- Featured work gallery
- Services overview
- About preview
- Client testimonials
- Instagram feed
- Call-to-action sections

### Portfolio Page (portfolio.html)
- Category filtering
- Masonry grid layout
- Lightbox image viewer
- Image metadata

### About Page (about.html)
- Professional bio
- Photography philosophy
- Career timeline
- Behind-the-scenes

### Blog Page (blog.html)
- Travel stories
- Photography tips
- Recent posts
- Category filtering

### Contact Page (contact.html)
- Contact form
- Business information
- Social media links
- FAQ section

### Booking Page (booking.html)
- Photography packages
- Pricing information
- Booking calendar
- Payment integration

## 🔧 Development

### Local Development

```bash
# Start local server (using Live Server in VSCode)
# Right-click index.html → Open with Live Server

# Or use Python's built-in server
python -m http.server 8000

# Or use Node.js http-server
npx http-server
```

### Making Changes

1. Edit HTML/CSS/JS files
2. Save changes (Live Server auto-refreshes)
3. Test in multiple browsers
4. Commit changes to Git

```bash
git add .
git commit -m "Description of changes"
git push origin main
```

## 🌐 Deployment

### Option 1: Netlify (Recommended)

1. Push code to GitHub
2. Connect repository to Netlify
3. Deploy automatically on push
4. Configure custom domain

**Deploy Now:**
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

### Option 2: Vercel

1. Push code to GitHub
2. Import repository to Vercel
3. Deploy automatically
4. Configure custom domain

### Option 3: GitHub Pages

1. Go to repository Settings → Pages
2. Select branch: main
3. Save and deploy
4. Access at: `https://yourusername.github.io/hcjk-photography`

## 📊 SEO & Analytics

### Google Analytics Setup

1. Create Google Analytics account
2. Get tracking ID
3. Update tracking ID in all HTML files:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   ```

### Search Console

1. Verify ownership in Google Search Console
2. Submit sitemap: `https://www.hcjk.org/sitemap.xml`
3. Monitor performance and fix issues

## 🔐 Security

- No sensitive data in repository
- Use environment variables for API keys
- HTTPS enabled (automatic with Netlify/Vercel)
- Regular security updates

## 📈 Performance

- Optimized images (WebP with fallbacks)
- Lazy loading for images
- Minified CSS/JS (in production)
- CDN delivery
- Browser caching

**Target Metrics:**
- PageSpeed Score: 90+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s

## 🤝 Contributing

This is a personal portfolio project, but suggestions are welcome!

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

Copyright © 2024 HCJK Collection. All rights reserved.

## 📞 Support

For questions or issues:
- Email: contact@hcjk.org
- Instagram: [@hcjkcollection](https://instagram.com/hcjkcollection)
- Website: [www.hcjk.org](https://www.hcjk.org)

## 🙏 Acknowledgments

- Design inspiration from luxury photography websites
- Icons from Font Awesome
- Fonts from Google Fonts
- Stock images from Unsplash (for placeholders)

## 📚 Documentation

For detailed documentation, see:
- [PROJECT_PLAN.md](docs/PROJECT_PLAN.md) - Complete project specifications
- [SETUP_GUIDE.md](docs/SETUP_GUIDE.md) - Step-by-step setup instructions
- [DEPLOYMENT.md](docs/DEPLOYMENT.md) - Deployment guide

## 🗺️ Roadmap

### Phase 1: Core Website ✅
- [x] Design system and components
- [x] Home page
- [x] Portfolio page
- [x] About page
- [x] Blog page
- [x] Contact page

### Phase 2: Enhanced Features 🚧
- [ ] Client portal for photo delivery
- [ ] Online booking system
- [ ] Payment integration (Stripe)
- [ ] Instagram API integration
- [ ] Blog CMS integration

### Phase 3: Advanced Features 📋
- [ ] Before/After image slider
- [ ] Video portfolio section
- [ ] Newsletter integration
- [ ] Multi-language support
- [ ] Advanced analytics

## 💡 Tips for Success

1. **Regular Updates** - Add new photos weekly
2. **SEO Optimization** - Use descriptive alt text for all images
3. **Social Media** - Share your work on Instagram, Pinterest
4. **Client Testimonials** - Request reviews after each session
5. **Blog Consistently** - Post travel stories and photography tips
6. **Monitor Analytics** - Track what content performs best
7. **Backup Regularly** - Git serves as your backup system

---

**Built with ❤️ for timeless photography**

*Last Updated: 2024*