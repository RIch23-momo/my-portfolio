/**
 * Social Media Configuration
 * ==========================================
 * Centralized storage for all social media links
 * Update this file to change your social accounts
 * across the entire website at once.
 */

const socialLinks = {
  // Facebook Profile
  facebook: {
    url: "https://facebook.com/your-username",
    icon: "fab fa-facebook-f",
    label: "Facebook",
    color: "#1877F2",
    brandColor: "#1877F2"
  },
  
  // LinkedIn Profile
  linkedin: {
    url: "https://linkedin.com/in/your-username",
    icon: "fab fa-linkedin-in",
    label: "LinkedIn",
    color: "#0A66C2",
    brandColor: "#0A66C2"
  },
  
  // Instagram Profile
  instagram: {
    url: "https://instagram.com/your-username",
    icon: "fab fa-instagram",
    label: "Instagram",
    color: "#E4405F",
    brandColor: "#E4405F"
  },
  
  // TikTok Profile
  tiktok: {
    url: "https://tiktok.com/@your-username",
    icon: "fab fa-tiktok",
    label: "TikTok",
    color: "#25F4EE",
    brandColor: "#000000"
  },
  
  // Twitter/X Profile
  twitter: {
    url: "https://x.com/your-username",
    icon: "fab fa-x-twitter",
    label: "X",
    color: "#000000",
    brandColor: "#000000"
  },
  
  // GitHub Profile
  github: {
    url: "https://github.com/your-username",
    icon: "fab fa-github",
    label: "GitHub",
    color: "#333333",
    brandColor: "#333333"
  },
  
  // WhatsApp Number (format: country code + number, e.g., 233XXXXXXXXX)
  whatsapp: {
    url: "https://wa.me/233XXXXXXXXX",
    icon: "fab fa-whatsapp",
    label: "WhatsApp",
    color: "#25D366",
    brandColor: "#25D366"
  }
};

/**
 * Get a specific social link configuration
 * @param {string} platform - The social platform key
 * @returns {object} Social platform configuration object
 */
function getSocialLink(platform) {
  return socialLinks[platform] || null;
}

/**
 * Get all social links
 * @returns {object} All social platform configurations
 */
function getAllSocialLinks() {
  return socialLinks;
}

/**
 * Update a social link URL
 * @param {string} platform - The social platform key
 * @param {string} url - The new URL
 */
function updateSocialLink(platform, url) {
  if (socialLinks[platform]) {
    socialLinks[platform].url = url;
  }
}

// Export for use in other files (if using modules)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { socialLinks, getSocialLink, getAllSocialLinks, updateSocialLink };
}
