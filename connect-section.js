/**
 * Connect Section JavaScript
 * ==========================================
 * Handles animations and interactions for the
 * "Connect With Me" social media section
 */

document.addEventListener('DOMContentLoaded', function() {
  
  /**
   * Initialize the Connect Section
   * - Set up social icon links from config
   * - Initialize animations on scroll
   */
  function initConnectSection() {
    buildSocialIconsGrid();
    initScrollAnimations();
    setupWhatsAppButton();
  }

  /**
   * Build the social icons grid dynamically from socialLinks config
   * This allows easy updates - just modify social-config.js
   */
  function buildSocialIconsGrid() {
    const grid = document.querySelector('.social-icons-grid');
    if (!grid) return;

    // Clear existing icons
    grid.innerHTML = '';

    // Define the order of social platforms
    const platformOrder = ['facebook', 'linkedin', 'instagram', 'tiktok', 'twitter', 'github', 'whatsapp'];

    // Build icons from config
    platformOrder.forEach(platform => {
      const social = socialLinks[platform];
      if (social) {
        const iconWrapper = document.createElement('div');
        iconWrapper.className = 'social-icon-wrapper';

        const link = document.createElement('a');
        link.href = social.url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.className = 'social-icon-link';
        link.setAttribute('data-platform', platform);
        link.setAttribute('aria-label', `Visit ${social.label}`);
        link.title = social.label;

        // Create icon element
        const icon = document.createElement('i');
        icon.className = social.icon;

        // Create tooltip
        const tooltip = document.createElement('span');
        tooltip.className = 'tooltip-text';
        tooltip.textContent = social.label;

        link.appendChild(icon);
        link.appendChild(tooltip);
        iconWrapper.appendChild(link);
        grid.appendChild(iconWrapper);

        // Add hover effects with brand colors
        link.addEventListener('mouseenter', function() {
          // Optional: Add custom animation or effect here
        });
      }
    });
  }

  /**
   * Initialize scroll animations
   * Triggers animations when section comes into view
   */
  function initScrollAnimations() {
    const connectSection = document.querySelector('.connect-section');
    if (!connectSection) return;

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Trigger animations when in view
          entry.target.classList.add('in-view');
          
          // Optional: Trigger individual icon animations
          const icons = entry.target.querySelectorAll('.social-icon-wrapper');
          icons.forEach((icon, index) => {
            icon.style.animationDelay = `${0.1 * (index + 1)}s`;
          });

          // Stop observing after animation is triggered
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    observer.observe(connectSection);
  }

  /**
   * Set up the floating WhatsApp button
   * Links to WhatsApp using the configured phone number
   */
  function setupWhatsAppButton() {
    const whatsappBtn = document.querySelector('.floating-whatsapp');
    if (!whatsappBtn && socialLinks.whatsapp) {
      // Button may not exist yet, create it if needed
      // Or assume it's created in HTML
    }

    // Ensure WhatsApp button uses the correct URL from config
    if (whatsappBtn && socialLinks.whatsapp) {
      whatsappBtn.href = socialLinks.whatsapp.url;
      whatsappBtn.setAttribute('aria-label', 'Contact us on WhatsApp');
      whatsappBtn.title = 'Contact us on WhatsApp';
    }
  }

  /**
   * Handle smooth scroll to section when clicking nav link
   */
  function handleSectionScroll() {
    const connectLink = document.querySelector('a[href="#connect"]');
    if (connectLink) {
      connectLink.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector('#connect');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  }

  /**
   * Add ripple effect to social icons on click
   */
  function addRippleEffect() {
    const socialIcons = document.querySelectorAll('.social-icon-link');
    socialIcons.forEach(icon => {
      icon.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        this.appendChild(ripple);

        // Remove ripple after animation
        setTimeout(() => ripple.remove(), 600);
      });
    });
  }

  /**
   * Toggle floating WhatsApp button visibility on scroll
   */
  function handleFloatingButtonVisibility() {
    const whatsappBtn = document.querySelector('.floating-whatsapp');
    if (!whatsappBtn) return;

    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        whatsappBtn.style.display = 'flex';
      } else {
        whatsappBtn.style.display = 'none';
      }
    });

    // Initialize visibility
    if (window.scrollY <= 300) {
      whatsappBtn.style.display = 'none';
    }
  }

  /**
   * Update social links dynamically
   * Example: updateSocialLink('linkedin', 'https://linkedin.com/in/newusername');
   */
  window.updateSocialMediaLinks = function(updates) {
    Object.keys(updates).forEach(platform => {
      if (socialLinks[platform]) {
        socialLinks[platform].url = updates[platform];
      }
    });
    buildSocialIconsGrid();
  };

  // Initialize everything
  initConnectSection();
  handleSectionScroll();
  addRippleEffect();
  handleFloatingButtonVisibility();
});
