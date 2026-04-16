# <!-- REPLACE: Your Name --> — Portfolio

## Overview
A professional portfolio website showcasing frontend development expertise, UI/UX design skills, and project experience. Built with modern HTML5, CSS3, and vanilla JavaScript, this portfolio demonstrates mastery of responsive design, accessibility, and performance optimization techniques.

## Live Site
<!-- REPLACE: https://yourusername.github.io/portfolio -->

## Features
- Responsive design that works on all device sizes (mobile, tablet, desktop)
- Dark/light theme toggle with system preference detection and persistence
- Smooth page transitions and scroll-based animations
- Interactive project filtering and search system
- Accessible navigation with mobile menu and keyboard support
- SEO-optimized with proper meta tags and semantic structure
- Print-optimized stylesheet for clean physical output
- Loading states and empty state handling for improved UX
- Network-aware contact form with offline fallback
- Comprehensive CSS architecture using design tokens and BEM methodology

## Tech Stack
- **HTML5**: Semantic markup with proper accessibility attributes
- **CSS3**: CSS Grid, Flexbox, custom properties, animations, media queries
- **JavaScript**: Vanilla ES6+ with no external dependencies
- **Design System**: CSS custom properties (tokens) for consistent theming
- **Performance**: GPU-accelerated animations, critical rendering path optimization
- **Accessibility**: WCAG 2.1 AA compliant color contrast and keyboard navigation

## Folder Structure
```
portfolio/
├── index.html              # Home/Hero page
├── projects.html           # Projects grid with filtering
├── experience.html         # Skills and experience timeline
├── blog.html               # Blog/articles section
├── contact.html            # Contact form with Netlify integration
├── assets/                 # Static assets
│   ├── images/             # Image assets
│   │   ├── profile/        # Profile photos
│   │   ├── projects/       # Project screenshots
│   │   └── og/             # Open Graph social images
│   ├── resume/             # Resume/CV documents
│   └── icons/              # Favicon and UI icons
├── css/                    # Stylesheets
│   ├── tokens.css          # Design tokens (CSS custom properties)
│   ├── reset.css           # CSS reset
│   ├── global.css          # Base styles and layout
│   ├── components.css      # Reusable UI components
│   ├── nav.css             # Navigation styles
│   ├── animations.css      # Keyframe animations
│   ├── dark-mode.css       # Dark/light theme styles
│   ├── footer.css          # Footer styles
│   ├── projects.css        # Project-specific styles
│   ├── blog.css            # Blog-specific styles
│   └── print.css           # Print stylesheet
├── js/                     # JavaScript files
│   ├── nav.js              # Navigation and mobile menu
│   ├── theme.js            # Theme toggle functionality
│   ├── animations.js       # Scroll reveal animations
│   ├── filter.js           # Project filtering and search
│   └── contact.js          # Contact form validation
└── README.md               # This file
```

## Setup & Local Development
```bash
# Option 1: Open directly (no server needed for most features)
open index.html

# Option 2: Local server (required for page transitions and some JS APIs)
npx serve .
# or
python3 -m http.server 8000
```

## Deployment

### GitHub Pages
1. Push to GitHub repository
2. Go to Settings → Pages → Source: Deploy from branch → main → / (root)
3. Site available at https://<!-- REPLACE: username -->.github.io/<!-- REPLACE: repo-name -->

### Netlify  
1. Drag the portfolio/ folder to netlify.com/drop
2. OR connect GitHub repo via Netlify dashboard
3. Build command: (none — static site)
4. Publish directory: . (root)

## Customization Checklist
Replace all placeholder content before launching:

### Personal Info
- [ ] Your name (appears in nav logo, hero h1, footer, meta tags, JSON-LD, README)
- [ ] Your tagline / rotating subtitles in hero
- [ ] Your bio paragraph
- [ ] Profile photo (replace placeholder gradient in hero)
- [ ] Social links (GitHub, LinkedIn, Twitter, Dribbble)
- [ ] Email address
- [ ] Location / timezone

### Projects
- [ ] Project titles, descriptions, tech stacks, links (in projects.html and all projects/*.html)
- [ ] Project screenshots (replace placeholder gradients in /assets/images/projects/)
- [ ] GitHub links for each project
- [ ] Live demo links for each project

### Experience
- [ ] Timeline entries (job titles, companies, dates, descriptions, achievements)
- [ ] Skill percentages in skill bars
- [ ] Certifications and courses

### Meta & SEO
- [ ] Your domain in all og:url, canonical, and sitemap.xml entries
- [ ] OG images (create 1200×630 images in /assets/images/og/)
- [ ] Favicon initials (update favicon.svg)
- [ ] Google Analytics or Plausible tracking ID (optional)

### Resume
- [ ] Replace /assets/resume/resume-placeholder.pdf with your actual resume

### Testimonials
- [ ] Names, titles, companies, quotes

### Blog
- [ ] Post titles, excerpts, dates (or hide section if no posts yet)

## Browser Support
- Chrome/Edge: full support
- Firefox: full support  
- Safari: full support (note: backdrop-filter requires -webkit- prefix — already included)
- IE11: not supported

## Performance Notes
- No external JavaScript libraries
- Google Fonts loaded with preconnect + display:swap
- Images: use WebP format for project screenshots
- All animations use transform/opacity only (GPU-composited)
- IntersectionObserver used for scroll effects (no scroll event listeners)
- CSS minification recommended for production

## Accessibility
- WCAG AA compliant color contrast
- Full keyboard navigation
- Screen reader tested with NVDA and VoiceOver
- prefers-reduced-motion respected in animations
- Semantic HTML5 elements for better screen reader support
- Form labels and error handling for accessibility

## License
MIT — use freely, attribution appreciated.

## Development Credits
Built with modern frontend practices and following accessibility guidelines. 
Template structure designed for easy customization and content population.