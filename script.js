// Page loader
const pageLoader = document.querySelector('.page-loader');

window.addEventListener('load', () => {
    setTimeout(() => {
        pageLoader.classList.add('loaded');
    }, 500);
});

// Navigation scroll effect
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
});

// Close mobile menu when clicking a link
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// Scroll animations with Intersection Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for animation
const animateElements = document.querySelectorAll(
    '.about-content, .about-image, .service-card, .benefit-item, .benefits-image, .benefits-content, .process-step'
);

animateElements.forEach(el => {
    fadeObserver.observe(el);
});

// Stagger service card animations
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
});

// Stagger benefit item animations
const benefitItems = document.querySelectorAll('.benefit-item');
benefitItems.forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.15}s`;
});

// Stagger process step animations
const processSteps = document.querySelectorAll('.process-step');
processSteps.forEach((step, index) => {
    step.style.transitionDelay = `${index * 0.15}s`;
});

// Instagram link handler - update this with the actual Instagram URL
const instagramUrl = '#'; // Replace with actual Instagram URL

const bookingBtn = document.getElementById('bookingBtn');
const instagramLink = document.getElementById('instagramLink');
const navCta = document.querySelector('.nav-cta');

// Update all booking buttons to link to Instagram
function setInstagramLink(url) {
    if (bookingBtn) bookingBtn.href = url;
    if (instagramLink) instagramLink.href = url;
    if (navCta) navCta.href = url;
}

// Call this with the actual Instagram URL when ready
// setInstagramLink('https://instagram.com/dickinsonbodyandbalance');

// Parallax effect for background shapes
const heroShapes = document.querySelectorAll('.hero-shape');

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    
    heroShapes.forEach((shape, index) => {
        const speed = 0.1 + (index * 0.05);
        shape.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Hide scroll indicator on scroll
const scrollIndicator = document.querySelector('.scroll-indicator');

window.addEventListener('scroll', () => {
    if (scrollIndicator && window.scrollY > 100) {
        scrollIndicator.style.opacity = '0';
        scrollIndicator.style.pointerEvents = 'none';
    } else if (scrollIndicator) {
        scrollIndicator.style.opacity = '1';
        scrollIndicator.style.pointerEvents = 'auto';
    }
});
