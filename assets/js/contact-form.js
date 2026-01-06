// HCJK Collection Contact Form Handler

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value.trim();
            const newsletter = document.getElementById('newsletter').checked;
            
            // Validation
            const errors = [];
            
            if (!name) {
                errors.push('Please enter your name');
            }
            
            if (!email) {
                errors.push('Please enter your email address');
            } else if (!isValidEmail(email)) {
                errors.push('Please enter a valid email address');
            }
            
            if (!subject) {
                errors.push('Please select a subject');
            }
            
            if (!message) {
                errors.push('Please enter your message');
            }
            
            // Display errors if any
            if (errors.length > 0) {
                alert('Please fix the following errors:\n\n' + errors.join('\n'));
                return;
            }
            
            // Show success message (in production, this would submit to a backend)
            showSuccessMessage(name, email, subject, message, newsletter);
        });
    }
    
    // FAQ accordion functionality
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        question.addEventListener('click', function() {
            // Close other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.faq-answer').style.maxHeight = '0';
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
            if (item.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                answer.style.maxHeight = '0';
            }
        });
    });
    
    // Initialize FAQ state
    faqItems.forEach(item => {
        const answer = item.querySelector('.faq-answer');
        answer.style.maxHeight = '0';
        answer.style.overflow = 'hidden';
        answer.style.transition = 'max-height 0.3s ease';
    });
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showSuccessMessage(name, email, subject, message, newsletter) {
    // Create success message
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.innerHTML = `
        <h3>Thank you for reaching out!</h3>
        <p>Your message has been received. I typically respond within 24-48 hours.</p>
        ${newsletter ? '<p>You\'ve also been added to my newsletter!</p>' : ''}
        <p>— Heather</p>
        <button onclick="closeSuccessMessage()" class="btn btn-secondary">Close</button>
    `;
    
    successDiv.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        max-width: 500px;
        width: 90%;
        text-align: center;
    `;
    
    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'success-overlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.7);
        z-index: 9999;
    `;
    
    overlay.onclick = closeSuccessMessage;
    
    // Add to DOM
    document.body.appendChild(overlay);
    document.body.appendChild(successDiv);
    
    // Store references for cleanup
    window.successOverlay = overlay;
    window.successDiv = successDiv;
}

function closeSuccessMessage() {
    if (window.successOverlay) {
        document.body.removeChild(window.successOverlay);
    }
    if (window.successDiv) {
        document.body.removeChild(window.successDiv);
    }
    
    // Reset form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.reset();
    }
}

// Add CSS for FAQ active state
const faqStyles = document.createElement('style');
faqStyles.textContent = `
    .faq-item {
        border: 1px solid #e2e8f0;
        border-radius: 8px;
        margin-bottom: 1rem;
        overflow: hidden;
        transition: all 0.3s ease;
    }
    
    .faq-item:hover {
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
    
    .faq-question {
        padding: 1.5rem;
        margin: 0;
        background: var(--light-cream, #faf7f2);
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1.1rem;
        color: var(--primary-blue, #1a365d);
    }
    
    .faq-question::after {
        content: '+';
        font-size: 1.5rem;
        font-weight: bold;
        transition: transform 0.3s ease;
    }
    
    .faq-item.active .faq-question::after {
        transform: rotate(45deg);
    }
    
    .faq-item.active {
        border-color: var(--accent-gold, #d69e2e);
    }
    
    .faq-answer {
        padding: 0 1.5rem;
        background: white;
        color: var(--text-dark, #2d3748);
        line-height: 1.8;
    }
    
    .faq-item.active .faq-answer {
        padding: 1.5rem;
    }
`;
document.head.appendChild(faqStyles);