/**
 * Experience Section JavaScript
 * ==========================================
 * Handles animations and interactions for the
 * professional experience cards
 */

document.addEventListener('DOMContentLoaded', function() {
  
  /**
   * Initialize the Experience Section
   */
  function initExperienceSection() {
    setupScrollAnimations();
    addHoverEffects();
    setupTechBadgeAnimations();
  }

  /**
   * Set up scroll animations for experience cards
   * Cards animate in when they come into view
   */
  function setupScrollAnimations() {
    const experienceItems = document.querySelectorAll('.experience-item');
    if (experienceItems.length === 0) return;

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Trigger fade in animation
          entry.target.style.animation = 'none';
          // Trigger reflow to restart animation
          void entry.target.offsetWidth;
          entry.target.style.animation = '';
        }
      });
    }, observerOptions);

    experienceItems.forEach(item => {
      observer.observe(item);
    });
  }

  /**
   * Add enhanced hover effects to experience cards
   */
  function addHoverEffects() {
    const cards = document.querySelectorAll('.experience-card');
    
    cards.forEach(card => {
      // Mouse enter effect
      card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
      });

      // Mouse move effect for subtle parallax
      card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) * 0.05;
        const rotateY = (centerX - x) * 0.05;

        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
      });

      // Mouse leave effect
      card.addEventListener('mouseleave', function() {
        this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
      });
    });
  }

  /**
   * Add animations to technology badges
   */
  function setupTechBadgeAnimations() {
    const badges = document.querySelectorAll('.tech-badge');

    badges.forEach((badge, index) => {
      badge.addEventListener('mouseenter', function() {
        this.style.animation = `pulse 0.6s ease-out`;
      });

      badge.addEventListener('mouseleave', function() {
        this.style.animation = 'none';
      });
    });
  }

  /**
   * Smooth scroll to portfolio section
   */
  function setupPortfolioLink() {
    const portfolioLinks = document.querySelectorAll('a[href="#portfolio"]');
    portfolioLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector('#portfolio');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  /**
   * Add staggered animation on page load
   */
  function setupPageLoadAnimation() {
    const experienceItems = document.querySelectorAll('.experience-item');
    experienceItems.forEach((item, index) => {
      item.style.animationDelay = `${0.1 * (index + 1)}s`;
    });
  }

  /**
   * Add scroll progress indicator
   */
  function setupScrollProgress() {
    const experienceSection = document.querySelector('.experience-section');
    if (!experienceSection) return;

    window.addEventListener('scroll', function() {
      const rect = experienceSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress (0 to 1)
      const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight + rect.height)));
      
      // Update timeline progress bar if it exists
      const timelineBar = experienceSection.querySelector('.experience-timeline::before');
      if (timelineBar) {
        experienceSection.style.setProperty('--scroll-progress', progress * 100 + '%');
      }
    });
  }

  /**
   * Count and display experience statistics
   */
  function displayExperienceStats() {
    const cards = document.querySelectorAll('.experience-card');
    const technologies = new Set();
    
    cards.forEach(card => {
      const badges = card.querySelectorAll('.tech-badge');
      badges.forEach(badge => {
        technologies.add(badge.textContent.trim());
      });
    });

    // Store stats globally if needed
    window.experienceStats = {
      totalRoles: cards.length,
      uniqueTechnologies: technologies.size,
      technologies: Array.from(technologies)
    };
  }

  /**
   * Add keyboard navigation
   */
  function setupKeyboardNavigation() {
    const cards = document.querySelectorAll('.experience-card');
    
    cards.forEach((card, index) => {
      card.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowDown' && index < cards.length - 1) {
          e.preventDefault();
          cards[index + 1].focus();
          cards[index + 1].scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else if (e.key === 'ArrowUp' && index > 0) {
          e.preventDefault();
          cards[index - 1].focus();
          cards[index - 1].scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      });
    });
  }

  // Initialize everything
  setupPageLoadAnimation();
  initExperienceSection();
  setupPortfolioLink();
  setupScrollProgress();
  displayExperienceStats();
  setupKeyboardNavigation();

  // Log experience stats for debugging
  console.log('Experience Section Initialized', {
    totalRoles: window.experienceStats.totalRoles,
    technologies: window.experienceStats.technologies
  });
});

/**
 * Pulse animation for badges
 * Defined here for global use
 */
const style = document.createElement('style');
style.textContent = `
  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }
`;
document.head.appendChild(style);
