/**
 * Footer Social Icons Initialization
 * ==========================================
 * Dynamically populates the footer social icons
 * from the social-config.js configuration
 */

document.addEventListener('DOMContentLoaded', function() {
  
  /**
   * Build footer social icons from config
   */
  function buildFooterSocialIcons() {
    const footerSocial = document.querySelector('.footer-social');
    if (!footerSocial) return;

    // Clear existing links if any
    footerSocial.innerHTML = '';

    // Define the order of social platforms
    const platformOrder = ['facebook', 'linkedin', 'instagram', 'tiktok', 'twitter', 'github', 'whatsapp'];

    // Build icons from config
    platformOrder.forEach(platform => {
      const social = socialLinks[platform];
      if (social) {
        const link = document.createElement('a');
        link.href = social.url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.setAttribute('data-platform', platform);
        link.setAttribute('aria-label', `Visit ${social.label}`);
        link.title = social.label;

        // Create icon element
        const icon = document.createElement('i');
        icon.className = social.icon;

        link.appendChild(icon);
        footerSocial.appendChild(link);
      }
    });
  }

  // Initialize footer social icons
  buildFooterSocialIcons();

  /**
   * Listen for updates to social media links
   * This allows the footer to update when links change
   */
  window.addEventListener('socialLinksUpdated', function() {
    buildFooterSocialIcons();
  });
});
