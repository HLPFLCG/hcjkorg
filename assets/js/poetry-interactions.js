// HCJK Collection Poetry Interactions

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Add fade-in animation for poems on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Apply to poem cards and content sections
    document.querySelectorAll('.poem-card, .poem-item, .category-card, .resource-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        fadeObserver.observe(el);
    });

    // Newsletter form validation
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            // Basic email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (email && emailRegex.test(email)) {
                // In a real implementation, this would submit to a backend
                alert('Thank you for subscribing! You\'ll receive poetry and updates soon.');
                emailInput.value = '';
            } else {
                alert('Please enter a valid email address.');
                emailInput.focus();
            }
        });
    }

    // Add active state to navigation based on scroll position
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-link');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}` || 
                (current && link.getAttribute('href').includes(current))) {
                link.classList.add('active');
            }
        });
    });

    // Copy poem functionality
    document.querySelectorAll('.poem-content').forEach(poem => {
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-poem-btn';
        copyButton.textContent = 'Copy Poem';
        copyButton.style.cssText = `
            position: absolute;
            top: 10px;
            right: 10px;
            padding: 0.5rem 1rem;
            background: var(--accent-gold);
            color: white;
            border: none;
            border-radius: 3px;
            cursor: pointer;
            font-size: 0.9rem;
            font-family: 'Georgia', serif;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;

        const poemContainer = poem.closest('.poem-card, .poem-display');
        if (poemContainer) {
            poemContainer.style.position = 'relative';
            poemContainer.appendChild(copyButton);
            
            poemContainer.addEventListener('mouseenter', () => {
                copyButton.style.opacity = '1';
            });
            
            poemContainer.addEventListener('mouseleave', () => {
                copyButton.style.opacity = '0';
            });
            
            copyButton.addEventListener('click', () => {
                const poemText = poem.innerText;
                navigator.clipboard.writeText(poemText).then(() => {
                    copyButton.textContent = 'Copied!';
                    setTimeout(() => {
                        copyButton.textContent = 'Copy Poem';
                    }, 2000);
                }).catch(err => {
                    console.error('Failed to copy poem:', err);
                });
            });
        }
    });

    // Add reading progress indicator for poetry pages
    const poetryContent = document.querySelector('.poetry-content');
    if (poetryContent) {
        const progressBar = document.createElement('div');
        progressBar.className = 'reading-progress';
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            height: 3px;
            background: var(--accent-gold);
            width: 0%;
            z-index: 1000;
            transition: width 0.1s ease;
        `;
        document.body.appendChild(progressBar);

        window.addEventListener('scroll', () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollTop = window.scrollY;
            const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
            progressBar.style.width = scrollPercent + '%';
        });
    }

    // Add theme filter functionality for poetry categories
    const categoryLinks = document.querySelectorAll('[href^="#"]');
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href').substring(1);
            if (targetId && targetId.length > 0) {
                // Smooth scroll is handled above
                // Additional category filtering could be added here
            }
        });
    });

    // Add font size toggle for accessibility
    const fontSizeToggle = document.createElement('button');
    fontSizeToggle.className = 'font-size-toggle';
    fontSizeToggle.textContent = 'A+';
    fontSizeToggle.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        background: var(--primary-blue);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 1.2rem;
        font-weight: bold;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease;
    `;
    document.body.appendChild(fontSizeToggle);

    let fontSize = 100;
    fontSizeToggle.addEventListener('click', () => {
        fontSize = fontSize === 100 ? 120 : fontSize === 120 ? 140 : 100;
        document.documentElement.style.fontSize = fontSize + '%';
        fontSizeToggle.textContent = fontSize === 100 ? 'A+' : fontSize === 120 ? 'A++' : 'A+++';
    });

    // Add social share functionality
    const shareButtons = document.querySelectorAll('.share-btn');
    shareButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const url = encodeURIComponent(window.location.href);
            const title = encodeURIComponent(document.title);
            const platform = this.dataset.platform;
            
            let shareUrl = '';
            
            switch(platform) {
                case 'twitter':
                    shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
                    break;
                case 'facebook':
                    shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
                    break;
                case 'pinterest':
                    shareUrl = `https://pinterest.com/pin/create/button/?url=${url}&description=${title}`;
                    break;
            }
            
            if (shareUrl) {
                window.open(shareUrl, '_blank', 'width=600,height=400');
            }
        });
    });

    console.log('HCJK Poetry Interactions Loaded');
});