document.addEventListener("DOMContentLoaded", () => {
    // Initialize EmailJS
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key

    const navToggle = document.getElementById("nav-toggle");
    const siteNav = document.getElementById("site-nav");
    const carouselTrack = document.getElementById("carousel-track");
    const prevButton = document.getElementById("carousel-prev");
    const nextButton = document.getElementById("carousel-next");

    if (navToggle && siteNav) {
        navToggle.addEventListener("click", () => {
            siteNav.classList.toggle("open");
        });

        document.addEventListener("click", (event) => {
            if (!siteNav.contains(event.target) && !navToggle.contains(event.target)) {
                siteNav.classList.remove("open");
            }
        });
    }

    if (carouselTrack && prevButton && nextButton) {
        let currentIndex = 0;
        const items = Array.from(carouselTrack.children);
        const itemCount = items.length;

        const updateCarousel = () => {
            carouselTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
        };

        prevButton.addEventListener("click", () => {
            currentIndex = (currentIndex - 1 + itemCount) % itemCount;
            updateCarousel();
        });

        nextButton.addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % itemCount;
            updateCarousel();
        });

        setInterval(() => {
            currentIndex = (currentIndex + 1) % itemCount;
            updateCarousel();
        }, 5000);
    }

    const sendEmail = (templateId, params) => {
        return emailjs.send("YOUR_SERVICE_ID", templateId, params); // Replace YOUR_SERVICE_ID
    };

    const donationForm = document.getElementById("donation-form");
    if (donationForm) {
        donationForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const formData = new FormData(donationForm);
            const params = {
                name: formData.get("name"),
                email: formData.get("email"),
                amount: formData.get("amount"),
                api_key: formData.get("api_key"),
                to_email: "hello@tunzadada.org" // Org email
            };

            sendEmail("DONATION_TEMPLATE_ID", params) // Replace with your template ID
                .then(() => {
                    alert("Thank you for your generosity! A confirmation email has been sent.");
                    donationForm.reset();
                })
                .catch((error) => {
                    console.error("Email send failed:", error);
                    alert("Donation submitted, but email notification failed. Please contact us.");
                });
        });
    }

    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const formData = new FormData(contactForm);
            const params = {
                name: formData.get("name"),
                email: formData.get("email"),
                message: formData.get("message"),
                to_email: "hello@tunzadada.org"
            };

            sendEmail("CONTACT_TEMPLATE_ID", params) // Replace with your template ID
                .then(() => {
                    alert("Thank you for reaching out! We will reply to you shortly.");
                    contactForm.reset();
                })
                .catch((error) => {
                    console.error("Email send failed:", error);
                    alert("Message sent, but email notification failed.");
                });
        });
    }

    const volunteerForm = document.getElementById("volunteer-form");
    if (volunteerForm) {
        volunteerForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const formData = new FormData(volunteerForm);
            const params = {
                name: formData.get("name"),
                email: formData.get("email"),
                message: formData.get("message"),
                to_email: "hello@tunzadada.org"
            };

            sendEmail("VOLUNTEER_TEMPLATE_ID", params) // Replace with your template ID
                .then(() => {
                    alert("Thank you for signing up to volunteer! We will contact you soon.");
                    volunteerForm.reset();
                })
                .catch((error) => {
                    console.error("Email send failed:", error);
                    alert("Volunteer application submitted, but email notification failed.");
                });
        });
    }
});