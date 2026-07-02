/**
 * Services Section JavaScript
 * ==========================================
 * Handles animations, interactions, and effects
 * for the services section
 */

document.addEventListener('DOMContentLoaded', function() {
  
  // Get all service cards and CTA button
  const serviceCards = document.querySelectorAll('.service-card');
  const servicesSection = document.querySelector('.services-section');
  const serviceButtons = document.querySelectorAll('.service-btn');
  const ctaButton = document.querySelector('.cta-button');

  /**
   * Initialize services section
   */
  function init() {
    if (!servicesSection) return;

    setupScrollAnimations();
    setupInteractions();
    setupToolBadgeAnimations();
  }

  /**
   * Setup scroll animations for service cards
   */
  function setupScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Reset animation
          entry.target.style.animation = 'none';
          void entry.target.offsetWidth;  // Trigger reflow
          
          // Calculate stagger delay
          const delay = index * 100;
          entry.target.style.animationDelay = `${delay}ms`;
          entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
          
          // Stop observing once animated
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    serviceCards.forEach(card => {
      observer.observe(card);
    });
  }

  /**
   * Setup card hover and click interactions
   */
  function setupInteractions() {
    serviceCards.forEach(card => {
      // Smooth scroll on service button click
      const serviceBtn = card.querySelector('.service-btn');
      if (serviceBtn) {
        serviceBtn.addEventListener('click', function(e) {
          e.preventDefault();
          const contactSection = document.querySelector('#contact');
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
          }
        });
      }

      // Add ripple effect on click
      card.addEventListener('click', function(e) {
        if (e.target === this || e.target === this.querySelector('.service-card')) {
          createRippleEffect(e, this);
        }
      });
    });
  }

  /**
   * Create ripple effect on card click
   */
  function createRippleEffect(event, element) {
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const size = Math.max(rect.width, rect.height);

    const ripple = document.createElement('div');
    ripple.style.width = size + 'px';
    ripple.style.height = size + 'px';
    ripple.style.left = x - size / 2 + 'px';
    ripple.style.top = y - size / 2 + 'px';
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'rgba(255, 255, 255, 0.5)';
    ripple.style.pointerEvents = 'none';
    ripple.style.animation = 'ripple 0.6s ease-out forwards';

    // Add animation
    if (!document.getElementById('rippleStyles')) {
      const style = document.createElement('style');
      style.id = 'rippleStyles';
      style.textContent = `
        @keyframes ripple {
          to {
            transform: scale(2);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);
    }

    element.style.position = 'relative';
    element.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  }

  /**
   * Animate tool badges on hover
   */
  function setupToolBadgeAnimations() {
    const toolBadges = document.querySelectorAll('.tool-badge');
    
    toolBadges.forEach(badge => {
      badge.addEventListener('mouseenter', function() {
        this.style.animation = 'none';
        void this.offsetWidth;
        this.style.animation = 'badgePulse 0.4s ease-out';
      });
    });
  }

  /**
   * Smooth scroll for CTA button
   */
  if (ctaButton) {
    ctaButton.addEventListener('click', function(e) {
      e.preventDefault();
      const contactSection = document.querySelector('#contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  /**
   * Get services section stats
   */
  window.getServicesStats = function() {
    return {
      totalServices: serviceCards.length,
      servicesOffset: servicesSection ? servicesSection.offsetTop : null,
      servicesHeight: servicesSection ? servicesSection.offsetHeight : null
    };
  };

  /**
   * Manually control service animations
   */
  window.servicesControls = {
    animateCard: (index) => {
      if (serviceCards[index]) {
        serviceCards[index].style.animation = 'none';
        void serviceCards[index].offsetWidth;
        serviceCards[index].style.animation = 'fadeInUp 0.8s ease-out forwards';
      }
    },
    animateAll: () => {
      setupScrollAnimations();
    },
    getStats: window.getServicesStats
  };

  // Initialize services section
  init();

  // Log initialization
  console.log('Services Section Initialized', {
    totalServices: serviceCards.length,
    section: servicesSection ? 'found' : 'not found'
  });
});

/**
 * Add additional CSS animations dynamically
 */
const serviceStyles = document.createElement('style');
serviceStyles.textContent = `
  /* Badge pulse animation */
  @keyframes badgePulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }

  /* Card entrance animation */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Smooth transitions */
  .service-card,
  .service-icon,
  .tool-badge,
  .service-btn {
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  /* Keyboard focus styles */
  .service-btn:focus,
  .cta-button:focus {
    outline: 2px solid var(--primary);
    outline-offset: 2px;
  }

  /* Mobile optimization */
  @media (max-width: 768px) {
    .service-card {
      animation: fadeInUp 0.6s ease-out !important;
    }
  }
`;
document.head.appendChild(serviceStyles);
