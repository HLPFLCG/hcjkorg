# HCJK Collection - Deployment Guide
## How to Deploy Your Website to www.hcjk.org

---

## 🚀 Quick Deployment Options

You have **three main options** for deploying your website. I recommend **Option 1 (Netlify)** for the best experience.

---

## ✅ OPTION 1: Netlify (RECOMMENDED)

### Why Netlify?
- ✅ **Free tier** with generous limits
- ✅ **Automatic HTTPS** (SSL certificate)
- ✅ **Continuous deployment** from GitHub
- ✅ **Form handling** included
- ✅ **CDN** for fast global delivery
- ✅ **Easy custom domain** setup
- ✅ **No credit card** required for free tier

### Step-by-Step Deployment

#### 1. Create Netlify Account
1. Go to: https://www.netlify.com
2. Click "Sign up"
3. Choose "Sign up with GitHub"
4. Authorize Netlify to access your GitHub account

#### 2. Deploy Your Site
1. Click "Add new site" → "Import an existing project"
2. Choose "GitHub"
3. Select your repository: **HLPFLCG/hcjkorg**
4. Configure build settings:
   - **Branch to deploy:** main
   - **Build command:** (leave empty)
   - **Publish directory:** . (dot - means root)
5. Click "Deploy site"

**Your site will be live in 1-2 minutes!**

#### 3. Configure Custom Domain (www.hcjk.org)

**In Netlify Dashboard:**
1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Enter: `www.hcjk.org`
4. Click "Verify"
5. Netlify will provide DNS instructions

**At Your Domain Registrar (where you bought hcjk.org):**

You need to add these DNS records:

```
Type: A
Name: @
Value: 75.2.60.5
TTL: 3600

Type: CNAME
Name: www
Value: [your-site-name].netlify.app
TTL: 3600
```

**Alternative (Netlify DNS - Easier):**
1. In Netlify, click "Set up Netlify DNS"
2. Follow the instructions to change nameservers at your registrar
3. Update nameservers to Netlify's:
   - dns1.p01.nsone.net
   - dns2.p01.nsone.net
   - dns3.p01.nsone.net
   - dns4.p01.nsone.net

#### 4. Enable HTTPS
1. In Netlify: Site settings → Domain management → HTTPS
2. Click "Verify DNS configuration"
3. Click "Provision certificate"
4. Wait 1-2 minutes for SSL certificate

**Done! Your site is now live at https://www.hcjk.org** 🎉

#### 5. Automatic Deployments
Every time you push to GitHub, Netlify automatically:
- Pulls the latest code
- Deploys the changes
- Updates your live site

**No manual deployment needed!**

---

## OPTION 2: Vercel (Alternative)

### Why Vercel?
- Similar to Netlify
- Excellent performance
- Free tier available
- Great developer experience

### Deployment Steps

1. **Create Account**
   - Go to: https://vercel.com
   - Sign up with GitHub

2. **Import Repository**
   - Click "Add New" → "Project"
   - Import: HLPFLCG/hcjkorg
   - Click "Deploy"

3. **Configure Domain**
   - Go to Project Settings → Domains
   - Add: www.hcjk.org
   - Follow DNS instructions

4. **DNS Configuration**
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

---

## OPTION 3: GitHub Pages (Free, Basic)

### Why GitHub Pages?
- Completely free
- Integrated with GitHub
- Simple setup
- Good for basic sites

### Deployment Steps

1. **Enable GitHub Pages**
   - Go to your repository: https://github.com/HLPFLCG/hcjkorg
   - Click "Settings"
   - Scroll to "Pages" (left sidebar)
   - Under "Source":
     - Branch: main
     - Folder: / (root)
   - Click "Save"

2. **Wait for Deployment**
   - GitHub will build and deploy your site
   - Takes 1-2 minutes
   - Your site will be at: https://hlpflcg.github.io/hcjkorg

3. **Configure Custom Domain**
   - In GitHub Pages settings
   - Enter: www.hcjk.org
   - Click "Save"
   - The CNAME file is already in your repository

4. **DNS Configuration**
   At your domain registrar, add:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   
   Type: A
   Name: @
   Value: 185.199.109.153
   
   Type: A
   Name: @
   Value: 185.199.110.153
   
   Type: A
   Name: @
   Value: 185.199.111.153
   
   Type: CNAME
   Name: www
   Value: hlpflcg.github.io
   ```

5. **Enable HTTPS**
   - In GitHub Pages settings
   - Check "Enforce HTTPS"
   - Wait for certificate provisioning

---

## 🌐 DNS Configuration Guide

### Where to Configure DNS

You need to configure DNS at your **domain registrar** (where you purchased hcjk.org).

Common registrars:
- **Namecheap:** Domain List → Manage → Advanced DNS
- **GoDaddy:** My Products → Domains → DNS
- **Google Domains:** My domains → DNS
- **Cloudflare:** DNS → Records

### DNS Propagation

After updating DNS records:
- Changes can take **1-48 hours** to propagate
- Usually happens within **1-2 hours**
- Check status: https://www.whatsmydns.net/

### Verify DNS Configuration

```bash
# Check A records
dig hcjk.org

