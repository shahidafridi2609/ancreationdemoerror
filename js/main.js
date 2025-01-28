document.addEventListener('DOMContentLoaded', () => {
    // Load Header
    fetch('components\header\header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;

            // Once header is loaded, run smooth scroll initialization
            $(document).ready(function() {
                $('a[href^="#"]').on('click', function(e) {
                    var target = $(this.getAttribute('href'));
                    if (target.length) {
                        e.preventDefault();  // Prevent default anchor link behavior
                        $('html, body').animate({
                            scrollTop: target.offset().top
                        }, 800); // 800ms duration for smooth scroll
                    }
                });
            });

            // Load the header-specific JavaScript (if any)
            const script = document.createElement('script');
            script.src = 'components\header\header.js';
            document.body.appendChild(script);
        })
        .catch(error => console.error('Error loading the header:', error));

    // Load Footer
    fetch('components\footer\footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error loading the footer:', error));

    // Load Contact Form
    fetch('components\form\contact-form.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('contact-form-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error loading the contact form:', error));
});
