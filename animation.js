// ============================================================
// Back to Top button visibility
// ============================================================
(function() {
    const backBtn = document.getElementById('backToTop');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            backBtn.style.display = 'flex';
        } else {
            backBtn.style.display = 'none';
        }
    });
})();