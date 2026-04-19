document.addEventListener('DOMContentLoaded', function() {
    const donationForm = document.getElementById('donation-form');
    const contactForm = document.getElementById('contact-form');

    if (donationForm) {
        donationForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Handle donation form submission
            const formData = new FormData(donationForm);
            // Process the form data (e.g., send to server)
            console.log('Donation form submitted:', Object.fromEntries(formData));
            alert('Thank you for your donation!');
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Handle contact form submission
            const formData = new FormData(contactForm);
            // Process the form data (e.g., send to server)
            console.log('Contact form submitted:', Object.fromEntries(formData));
            alert('Thank you for your inquiry! We will get back to you soon.');
        });
    }
});