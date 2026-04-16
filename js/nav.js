/* Mobile nav toggle, active state, scroll behavior */

document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('.nav');
    const mobileMenuBtn = document.querySelector('.nav-hamburger');
    const mobileMenu = document.querySelector('.nav-mobile');
    const themeToggle = document.getElementById('theme-toggle');

    // Set active nav link based on current page
    const setActiveNavLink = () => {
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.nav-link, .nav-mobile a');

        navLinks.forEach(link => {
            const linkPath = link.getAttribute('href');

            // Handle active states
            if (linkPath === currentPath ||
                (currentPath === 'index.html' && (linkPath === '' || linkPath === 'index.html')) ||
                (linkPath === 'index.html' && currentPath === '')) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    };

    // Mobile menu toggle
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            const isOpen = mobileMenu.classList.toggle('open');
            mobileMenuBtn.classList.toggle('active', isOpen);
            mobileMenuBtn.setAttribute('aria-expanded', isOpen);
            mobileMenu.setAttribute('aria-hidden', !isOpen);
        });
    }

    // Close mobile menu when clicking a link
    const closeMobileMenuOnLinkClick = () => {
        if (mobileMenu && mobileMenu.classList.contains('open')) {
            mobileMenu.classList.remove('open');
            mobileMenuBtn.classList.remove('active');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
            mobileMenu.setAttribute('aria-hidden', 'true');
        }
    };

    // Handle mobile menu link clicks
    const mobileMenuLinks = document.querySelectorAll('.nav-mobile a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenuOnLinkClick);
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (mobileMenu &&
            !mobileMenu.contains(e.target) &&
            !mobileMenuBtn.contains(e.target) &&
            mobileMenu.classList.contains('open')) {
            closeMobileMenuOnLinkClick();
        }
    });

    // Scroll behavior for nav
    let lastScrollY = window.scrollY;

    const updateNavOnScroll = () => {
        if (!nav) return;

        const scrollY = window.scrollY;

        if (scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }

        lastScrollY = scrollY;
    };

    // Initial setup
    setActiveNavLink();
    updateNavOnScroll();

    // Event listeners
    window.addEventListener('scroll', updateNavOnScroll);
    window.addEventListener('resize', setActiveNavLink);
});