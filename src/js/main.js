document.addEventListener("DOMContentLoaded", () => {
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

    const donationForm = document.getElementById("donation-form");
    if (donationForm) {
        donationForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const formData = new FormData(donationForm);
            console.log("Donation form submitted:", Object.fromEntries(formData));
            alert("Thank you for your generosity! We will reach out to you with next steps.");
            donationForm.reset();
        });
    }

    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const formData = new FormData(contactForm);
            console.log("Contact form submitted:", Object.fromEntries(formData));
            alert("Thank you for reaching out! We will reply to you shortly.");
            contactForm.reset();
        });
    }

    const volunteerForm = document.getElementById("volunteer-form");
    if (volunteerForm) {
        volunteerForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const formData = new FormData(volunteerForm);
            console.log("Volunteer sign-up:", Object.fromEntries(formData));
            alert("Thank you for signing up to volunteer! We will contact you soon.");
            volunteerForm.reset();
        });
    }
});