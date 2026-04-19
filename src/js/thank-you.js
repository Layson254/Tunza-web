document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const type = params.get("type");

    const titleElement = document.getElementById("thank-you-title");
    const messageElement = document.getElementById("thank-you-message");

    if (type === "donation") {
        titleElement.textContent = "Thank You for Your Donation";
        messageElement.textContent = "Your generous contribution will help us empower girls and women in our communities. A confirmation receipt has been sent to your email address.";
    } else if (type === "volunteer") {
        titleElement.textContent = "Thank You for Volunteering";
        messageElement.textContent = "We're excited to have you join our mission! Our team will review your application and contact you within 24 hours with next steps.";
    } else if (type === "contact") {
        titleElement.textContent = "Thank You for Reaching Out";
        messageElement.textContent = "We've received your message and will get back to you as soon as possible. Check your email for our response.";
    }
});
