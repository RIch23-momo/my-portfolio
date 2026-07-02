// ============================================================
// Typing Animation
// ============================================================
(function() {
    const typingElement = document.getElementById('typingText');
    if (!typingElement) return;

    const roles = [
        'Software Engineer',
        'Web Developer',
        'Graphic Designer',
        'Data Analyst',
        'AI Advocate',
        'Social Media Manager',
        'IT Consultant'
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let speed = 80;

    function type() {
        const currentRole = roles[roleIndex];
        if (isDeleting) {
            typingElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            speed = 40;
        } else {
            typingElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            speed = 80;
        }

        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            speed = 1200; // pause before deleting
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            speed = 400;
        }

        setTimeout(type, speed);
    }

    type();
})();