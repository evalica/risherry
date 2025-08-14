/**
 * Table of Contents Module
 * Mobile-only TOC with floating action button design
 */

export function initializeMobileTOC() {
    const mobileTocNav = document.getElementById('mobileTocNav');
    const mobileTocToggle = document.getElementById('mobileTocToggle');
    const mobileTocLinks = document.querySelectorAll('.mobile-toc-link');
    const sections = document.querySelectorAll('section[id]');
    
    // Check if mobile TOC elements exist before proceeding
    if (!mobileTocNav) {
        console.warn('Mobile TOC navigation element not found');
        return;
    }
    
    // Mobile TOC toggle functionality
    if (mobileTocToggle) {
        mobileTocToggle.addEventListener('click', () => {
            mobileTocNav.classList.toggle('expanded');
        });
    }

    // Close mobile TOC when clicking outside
    document.addEventListener('click', (e) => {
        if (mobileTocNav && 
            !mobileTocNav.contains(e.target) && 
            mobileTocNav.classList.contains('expanded')) {
            mobileTocNav.classList.remove('expanded');
        }
    });

    // Intersection Observer for mobile TOC highlighting
    const mobileTocObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const sectionId = entry.target.id;
            const correspondingLink = document.querySelector(`.mobile-toc-link[data-section="${sectionId}"]`);
            
            if (entry.isIntersecting) {
                // Remove active class from all links
                mobileTocLinks.forEach(link => link.classList.remove('active'));
                
                // Add active class to current section link
                if (correspondingLink) {
                    correspondingLink.classList.add('active');
                }
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '-100px 0px -50% 0px'
    });

    // Observe all sections with IDs
    sections.forEach(section => {
        mobileTocObserver.observe(section);
    });

    // Mobile TOC link click handlers
    mobileTocLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-section');
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // Close mobile TOC after clicking
                if (mobileTocNav) {
                    mobileTocNav.classList.remove('expanded');
                }
                
                // Smooth scroll to section
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}