# Check CNAME records
dig www.hcjk.org

# Check nameservers
dig NS hcjk.org
```

---

## 📊 Comparison Table

| Feature | Netlify | Vercel | GitHub Pages |
|---------|---------|--------|--------------|
| **Free Tier** | ✅ Yes | ✅ Yes | ✅ Yes |
| **Custom Domain** | ✅ Easy | ✅ Easy | ✅ Moderate |
| **Auto HTTPS** | ✅ Yes | ✅ Yes | ✅ Yes |
| **CDN** | ✅ Yes | ✅ Yes | ✅ Yes |
| **Form Handling** | ✅ Yes | ❌ No | ❌ No |
| **Build Time** | Fast | Fast | Moderate |
| **Ease of Use** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Best For** | Static sites | All projects | Simple sites |

**Recommendation:** Use **Netlify** for the best experience.

---

## 🔧 Post-Deployment Checklist

After deployment, verify:

- [ ] Site loads at www.hcjk.org
- [ ] HTTPS is enabled (green padlock)
- [ ] All pages load correctly
- [ ] Images display properly
- [ ] Navigation works
- [ ] Mobile responsive
- [ ] Forms work (if applicable)
- [ ] No console errors (F12)

---

## 📈 Set Up Analytics

### Google Analytics 4

1. **Create Account**
   - Go to: https://analytics.google.com
   - Create account and property

2. **Get Tracking ID**
   - Copy your Measurement ID (G-XXXXXXXXXX)

3. **Add to Website**
   - Open all HTML files
   - Find the Google Analytics section
   - Replace `G-XXXXXXXXXX` with your ID

4. **Verify Tracking**
   - Visit your site
   - Check Google Analytics Real-Time reports

### Google Search Console

1. **Add Property**
   - Go to: https://search.google.com/search-console
   - Add property: www.hcjk.org

2. **Verify Ownership**
   - Choose DNS verification
   - Add TXT record to your DNS

3. **Submit Sitemap**
   - In Search Console: Sitemaps
   - Submit: https://www.hcjk.org/sitemap.xml

---

## 🚨 Troubleshooting

### Site Not Loading
- Check DNS propagation: https://www.whatsmydns.net/
- Wait 1-2 hours after DNS changes
- Clear browser cache (Ctrl+Shift+R)

### HTTPS Not Working
- Wait for SSL certificate provisioning (1-2 minutes)
- Verify DNS is correctly configured
- Try accessing with https:// explicitly

### Images Not Displaying
- Check file paths are correct
- Verify images are in repository
- Check browser console for errors (F12)

### Custom Domain Not Working
- Verify CNAME file exists in repository
- Check DNS records are correct
- Wait for DNS propagation

---

## 🔄 Updating Your Site

### Making Changes

1. **Edit Files Locally**
   - Make changes to HTML/CSS/JS
   - Test locally with Live Server

2. **Commit Changes**
   ```bash
   git add .
   git commit -m "Description of changes"
   git push origin main
   ```

3. **Automatic Deployment**
   - Netlify/Vercel automatically deploys
   - Changes live in 1-2 minutes
   - No manual action needed

### Rollback if Needed

**In Netlify:**
1. Go to Deploys
2. Find previous successful deploy
3. Click "Publish deploy"

**In Vercel:**
1. Go to Deployments
2. Find previous deployment
3. Click "Promote to Production"

---

## 💡 Pro Tips

1. **Use Branch Previews**
   - Create feature branches for testing
   - Netlify/Vercel create preview URLs
   - Merge to main when ready

2. **Monitor Performance**
   - Use Google PageSpeed Insights
   - Optimize images regularly
   - Monitor Core Web Vitals

3. **Set Up Notifications**
   - Enable deploy notifications
   - Get alerts for failed builds
   - Monitor uptime

4. **Backup Your Site**
   - GitHub is your backup
   - Download repository periodically
   - Keep local copy updated

---

## 📞 Need Help?

### Netlify Support
- Documentation: https://docs.netlify.com
- Community: https://answers.netlify.com
- Status: https://www.netlifystatus.com

### DNS Help
- Check propagation: https://www.whatsmydns.net
- DNS checker: https://dnschecker.org
- MX Toolbox: https://mxtoolbox.com

### General Web Help
- Stack Overflow: https://stackoverflow.com
- MDN Web Docs: https://developer.mozilla.org
- Web.dev: https://web.dev

---

## ✅ Success!

Once deployed, your professional photography portfolio will be live at:

**🌐 https://www.hcjk.org**

Share it with the world and start booking clients! 📸✨

---

*Last Updated: November 2024*