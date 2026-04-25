/* Intersection Observer scroll reveals and animations */

document.addEventListener('DOMContentLoaded', function() {
    // COUNTUP ANIMATION FOR STATS
    const countUpElements = document.querySelectorAll('[data-count]');
    countUpElements.forEach(el => {
        el.textContent = '0';
    });

    function animateCountUp(element) {
        const target = parseInt(element.getAttribute('data-count'), 10);
        const suffix = element.getAttribute('data-suffix') || '';
        const duration = 1500;
        const startTime = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(easeOut * target);
            element.textContent = current + suffix;

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                element.textContent = target + suffix;
            }
        }

        requestAnimationFrame(update);
    }

    const countUpObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCountUp(entry.target);
                countUpObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    countUpElements.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight) {
            animateCountUp(el);
        } else {
            countUpObserver.observe(el);
        }
    });

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
            "Agentic AI Engineer",
            "LLM Systems Builder",
            "RAG Pipeline Architect",
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