/**
 * Navigation & Mobile Menu Management
 */

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const siteHeader = document.querySelector('.site-header');

  // Mobile menu toggle
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', isOpen);
      
      const iconOpen = menuToggle.querySelector('.icon-menu-open');
      const iconClose = menuToggle.querySelector('.icon-menu-close');
      if (iconOpen && iconClose) {
        iconOpen.style.display = isOpen ? 'none' : 'block';
        iconClose.style.display = isOpen ? 'block' : 'none';
      }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
        navLinks.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
        const iconOpen = menuToggle.querySelector('.icon-menu-open');
        const iconClose = menuToggle.querySelector('.icon-menu-close');
        if (iconOpen && iconClose) {
          iconOpen.style.display = 'block';
          iconClose.style.display = 'none';
        }
      }
    });
  }

  // Active page link detection
  const currentPath = window.location.pathname.replace(/\/$/, '') || '/index.html';
  const links = document.querySelectorAll('.nav-link');
  
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    
    const cleanHref = href.replace(/\/$/, '').replace(/^\./, '');
    if (currentPath.endsWith(cleanHref) || (currentPath.endsWith('/') && cleanHref.includes('index.html'))) {
      link.classList.add('active');
    }
  });

  // Sticky header shadow on scroll
  window.addEventListener('scroll', () => {
    if (siteHeader) {
      if (window.scrollY > 20) {
        siteHeader.style.boxShadow = 'var(--shadow-sm)';
      } else {
        siteHeader.style.boxShadow = 'none';
      }
    }
  });
});
