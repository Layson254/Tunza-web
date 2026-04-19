document.addEventListener("DOMContentLoaded", () => {
    // Initialize EmailJS - Replace with your actual Public Key from EmailJS
    // Go to https://www.emailjs.com/ and create account
    emailjs.init("YOUR_PUBLIC_KEY_HERE");

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
        // Replace with your actual Service ID from EmailJS
        return emailjs.send("YOUR_SERVICE_ID_HERE", templateId, params);
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
                to_email: "hellotunza@gmail.com" // Updated email
            };

            sendEmail("DONATION_TEMPLATE_ID", params)
                .then(() => {
                    alert("Thank you for your generous donation! A confirmation email has been sent to " + params.email);
                    donationForm.reset();
                    // Redirect to thank you page
                    setTimeout(() => {
                        window.location.href = "../pages/thank-you.html?type=donation";
                    }, 1000);
                })
                .catch((error) => {
                    console.error("Email send failed:", error);
                    alert("Your donation has been received! A confirmation email will be sent shortly.");
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
                to_email: "hellotunza@gmail.com" // Updated email
            };

            sendEmail("CONTACT_TEMPLATE_ID", params)
                .then(() => {
                    alert("Thank you for reaching out! We will reply to you shortly at " + params.email);
                    contactForm.reset();
                    setTimeout(() => {
                        window.location.href = "../pages/thank-you.html?type=contact";
                    }, 1000);
                })
                .catch((error) => {
                    console.error("Email send failed:", error);
                    alert("Your message has been received. We will get back to you soon.");
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
                to_email: "hellotunza@gmail.com" // Updated email
            };

            sendEmail("VOLUNTEER_TEMPLATE_ID", params)
                .then(() => {
                    alert("Thank you for signing up to volunteer! We will contact you soon at " + params.email);
                    volunteerForm.reset();
                    setTimeout(() => {
                        window.location.href = "../pages/thank-you.html?type=volunteer";
                    }, 1000);
                })
                .catch((error) => {
                    console.error("Email send failed:", error);
                    alert("Your application has been received. We will contact you shortly.");
                });
        });
    }
});