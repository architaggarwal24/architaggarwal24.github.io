/* Projects Filter & Search — filter.js
   All filtering is client-side, instant, no page reloads */

document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const projectGrid = document.getElementById('project-grid');
    const searchInput = document.getElementById('project-search');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const resultsCount = document.getElementById('results-count');
    const viewBtns = document.querySelectorAll('.view-btn');
    const noResultsMessage = document.querySelector('.no-results');

    // Active filter state — one active filter per group
    const activeFilters = {
        type: 'all',
        tech: 'all',
        difficulty: 'all'
    };

    let searchQuery = '';
    let resizeTimeout;

    // Initialize the page
    function init() {
        // Set up event listeners
        setupEventListeners();

        // Initial filter run
        filterProjects();

        // Handle window resize for responsive adjustments
        window.addEventListener('resize', handleResize);
    }

    // Set up all event listeners
    function setupEventListeners() {
        // Filter button clicks
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const filterGroup = this.getAttribute('data-filter-group');
                const filterValue = this.getAttribute('data-filter');

                // Remove active class from all buttons in this group
                document.querySelectorAll(`[data-filter-group="${filterGroup}"]`).forEach(button => {
                    button.classList.remove('active');
                });

                // Add active class to clicked button
                this.classList.add('active');

                // Update active filters state
                activeFilters[filterGroup] = filterValue;

                // Re-filter projects
                filterProjects();
            });
        });

        // Clear all filters button
        const clearFiltersBtn = document.getElementById('clear-filters-btn');
        if (clearFiltersBtn) {
            clearFiltersBtn.addEventListener('click', function() {
                // Reset all filter groups to 'all'
                Object.keys(activeFilters).forEach(group => {
                    activeFilters[group] = 'all';

                    // Update button states
                    document.querySelectorAll(`[data-filter-group="${group}"]`).forEach(button => {
                        button.classList.remove('active');
                        if (button.getAttribute('data-filter') === 'all') {
                            button.classList.add('active');
                        }
                    });
                });

                // Clear search input
                if (searchInput) {
                    searchInput.value = '';
                    searchQuery = '';
                }

                // Re-filter projects
                filterProjects();
            });
        }

        // Search input with debounce
        let searchDebounceTimer;
        searchInput.addEventListener('input', function() {
            clearTimeout(searchDebounceTimer);
            searchDebounceTimer = setTimeout(() => {
                searchQuery = this.value.trim().toLowerCase();
                filterProjects();
            }, 200);
        });

        // View toggle buttons
        viewBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from all view buttons
                viewBtns.forEach(button => button.classList.remove('active'));

                // Add active class to clicked button
                this.classList.add('active');

                // Update project grid view
                const view = this.getAttribute('data-view');
                projectGrid.classList.remove('view-grid', 'view-list');
                projectGrid.classList.add(`view-${view}`);

                // Trigger re-animation of visible items
                animateVisibleItems();
            });
        });
    }

    // Handle window resize for responsive adjustments
    function handleResize() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            // Re-trigger animation on resize for better UX
            animateVisibleItems();
        }, 250);
    }

    // Main filtering function
    function filterProjects() {
        if (!projectGrid) return;

        // Get elements
        const skeletons = projectGrid.querySelectorAll('.skeleton');
        const projectCards = projectGrid.querySelectorAll('.project-card');
        const noResultsMessage = document.querySelector('.no-results');

        // Show skeleton loaders initially (simulate loading delay)
        skeletons.forEach(skeleton => {
            skeleton.style.display = 'block';
        });

        // Hide all project cards initially
        projectCards.forEach(card => {
            card.style.display = 'none';
        });

        // Simulate loading delay
        setTimeout(() => {
            // Hide skeleton loaders
            skeletons.forEach(skeleton => {
                skeleton.style.display = 'none';
            });

            // Process each project card
            let visibleCount = 0;
            projectCards.forEach(card => {
                const matchesFilters = checkFilters(card);
                const matchesSearch = checkSearch(card);

                if (matchesFilters && matchesSearch) {
                    // Show the card
                    card.classList.remove('hidden');
                    card.classList.add('visible');
                    card.style.display = 'block';
                    visibleCount++;
                } else {
                    // Hide the card
                    card.classList.remove('visible');
                    card.classList.add('hidden');
                    card.style.display = 'none';
                }
            });

            // Update results count
            updateResultsCount(visibleCount);

            // Show/hide no results message
            if (noResultsMessage) {
                if (visibleCount === 0) {
                    noResultsMessage.style.display = 'block';
                } else {
                    noResultsMessage.style.display = 'none';
                }
            }

            // Animate visible items with stagger
            animateVisibleItems();
        }, 500); // 500ms delay to simulate loading
    }

        // Process each project card
        projectCards.forEach(card => {
            const matchesFilters = checkFilters(card);
            const matchesSearch = checkSearch(card);

            if (matchesFilters && matchesSearch) {
                // Show the card
                card.classList.remove('hidden');
                card.classList.add('visible');
                visibleCount++;
            } else {
                // Hide the card
                card.classList.remove('visible');
                card.classList.add('hidden');
            }
        });

        // Update results count
        updateResultsCount(visibleCount);

        // Show/hide no results message
        if (noResultsMessage) {
            if (visibleCount === 0) {
                noResultsMessage.style.display = 'block';
            } else {
                noResultsMessage.style.display = 'none';
            }
        }

        // Animate visible items with stagger
        animateVisibleItems();
    }

    // Check if a project card matches all active filters
    function checkFilters(card) {
        // Check type filter
        if (activeFilters.type !== 'all') {
            const cardType = card.getAttribute('data-type');
            if (cardType !== activeFilters.type) {
                return false;
            }
        }

        // Check tech filter
        if (activeFilters.tech !== 'all') {
            const cardTech = card.getAttribute('data-tech');
            if (!cardTech.includes(activeFilters.tech)) {
                return false;
            }
        }

        // Check difficulty filter
        if (activeFilters.difficulty !== 'all') {
            const cardDifficulty = card.getAttribute('data-difficulty');
            if (cardDifficulty !== activeFilters.difficulty) {
                return false;
            }
        }

        return true;
    }

    // Check if a project card matches the search query
    function checkSearch(card) {
        // If search query is empty, it matches
        if (searchQuery === '') {
            return true;
        }

        const title = card.getAttribute('data-title') || '';
        const description = card.getAttribute('data-description') || '';

        const searchableText = `${title} ${description}`.toLowerCase();

        return searchableText.includes(searchQuery);
    }

    // Update the results count display
    function updateResultsCount(count) {
        if (!resultsCount) return;

        const hasFilters = Object.values(activeFilters).some(value => value !== 'all');
        const hasSearch = searchQuery.trim() !== '';

        if (hasFilters || hasSearch) {
            resultsCount.textContent = `Showing ${count} project${count !== 1 ? 's' : ''}`;
        } else {
            resultsCount.textContent = `Showing all projects`;
        }
    }

    // Animate visible items with stagger effect
    function animateVisibleItems() {
        if (!projectGrid) return;

        const visibleCards = projectGrid.querySelectorAll('.project-card.visible');

        visibleCards.forEach((card, index) => {
            // Reset any existing animation
            card.style.animation = 'none';
            // Trigger reflow to reset animation
            void card.offsetWidth;
            // Apply animation with stagger delay
            const delay = index * 50; // 50ms stagger between cards
            card.style.animation = `fadeInUp 0.5s ease-out forwards ${delay}ms`;
        });
    }

    // Initialize the filter system
    init();
});