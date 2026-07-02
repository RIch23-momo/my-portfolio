# Social Media Configuration Guide

## Overview
The "Connect With Me" section displays social media icons with professional styling, hover animations, and brand colors. All social links are centrally managed in `social-config.js` for easy updates.

## Quick Start

### Update Your Social Media Links

Open `social-config.js` and replace the placeholder URLs with your actual social media handles:

```javascript
const socialLinks = {
  facebook: {
    url: "https://facebook.com/YOUR-USERNAME",  // Change this
    // ... rest of config
  },
  linkedin: {
    url: "https://linkedin.com/in/YOUR-USERNAME",  // Change this
    // ... rest of config
  },
  instagram: {
    url: "https://instagram.com/YOUR-USERNAME",  // Change this
    // ... rest of config
  },
  // ... and so on for other platforms
};
```

## Platforms Included

1. **Facebook** - `https://facebook.com/your-username`
2. **LinkedIn** - `https://linkedin.com/in/your-username`
3. **Instagram** - `https://instagram.com/your-username`
4. **TikTok** - `https://tiktok.com/@your-username`
5. **Twitter/X** - `https://x.com/your-username`
6. **GitHub** - `https://github.com/your-username`
7. **WhatsApp** - `https://wa.me/233XXXXXXXXX` (use your phone number)

## Files Included

- **social-config.js** - Centralized configuration for all social media links
- **connect-section.css** - Styling for the "Connect With Me" section and floating WhatsApp button
- **connect-section.js** - JavaScript for animations and interactions
- **footer-connect.js** - Populates the footer with social icons from config

## Features

### Main Connect Section
- ✅ Centered heading with "Let's Connect"
- ✅ Horizontal grid of social icons (responsive)
- ✅ Official Font Awesome icons for each platform
- ✅ Brand colors for each platform on hover
- ✅ Smooth scale and glow animations
- ✅ Tooltips showing platform names
- ✅ Entrance animations on page load
- ✅ Opens links in new tabs safely

### Floating WhatsApp Button
- ✅ Fixed position at bottom-right corner
- ✅ Green color matching WhatsApp branding
- ✅ Appears after scrolling 300px down
- ✅ Smooth animations and hover effects
- ✅ Pulse animation on hover

### Footer Integration
- ✅ Social icons also appear in footer
- ✅ Same styling as main section
- ✅ Brand colors for each platform
- ✅ Consistent with main site design

## Customization

### Change Social Media Links
Edit `social-config.js` - this is the only file you need to modify for link updates.

### Modify Hover Colors
Edit the brand colors in `social-config.js` or the hover styles in `connect-section.css`:

```css
.social-icon-link[data-platform="facebook"]:hover {
  background: #1877F2;  /* Facebook blue */
  color: white;
}
/* ... repeat for other platforms */
```

### Adjust Animations
Modify animation timing in `connect-section.css`:

```css
.social-icon-link:hover {
  transform: scale(1.3) rotate(5deg);  /* Adjust scale and rotation */
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);  /* Adjust speed */
}
```

### Customize Icon Sizes
Edit `connect-section.css`:

```css
.social-icon-link {
  width: 70px;   /* Icon container width */
  height: 70px;  /* Icon container height */
  font-size: 1.8rem;  /* Icon size */
}
```

### Hide Floating WhatsApp Button
In `connect-section.js`, modify the visibility logic:

```javascript
function handleFloatingButtonVisibility() {
  const whatsappBtn = document.querySelector('.floating-whatsapp');
  if (!whatsappBtn) return;
  
  // Set display: none to hide, or remove this function call entirely
}
```

## Responsive Design

The section is fully responsive:
- **Desktop** (>768px): Large icons, full animations
- **Tablet** (768px-480px): Medium icons, wrapped layout
- **Mobile** (<480px): Smaller icons, optimized spacing

## Font Awesome Icons Used

Make sure Font Awesome 6.4.0+ is included (already in your project):

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
```

Icons used:
- `fab fa-facebook-f` - Facebook
- `fab fa-linkedin-in` - LinkedIn
- `fab fa-instagram` - Instagram
- `fab fa-tiktok` - TikTok
- `fab fa-x-twitter` - X (Twitter)
- `fab fa-github` - GitHub
- `fab fa-whatsapp` - WhatsApp

## JavaScript Functions

### Update Links Dynamically
```javascript
// Update links at runtime
updateSocialMediaLinks({
  facebook: 'https://facebook.com/newusername',
  linkedin: 'https://linkedin.com/in/newusername'
});
```

### Get a Specific Link
```javascript
const linkedinLink = getSocialLink('linkedin');
console.log(linkedinLink.url);
```

### Get All Links
```javascript
const allLinks = getAllSocialLinks();
console.log(allLinks);
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility Features

- ✅ Semantic HTML with proper `aria-label` attributes
- ✅ Keyboard accessible (tab through icons)
- ✅ Screen reader friendly
- ✅ Proper color contrast
- ✅ `target="_blank"` with `rel="noopener noreferrer"` for security

## Performance Notes

- Icons are loaded with Font Awesome CDN
- CSS animations use GPU acceleration
- Lazy loading for animations on scroll
- Minimal JavaScript overhead

## Troubleshooting

### Icons not showing
- Ensure Font Awesome CSS is loaded: Check network tab in browser DevTools
- Verify Font Awesome CDN is accessible
- Check that `social-config.js` is loaded before `connect-section.js`

### Links not working
- Check URL format in `social-config.js`
- Verify social media handles are correct
- For WhatsApp, use format: `233XXXXXXXXX` (country code + number without +)

### Animations not smooth
- Check CSS transition values in `connect-section.css`
- Verify browser supports CSS animations (most modern browsers do)
- Test in a different browser

### Floating button not appearing
- Scroll down at least 300px on the page
- Check that `connect-section.js` is loaded
- Verify `.floating-whatsapp` element exists in HTML

## Support

For issues or customization help, refer to:
- `social-config.js` - for updating links
- `connect-section.css` - for styling changes
- `connect-section.js` - for animation logic
- Font Awesome docs: https://fontawesome.com

---

**Last Updated:** 2026-07-02
**Version:** 1.0
