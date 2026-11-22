// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic Navbar Glass Effect on Scroll
const nav = document.querySelector('.glass-nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(255, 255, 255, 0.08)';
        nav.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.3)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.04)';
        nav.style.boxShadow = 'none';
    }
});

// Interactive Liquid Glass Mouse Tracking Effect
document.addEventListener('mousemove', (e) => {
    const orb1 = document.querySelector('.orb-1');
    const orb2 = document.querySelector('.orb-2');
    
    // Calculate mouse position relative to screen center
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;
    
    // Move orbs slightly based on mouse movement
    orb1.style.transform = `translate(${x * 60}px, ${y * 60}px) scale(1.05)`;
    orb2.style.transform = `translate(${x * -60}px, ${y * -60}px) scale(1.05)`;
});