// ============================================================
// Contact Form
// ============================================================
(function() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let valid = true;
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            if (input.hasAttribute('required') && !input.value.trim()) {
                input.classList.add('is-invalid');
                valid = false;
            } else {
                input.classList.remove('is-invalid');
            }
        });

        const email = document.getElementById('contactEmail');
        if (email && email.value.trim() && !email.value.includes('@')) {
            email.classList.add('is-invalid');
            valid = false;
        }

        if (valid) {
            const status = document.getElementById('formStatus');
            status.innerHTML = '<div class="alert alert-success">Message sent successfully!</div>';
            form.reset();
            setTimeout(() => { status.innerHTML = ''; }, 5000);
        } else {
            const status = document.getElementById('formStatus');
            status.innerHTML = '<div class="alert alert-danger">Please fill in all required fields correctly.</div>';
            setTimeout(() => { status.innerHTML = ''; }, 5000);
        }
    });
})();