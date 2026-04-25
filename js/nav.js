/* Nav: active tab highlight, mobile menu, scroll behavior */

document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('.nav');
    const hamburger = document.querySelector('.nav-hamburger');
    const mobileMenu = document.querySelector('.nav-mobile');

    // ---- ACTIVE NAV LINK ----
    // Strips .html extension for comparison — works on both file:// and servers
    // that strip extensions (localhost:3000/blog vs localhost:3000/blog.html)
    function normalizePage(str) {
        return (str || '').split('/').pop().replace(/\.html$/, '') || 'index';
    }

    function setActive() {
        const current = normalizePage(window.location.pathname);

        document.querySelectorAll('.nav-link, .nav-mobile a').forEach(link => {
            const linkNorm = normalizePage(link.getAttribute('href') || '');
            link.classList.toggle('active', linkNorm === current);
        });
    }

    setActive();
    window.addEventListener('popstate', setActive);

    // ---- MOBILE MENU ----
    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            const open = mobileMenu.classList.toggle('open');
            hamburger.classList.toggle('active', open);
            hamburger.setAttribute('aria-expanded', open);
            mobileMenu.setAttribute('aria-hidden', !open);
        });

        mobileMenu.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                mobileMenu.classList.remove('open');
                hamburger.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
                mobileMenu.setAttribute('aria-hidden', 'true');
            });
        });

        document.addEventListener('click', e => {
            if (mobileMenu.classList.contains('open') &&
                !mobileMenu.contains(e.target) &&
                !hamburger.contains(e.target)) {
                mobileMenu.classList.remove('open');
                hamburger.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
                mobileMenu.setAttribute('aria-hidden', 'true');
            }
        });
    }

    // ---- SCROLL ----
    function onScroll() {
        if (nav) nav.classList.toggle('scrolled', window.scrollY > 50);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
});