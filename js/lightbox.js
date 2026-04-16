/* Lightbox.js - Image gallery lightbox for project detail pages */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize lightbox functionality
    initLightbox();
});

function initLightbox() {
    // Find all gallery images
    const galleryImages = document.querySelectorAll('.screenshot-image, .hero-image, .image-placeholder');

    // If no gallery images found, exit early
    if (galleryImages.length === 0) {
        return;
    }

    // Create lightbox elements
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <button class="lightbox-close" aria-label="Close lightbox">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
            <div class="lightbox-nav">
                <button class="lightbox-prev" aria-label="Previous image">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M15 18l-6-6 6-6"></path>
                    </svg>
                </button>
                <img class="lightbox-image" src="" alt="">
                <button class="lightbox-next" aria-label="Next image">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M9 18l6-6-6-6"></path>
                    </svg>
                </button>
            </div>
            <div class="lightbox-caption"></div>
        </div>
    `;

    // Add lightbox to body
    document.body.appendChild(lightbox);

    // Get lightbox elements
    const lightboxOverlay = lightbox;
    const lightboxContent = lightbox.querySelector('.lightbox-content');
    const lightboxClose = lightbox.querySelector('.lightbox-close');
    const lightboxPrev = lightbox.querySelector('.lightbox-prev');
    const lightboxNext = lightbox.querySelector('.lightbox-next');
    const lightboxImage = lightbox.querySelector('.lightbox-image');
    const lightboxCaption = lightbox.querySelector('.lightbox-caption');

    // State
    let currentImageIndex = 0;
    let images = [];

    // Open lightbox
    function openLightbox(index) {
        currentImageIndex = index;
        updateLightbox();
        lightboxOverlay.classList.add('active');
        // Trap focus
        trapFocus(lightboxOverlay);
    }

    // Close lightbox
    function closeLightbox() {
        lightboxOverlay.classList.remove('active');
        // Return focus to trigger element
        const trigger = document.activeElement;
        if (trigger && trigger.closest('.screenshot-image, .hero-image')) {
            trigger.focus();
        }
    }

    // Update lightbox content
    function updateLightbox() {
        // For now, we'll just show a placeholder since we're using placeholders
        lightboxImage.src = 'data:image/svg+xml,%3Csvg%20xmlns%3D%22http://www.w3.org/2000/svg%22%20width%3D%22800%22%20height%3D%22450%22%3E%3Crect%20width%3D%22800%22%20height%3D%22450%22%20fill%3D%22%23141417%22/%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20text-anchor%3D%22middle%22%20fill%3D%22%239a9a96%22%20font-family%3D%22Inter%2C%20sans-serif%22%20font-size%3D%2224%22%3EImage%20Placeholder%3C/text%3E%3C/svg%3E';
        lightboxImage.alt = `Image ${currentImageIndex + 1}`;
        lightboxCaption.textContent = `Image ${currentImageIndex + 1} of ${images.length}`;

        // Update navigation button states
        lightboxPrev.disabled = currentImageIndex === 0;
        lightboxNext.disabled = currentImageIndex === images.length - 1;
    }

    // Navigate to previous image
    function showPrevious() {
        if (currentImageIndex > 0) {
            currentImageIndex--;
            updateLightbox();
        }
    }

    // Navigate to next image
    function showNext() {
        if (currentImageIndex < images.length - 1) {
            currentImageIndex++;
            updateLightbox();
        }
    }

    // Handle keyboard events
    function handleKeyDown(e) {
        if (!lightboxOverlay.classList.contains('active')) return;

        switch (e.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowLeft':
                e.preventDefault();
                showPrevious();
                break;
            case 'ArrowRight':
                e.preventDefault();
                showNext();
                break;
            default:
                break;
        }
    }

    // Trap focus inside lightbox
    function trapFocus(element) {
        const focusableElements = element.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        const firstFocusable = focusableElements[0];
        const lastFocusable = focusableElements[focusableElements.length - 1];

        function trapKey(e) {
            if (e.key === 'Tab') {
                if (e.shiftIndex) { // Shift + Tab
                    if (document.activeElement === firstFocusable) {
                        e.preventDefault();
                        lastFocusable.focus();
                    }
                } else { // Tab
                    if (document.activeElement === lastFocusable) {
                        e.preventDefault();
                        firstFocusable.focus();
                    }
                }
            }
        }

        element.addEventListener('keydown', trapKey);
        firstFocusable.focus();

        // Cleanup when lightbox closes
        const cleanup = () => {
            element.removeEventListener('keydown', trapKey);
        };

        // Return cleanup function
        return cleanup;
    }

    // Event listeners
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', showPrevious);
    lightboxNext.addEventListener('click', showNext);
    lightboxOverlay.addEventListener('click', (e) => {
        if (e.target === lightboxOverlay) {
            closeLightbox();
        }
    });
    document.addEventListener('keydown', handleKeyDown);

    // For now, we'll simulate finding gallery images
    // In a real implementation, we would:
    // 1. Find all elements with a specific class (e.g., .gallery-image)
    // 2. Extract their image sources
    // 3. Attach click listeners to open the lightbox
    // Since we're using placeholders, we'll attach to the screenshot buttons instead

    const screenshotButtons = document.querySelectorAll('.screenshot-btn');
    screenshotButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            // For demo purposes, we'll just open with a placeholder
            openLightbox(0);
        });
    });

    // Also attach to hero image if it exists
    const heroImageContainers = document.querySelectorAll('.hero-image');
    heroImageContainers.forEach((container, index) => {
        container.addEventListener('click', () => {
            openLightbox(0);
        });
    });
}