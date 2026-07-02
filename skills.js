// ============================================================
// Skills Progress Animation
// ============================================================
(function() {
    const skillItems = document.querySelectorAll('.skill-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const fill = entry.target.querySelector('.progress-fill');
                const percent = entry.target.getAttribute('data-percent');
                if (fill) {
                    fill.style.width = percent + '%';
                }
            }
        });
    }, { threshold: 0.3 });

    skillItems.forEach(item => observer.observe(item));
})();