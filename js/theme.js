/* Dark/light mode toggle with localStorage and SVG icons */

document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const bodyElement = document.body;

    // SVG Icons
    const sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5.293l2.293-2.293a1 1 0 111.414 1.414L12 10.586l5.293 5.293a1 1 0 01-1.414 1.414L10.586 14H8a1 1 0 010-2h2.586l-.293-.293a1 1 0 00-1.414-1.414L6.707 8.293l-5.293-5.293a1 1 0 00-1.414 1.414L6 10.586l-.707.707a1 1 0 001.414 1.414L8 11.293V4a1 1 0 011-1zm6.646 10.646a1 1 0 01-1.414 0L8 11.293V4a1 1 0 010-2h2.586l.293.293a1 1 0 001.414 1.414l5.293 5.293a1 1 0 000 1.414z" clip-rule="evenodd" /></svg>`;

    const moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586zM10 5a1 1 0 011 1v1a1 1 0 11-2 0V6a1 1 0 011-1zm2 8a1 1 0 10-2 0c2.97 0 5.384 2.412 5.814 5.656a1 1 0 00.966.06 1 1 0 001.041-.479A6.97 6.97 0 0014 13a1 1 0 10-2 0z" fill-rule="evenodd" clip-rule="evenodd" /></svg>`;

    // Check for saved theme preference or use system preference
    const getPreferredTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) return savedTheme;

        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    };

    const setTheme = (theme) => {
        // Add transition class
        bodyElement.classList.add('theme-transition');

        // Apply theme
        if (theme === 'dark') {
            htmlElement.setAttribute('data-theme', 'dark');
            themeToggle.innerHTML = moonIcon;
            themeToggle.setAttribute('aria-label', 'Switch to light mode');
        } else {
            htmlElement.removeAttribute('data-theme');
            themeToggle.innerHTML = sunIcon;
            themeToggle.setAttribute('aria-label', 'Switch to dark mode');
        }

        // Save to localStorage
        localStorage.setItem('theme', theme);

        // Remove transition class after animation completes
        setTimeout(() => {
            bodyElement.classList.remove('theme-transition');
        }, 300);
    };

    const toggleTheme = () => {
        const currentTheme = htmlElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    };

    // Initialize theme
    const initialTheme = getPreferredTheme();
    setTheme(initialTheme);

    // Event listener for theme toggle
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            const newTheme = e.matches ? 'dark' : 'light';
            setTheme(newTheme);
        }
    });
});