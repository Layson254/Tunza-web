# Tunza Dada Website - Setup Instructions

This document explains how to configure the website for full functionality.

## 1. EmailJS Setup (Email Notifications)

The website uses EmailJS to send email notifications for donations, volunteer applications, and contact forms.

### Steps:

1. **Create an EmailJS Account**
   - Go to https://www.emailjs.com/
   - Sign up for a free account
   - Verify your email

2. **Create an Email Service**
   - In the EmailJS dashboard, go to "Email Services"
   - Click "Create New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the provider authentication steps
   - Copy your **Service ID**

3. **Create Email Templates**
   - Go to "Email Templates" in your dashboard
   - Create 3 templates:

   **Template 1: DONATION_TEMPLATE**
   - Subject: `Thank You for Your Donation - Tunza Dada`
   - Content:
     ```
     Hi {{name}},

     Thank you for your generous donation of ${{amount}}. Your support helps us empower girls and women in our communities.

     We will send a detailed receipt to this email shortly.

     Best regards,
     Tunza Dada Team
     ```

   **Template 2: VOLUNTEER_TEMPLATE**
   - Subject: `Welcome to Tunza Dada Volunteer Program`
   - Content:
     ```
     Hi {{name}},

     Thank you for your interest in volunteering with Tunza Dada!

     Message from your application:
     {{message}}

     We will review your application and contact you within 24 hours with next steps.

     Best regards,
     Tunza Dada Team
     ```

   **Template 3: CONTACT_TEMPLATE**
   - Subject: `We Received Your Message - Tunza Dada`
   - Content:
     ```
     Hi {{name}},

     Thank you for reaching out to us! We have received your message and will respond within 24 hours.

     Your message:
     {{message}}

     Best regards,
     Tunza Dada Team
     ```

4. **Get Your Credentials**
   - Go to "Account" > "API Keys" in EmailJS dashboard
   - Copy your **Public Key**

5. **Update the Website Code**
   - In `src/js/main.js`, replace:
     - `YOUR_PUBLIC_KEY_HERE` with your EmailJS Public Key
     - `YOUR_SERVICE_ID_HERE` with your Service ID
   - Replace template IDs:
     - `DONATION_TEMPLATE_ID` with your Donation Template ID
     - `VOLUNTEER_TEMPLATE_ID` with your Volunteer Template ID
     - `CONTACT_TEMPLATE_ID` with your Contact Template ID

## 2. Cloudflare Setup (Security & Performance)

Cloudflare provides free CDN, DDoS protection, and security features.

### Steps:

1. **Create a Cloudflare Account**
   - Go to https://www.cloudflare.com/
   - Sign up for a free account

2. **Add Your Domain**
   - In Cloudflare dashboard, click "Add a Site"
   - Enter your domain (e.g., tunzadada.com)
   - Select the free plan
   - Cloudflare will scan your DNS records

3. **Update Nameservers**
   - Cloudflare will provide 2 nameserver addresses
   - Go to your domain registrar (Namecheap, GoDaddy, etc.)
   - Update nameservers to Cloudflare's addresses
   - Wait 24-48 hours for DNS to propagate

4. **Configure SSL/TLS**
   - In Cloudflare dashboard, go to SSL/TLS
   - Set encryption mode to "Flexible" or "Full"
   - Enable "Always Use HTTPS"

5. **Additional Security**
   - Go to "Security" > "WAF"
   - Enable DDoS protection (free tier included)
   - Enable Bot Management if available

## 3. PesaPal Payment Integration

PesaPal iframe is already embedded in the donate page. To customize:

1. **Create a PesaPal Account**
   - Visit https://www.pesapal.com/
   - Sign up for a merchant account

2. **Update the iframe**
   - In `src/pages/donate.html`, replace:
     ```
     https://store.pesapal.com/tunzadada
     ```
   - With your PesaPal store URL

## 4. GitHub & Vercel Deployment

The website is already linked to GitHub and Vercel. Deployments happen automatically when you:
- Push changes to the `main` branch
- Vercel rebuilds and deploys within 1-2 minutes

## 5. Testing

### Test Email Notifications:
1. Fill out any form (donate, volunteer, contact)
2. Check the recipient inbox (hellotunza@gmail.com)
3. Verify emails are sent and formatted correctly

### Test Cloudflare:
1. Visit your domain in a browser
2. Check if "CF" (Cloudflare) badge appears in the browser bar
3. Run a speed test on https://www.speedtest.net/

## 6. Social Media Links

The following social media accounts are linked in the footer:
- LinkedIn: https://www.linkedin.com/company/tunzadada
- Instagram: https://www.instagram.com/tunza.dada/
- Facebook: https://web.facebook.com/tunzadada/

## Support Contacts

- Organization Email: hellotunza@gmail.com
- Primary Email: hello@tunzadada.org
- Phone: +254 733 708 224
- Location: Nairobi, Kenya

## File Structure

```
src/
├── index.html          # Homepage
├── css/
│   └── styles.css      # All styling
├── js/
│   ├── main.js         # Main functionality
│   └── thank-you.js    # Thank you page logic
└── pages/
    ├── about.html      # About page
    ├── contact.html    # Contact page
    ├── donate.html     # Donation page
    ├── programs.html   # Programs page
    └── thank-you.html  # Thank you page
└── volunteer/
    └── index.html      # Volunteer page
```

---

**Last Updated:** April 19, 2026
**For Questions:** Contact hello@tunzadada.org
