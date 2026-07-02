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
    url: "https://www.facebook.com/momo.rich.796",
    icon: "fab fa-facebook-f",
    label: "Facebook",
    color: "#1877F2",
    brandColor: "#1877F2"
  },
  
  // LinkedIn Profile
  linkedin: {
    url: "https://www.linkedin.com/in/richmond-odonkor-647690303/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BJByBgOKlR4O2vcBdb1DPqw%3D%3D",
    icon: "fab fa-linkedin-in",
    label: "LinkedIn",
    color: "#0A66C2",
    brandColor: "#0A66C2"
  },
  
  // Instagram Profile
  instagram: {
    url: "https://www.instagram.com/richmond.odonkor/",
    icon: "fab fa-instagram",
    label: "Instagram",
    color: "#E4405F",
    brandColor: "#E4405F"
  },
  
  // TikTok Profile
  tiktok: {
    url: "https://www.tiktok.com/@rich.design86",
    icon: "fab fa-tiktok",
    label: "TikTok",
    color: "#25F4EE",
    brandColor: "#000000"
  },
  
  // Twitter/X Profile
  twitter: {
    url: "https://x.com/Od57141Richmond",
    icon: "fab fa-x-twitter",
    label: "X",
    color: "#000000",
    brandColor: "#000000"
  },
  
  // GitHub Profile
  github: {
    url: "https://github.com/RIch23-momo",
    icon: "fab fa-github",
    label: "GitHub",
    color: "#333333",
    brandColor: "#333333"
  },
  
  // WhatsApp Number (format: country code + number, e.g., 233XXXXXXXXX)
  whatsapp: {
    url: "https://wa.me/+233535900190",
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
