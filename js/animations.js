/* Intersection Observer scroll reveals and animations */

document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add revealed class for fade-in animations
                entry.target.classList.add('revealed');

                // Add specific animations based on data attributes
                const animationType = entry.target.getAttribute('data-animation');
                if (animationType) {
                    entry.target.classList.add(`animate-${animationType}`);
                }

                // Handle stagger delays for grids
                if (entry.target.classList.contains('reveal-stagger')) {
                    const delay = entry.target.getAttribute('data-delay') || '100';
                    entry.target.style.animationDelay = `${delay}ms`;
                }

                // Handle skill bar animations
                if (entry.target.classList.contains('skill-bar-fill')) {
                    const level = entry.target.getAttribute('data-level');
                    if (level) {
                        entry.target.style.width = level + '%';
                    }
                }

                // Stop observing once animated for performance
                // observer.unobserve(entry.target); // Commented out to allow re-observing if needed
            }
        });
    }, observerOptions);

    // Observe elements that should reveal on scroll
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach(el => observer.observe(el));

    // Also observe common elements that should animate on scroll
    const fadeElements = document.querySelectorAll('.card, .project-card, .skill-badge, .what-i-do-card, .stat-card, .skill-bar-fill');
    fadeElements.forEach(el => observer.observe(el));

    // ROTATING SUBTITLE ANIMATION
    const rotatingSubtitle = document.querySelector('.rotating-subtitle');
    if (rotatingSubtitle) {
        const roles = [
            "Frontend Developer",
            "UI/UX Designer",
            "React Enthusiast",
            "Problem Solver"
        ];
        let currentIndex = 0;

        function updateSubtitle() {
            rotatingSubtitle.textContent = roles[currentIndex];
            currentIndex = (currentIndex + 1) % roles.length;
        }

        // Change subtitle every 3 seconds
        setInterval(updateSubtitle, 3000);

        // Initialize first subtitle
        updateSubtitle();
    }
});