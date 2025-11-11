# HCJK Collection - Complete Setup Guide
## Step-by-Step Instructions for VSCode and GitHub

---

## 📋 TABLE OF CONTENTS
1. [Prerequisites](#prerequisites)
2. [Installing Required Software](#installing-required-software)
3. [Setting Up GitHub](#setting-up-github)
4. [Creating Your Repository](#creating-your-repository)
5. [Setting Up VSCode](#setting-up-vscode)
6. [Cloning and Initial Setup](#cloning-and-initial-setup)
7. [Project Structure Setup](#project-structure-setup)
8. [Adding Your Content](#adding-your-content)
9. [Testing Locally](#testing-locally)
10. [Deploying Your Website](#deploying-your-website)
11. [Ongoing Maintenance](#ongoing-maintenance)

---

## 1. PREREQUISITES

Before starting, ensure you have:
- A computer with Windows, macOS, or Linux
- Internet connection
- Basic understanding of file management
- Your photography content ready (images, text, bio)

---

## 2. INSTALLING REQUIRED SOFTWARE

### 2.1 Install Git

**Windows:**
1. Download Git from: https://git-scm.com/download/win
2. Run the installer
3. Use default settings (recommended)
4. Verify installation:
   - Open Command Prompt
   - Type: `git --version`
   - You should see the version number

**macOS:**
1. Open Terminal
2. Type: `git --version`
3. If not installed, macOS will prompt you to install Command Line Tools
4. Follow the prompts to install

**Linux (Ubuntu/Debian):**
```bash
sudo apt-get update
sudo apt-get install git
```

### 2.2 Install Visual Studio Code

1. Download VSCode from: https://code.visualstudio.com/
2. Run the installer
3. Follow installation prompts
4. Launch VSCode

### 2.3 Install VSCode Extensions

Open VSCode and install these extensions:

1. **Live Server** (by Ritwick Dey)
   - Click Extensions icon (left sidebar)
   - Search "Live Server"
   - Click Install

2. **Prettier - Code formatter** (by Prettier)
   - Search "Prettier"
   - Click Install

3. **HTML CSS Support** (by ecmel)
   - Search "HTML CSS Support"
   - Click Install

4. **Auto Rename Tag** (by Jun Han)
   - Search "Auto Rename Tag"
   - Click Install

5. **GitLens** (by GitKraken)
   - Search "GitLens"
   - Click Install

---

## 3. SETTING UP GITHUB

### 3.1 Create GitHub Account

1. Go to: https://github.com
2. Click "Sign up"
3. Follow the registration process
4. Verify your email address

### 3.2 Configure Git

Open Terminal (macOS/Linux) or Command Prompt (Windows):

```bash
# Set your name
git config --global user.name "Your Name"

# Set your email (use your GitHub email)
git config --global user.email "your.email@example.com"

# Verify configuration
git config --list
```

### 3.3 Set Up SSH Key (Recommended)

**Generate SSH Key:**
```bash
ssh-keygen -t ed25519 -C "your.email@example.com"
```

Press Enter to accept default location, then set a passphrase (optional).

**Add SSH Key to GitHub:**
1. Copy your public key:
   ```bash
   # macOS
   cat ~/.ssh/id_ed25519.pub | pbcopy
   
   # Windows (Git Bash)
   cat ~/.ssh/id_ed25519.pub | clip
   
   # Linux
   cat ~/.ssh/id_ed25519.pub
   ```

2. Go to GitHub.com → Settings → SSH and GPG keys
3. Click "New SSH key"
4. Paste your key and save

---

## 4. CREATING YOUR REPOSITORY

### 4.1 Create Repository on GitHub

1. Log in to GitHub
2. Click the "+" icon (top right) → "New repository"
3. Repository settings:
   - **Name:** `hcjk-photography` (or your preferred name)
   - **Description:** "Professional photography portfolio website"
   - **Visibility:** Public (or Private if you prefer)
   - **Initialize:** ✓ Add a README file
   - **Add .gitignore:** None (we'll create our own)
   - **License:** MIT License (optional)
4. Click "Create repository"

### 4.2 Note Your Repository URL

After creation, you'll see your repository URL:
- HTTPS: `https://github.com/yourusername/hcjk-photography.git`
- SSH: `git@github.com:yourusername/hcjk-photography.git`

---

## 5. SETTING UP VSCODE

### 5.1 Configure VSCode Settings

1. Open VSCode
2. Go to: File → Preferences → Settings (or Code → Preferences → Settings on macOS)
3. Search for "format on save" and enable it
4. Search for "auto save" and set to "onFocusChange"

### 5.2 Create Workspace Settings

We'll create project-specific settings after cloning the repository.

---

## 6. CLONING AND INITIAL SETUP

### 6.1 Clone Repository

1. Open VSCode
2. Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (macOS)
3. Type "Git: Clone" and select it
4. Paste your repository URL
5. Choose a location on your computer
6. Click "Open" when prompted

**Alternative (Terminal):**
```bash
# Navigate to your projects folder
cd ~/Documents/Projects

# Clone the repository
git clone git@github.com:yourusername/hcjk-photography.git

# Open in VSCode
cd hcjk-photography
code .
```

### 6.2 Create .gitignore File

Create a file named `.gitignore` in the root directory:

```
# OS Files
.DS_Store
Thumbs.db
desktop.ini

# Editor Files
.vscode/
.idea/
*.swp
*.swo
*~

# Dependencies
node_modules/
vendor/

# Environment Variables
.env
.env.local
.env.*.local

# Build Files
dist/
build/
*.log

# Temporary Files
tmp/
temp/
*.tmp

# Large Files (add specific patterns)
*.psd
*.ai
*.sketch
```

---

## 7. PROJECT STRUCTURE SETUP

### 7.1 Create Directory Structure

In VSCode Terminal (View → Terminal):

```bash
# Create main directories
mkdir -p assets/css assets/js assets/images assets/fonts assets/icons
mkdir -p assets/images/logo assets/images/hero assets/images/portfolio
mkdir -p assets/images/about assets/images/blog
mkdir -p data docs

# Create subdirectories for portfolio
mkdir -p assets/images/portfolio/weddings
mkdir -p assets/images/portfolio/landscapes
mkdir -p assets/images/portfolio/portraits
mkdir -p assets/images/portfolio/cityscapes
mkdir -p assets/images/portfolio/macro
mkdir -p assets/images/portfolio/custom
```

### 7.2 Copy Provided Files

Copy all the files I've created for you into your project:

**CSS Files** (into `assets/css/`):
- variables.css
- typography.css
- main.css
- components.css
- responsive.css

**JavaScript Files** (into `assets/js/`):
- main.js
- navigation.js
- (You'll create gallery.js, lightbox.js, instagram.js, analytics.js later)

**HTML Files** (into root directory):
- index.html
- (You'll create other pages: portfolio.html, about.html, blog.html, contact.html, booking.html)

**Documentation** (into `docs/`):
- PROJECT_PLAN.md
- SETUP_GUIDE.md (this file)

### 7.3 Create Additional Required Files

**robots.txt** (root directory):
```
User-agent: *
Allow: /

Sitemap: https://www.hcjk.org/sitemap.xml
```

**sitemap.xml** (root directory):
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.hcjk.org/</loc>
    <lastmod>2024-01-01</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.hcjk.org/portfolio.html</loc>
    <lastmod>2024-01-01</lastmod>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.hcjk.org/about.html</loc>
    <lastmod>2024-01-01</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.hcjk.org/blog.html</loc>
    <lastmod>2024-01-01</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.hcjk.org/contact.html</loc>
    <lastmod>2024-01-01</lastmod>
    <priority>0.7</priority>
  </url>
</urlset>
```

---

## 8. ADDING YOUR CONTENT

### 8.1 Add Your Logo

1. Create your logo in SVG format (recommended) or PNG
2. Save as:
   - `assets/images/logo/logo.svg` (or .png)
   - `assets/images/logo/logo-white.svg` (white version for dark backgrounds)
   - `assets/images/logo/favicon.png` (32x32px or 64x64px)

### 8.2 Add Photography Images

**Image Optimization Tips:**
- Use JPEG for photographs
- Optimize images before uploading (use tools like TinyPNG, ImageOptim)
- Recommended sizes:
  - Hero images: 1920x1080px
  - Portfolio images: 1200x800px
  - Thumbnails: 600x400px
- Keep file sizes under 500KB per image

**Organize by Category:**
```
assets/images/portfolio/
├── weddings/
│   ├── wedding-001.jpg
│   ├── wedding-002.jpg
│   └── ...
├── landscapes/
│   ├── landscape-001.jpg
│   └── ...
├── portraits/
│   ├── portrait-001.jpg
│   └── ...
└── ...
```

### 8.3 Update HTML Content

1. Open `index.html` in VSCode
2. Replace placeholder text with your content:
   - Update meta descriptions
   - Change contact information
   - Update social media links
   - Replace placeholder images with your images

3. Update image paths:
   ```html
   <!-- Change from: -->
   <img src="https://images.unsplash.com/..." alt="...">
   
   <!-- To: -->
   <img src="assets/images/portfolio/weddings/wedding-001.jpg" alt="...">
   ```

### 8.4 Customize Colors and Fonts

Edit `assets/css/variables.css`:

```css
/* Adjust colors to match your brand */
:root {
  --color-primary: #2C2C2C;        /* Your primary color */
  --color-secondary: #8B7355;      /* Your secondary color */
  --color-accent: #D4AF87;         /* Your accent color */
  /* ... */
}
```

---

## 9. TESTING LOCALLY

### 9.1 Using Live Server

1. Open `index.html` in VSCode
2. Right-click in the editor
3. Select "Open with Live Server"
4. Your browser will open at `http://localhost:5500`

**Benefits:**
- Auto-refresh on file changes
- See changes instantly
- Test on different devices (use your local IP)

### 9.2 Testing Checklist

- [ ] All pages load correctly
- [ ] Navigation works on all pages
- [ ] Images display properly
- [ ] Links work correctly
- [ ] Forms function (if applicable)
- [ ] Mobile responsive design works
- [ ] No console errors (F12 → Console)

### 9.3 Cross-Browser Testing

Test your site in:
- Chrome
- Firefox
- Safari (if on macOS)
- Edge

### 9.4 Mobile Testing

**Using Browser DevTools:**
1. Press F12 to open DevTools
2. Click device toolbar icon (or Ctrl+Shift+M)
3. Test different device sizes

**On Real Devices:**
1. Find your computer's local IP:
   ```bash
   # Windows
   ipconfig
   
   # macOS/Linux
   ifconfig
   ```
2. On your phone/tablet, visit: `http://YOUR-IP:5500`

---

## 10. DEPLOYING YOUR WEBSITE

### 10.1 Commit Your Changes

```bash
# Check status
git status

# Add all files
git add .

# Commit with message
git commit -m "Initial website setup with all pages and assets"

# Push to GitHub
git push origin main
```

### 10.2 Deploy to Netlify (Recommended)

**Step 1: Create Netlify Account**
1. Go to: https://www.netlify.com
2. Sign up with GitHub account

**Step 2: Deploy Site**
1. Click "Add new site" → "Import an existing project"
2. Choose "GitHub"
3. Select your repository
4. Build settings:
   - Build command: (leave empty)
   - Publish directory: `/` (root)
5. Click "Deploy site"

**Step 3: Configure Custom Domain**
1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Enter: `www.hcjk.org`
4. Follow DNS configuration instructions
5. Enable HTTPS (automatic with Netlify)

**DNS Configuration:**
Add these records to your domain registrar:

```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: your-site-name.netlify.app
```

### 10.3 Alternative: Deploy to Vercel

1. Go to: https://vercel.com
2. Sign up with GitHub
3. Import your repository
4. Deploy (automatic)
5. Configure custom domain in settings

### 10.4 Alternative: GitHub Pages

1. Go to your repository on GitHub
2. Settings → Pages
3. Source: Deploy from a branch
4. Branch: main, folder: / (root)
5. Save
6. Your site will be at: `https://yourusername.github.io/hcjk-photography`

**For Custom Domain:**
1. Add a file named `CNAME` in root directory
2. Content: `www.hcjk.org`
3. Configure DNS at your registrar

---

## 11. ONGOING MAINTENANCE

### 11.1 Regular Updates

**Adding New Photos:**
```bash
# 1. Add images to appropriate folder
# 2. Update HTML files with new images
# 3. Commit and push

git add assets/images/portfolio/
git commit -m "Add new wedding photos from [event name]"
git push origin main
```

**Adding Blog Posts:**
1. Create new blog post HTML or update blog.html
2. Add images to `assets/images/blog/`
3. Update blog index
4. Commit and push

### 11.2 Git Workflow

**Daily Workflow:**
```bash
# 1. Pull latest changes
git pull origin main

# 2. Make your changes

# 3. Check what changed
git status
git diff

# 4. Add changes
git add .

# 5. Commit with descriptive message
git commit -m "Update portfolio with spring 2024 sessions"

# 6. Push to GitHub
git push origin main
```

### 11.3 Backup Strategy

**Automated Backups:**
- GitHub serves as your primary backup
- Netlify/Vercel keep deployment history
- Keep local copy on your computer

**Additional Backup:**
```bash
# Create backup branch
git checkout -b backup-2024-01
git push origin backup-2024-01
```

### 11.4 Performance Monitoring

**Tools to Use:**
1. **Google PageSpeed Insights**
   - https://pagespeed.web.dev/
   - Test your site regularly
   - Follow optimization suggestions

2. **Google Search Console**
   - https://search.google.com/search-console
   - Monitor SEO performance
   - Check for errors

3. **Google Analytics**
   - Track visitor behavior
   - Understand your audience
   - Measure conversions

### 11.5 Security Updates

**Regular Checks:**
- Keep dependencies updated
- Monitor for security alerts
- Review access logs
- Update contact forms to prevent spam

---

## 📞 TROUBLESHOOTING

### Common Issues

**Issue: Live Server not working**
- Solution: Restart VSCode, reinstall Live Server extension

**Issue: Git push rejected**
- Solution: Pull first with `git pull origin main`, then push

**Issue: Images not displaying**
- Solution: Check file paths are correct and case-sensitive

**Issue: CSS not applying**
- Solution: Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)

**Issue: Mobile menu not working**
- Solution: Check JavaScript console for errors (F12)

---

## 🎓 LEARNING RESOURCES

### HTML & CSS
- MDN Web Docs: https://developer.mozilla.org/
- CSS-Tricks: https://css-tricks.com/
- W3Schools: https://www.w3schools.com/

### Git & GitHub
- GitHub Guides: https://guides.github.com/
- Git Documentation: https://git-scm.com/doc

### Photography Website Inspiration
- Awwwards: https://www.awwwards.com/
- Behance: https://www.behance.net/
- Pinterest: https://www.pinterest.com/

---

## ✅ NEXT STEPS CHECKLIST

- [ ] Install Git and VSCode
- [ ] Create GitHub account
- [ ] Create repository
- [ ] Clone repository locally
- [ ] Set up project structure
- [ ] Add your logo and branding
- [ ] Add photography images
- [ ] Customize colors and content
- [ ] Test locally with Live Server
- [ ] Test on mobile devices
- [ ] Commit and push to GitHub
- [ ] Deploy to Netlify/Vercel
- [ ] Configure custom domain
- [ ] Set up Google Analytics
- [ ] Submit sitemap to Google Search Console
- [ ] Share your beautiful new website!

---

**Congratulations!** You now have a complete setup guide for your photography portfolio website. Take it step by step, and don't hesitate to refer back to this guide as needed.

For additional help, refer to the PROJECT_PLAN.md file for detailed technical specifications and best practices.

**Good luck with your photography business! 📸**