// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Handle registration form submission
function handleRegistration(event) {
    event.preventDefault();
    
    // Show success message
    alert('🎉 Registration feature coming soon!\n\nWhat you\'ll get:\n✅ Base wallet with private keys\n✅ Personal token and trading chart\n✅ 2.5% revenue from all trades\n✅ Creator profile ready for content\n\nStay tuned for the full launch!');
    
    // Reset form
    event.target.reset();
}

// Show coming soon message for trading buttons
function showComingSoon() {
    alert('🚀 Trading feature coming soon!\n\nYour Base wallet integration is being finalized.\nSoon you\'ll be able to:\n\n💰 Buy creator tokens\n📈 Trade with real crypto\n🔐 Use your Base wallet\n💎 Earn from price appreciation\n\nStay tuned!');
}

// Animate stats on scroll
function animateStats() {
    const statValues = document.querySelectorAll('.stat-value');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = target.textContent;
                
                // Simple animation for numbers
                if (finalValue.includes('$') || finalValue.includes('K') || !isNaN(finalValue.replace(/[^0-9]/g, ''))) {
                    target.style.opacity = '0';
                    setTimeout(() => {
                        target.style.transition = 'opacity 0.5s ease';
                        target.style.opacity = '1';
                    }, 100);
                }
            }
        });
    });
    
    statValues.forEach(stat => observer.observe(stat));
}

// Initialize animations when page loads
document.addEventListener('DOMContentLoaded', function() {
    animateStats();
    
    // Add loading animation to buttons
    const buttons = document.querySelectorAll('.cta-button, .buy-btn, .sell-btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const originalText = this.textContent;
            this.style.opacity = '0.8';
            setTimeout(() => {
                this.style.opacity = '1';
            }, 200);
        });
    });
});

// Update market cap stats with animation (simulated real-time updates)
function updateMarketStats() {
    const stats = [
        { selector: '.stat-value', values: ['$2.4M', '$2.5M', '$2.3M', '$2.6M'] },
    ];
    
    // This would connect to real API in production
    // For now, just add subtle animations
    setInterval(() => {
        const statElements = document.querySelectorAll('.stat-value');
        statElements.forEach(element => {
            element.style.transform = 'scale(1.02)';
            setTimeout(() => {
                element.style.transform = 'scale(1)';
            }, 200);
        });
    }, 10000); // Update every 10 seconds
}

// Initialize market stats updates
document.addEventListener('DOMContentLoaded', updateMarketStats);

// Add navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Add hover effects to creator cards
document.addEventListener('DOMContentLoaded', function() {
    const creatorCards = document.querySelectorAll('.creator-card');
    creatorCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.borderLeft = '4px solid #667eea';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.borderLeft = 'none';
        });
    });
});

// Console message for developers
console.log(`
🚀 ChartUs - Where Creators Become Investments

Built with:
- Pure HTML/CSS/JavaScript
- No build process required
- Optimized for performance
- Ready for Base wallet integration

Visit: https://chartusall.com
`);

