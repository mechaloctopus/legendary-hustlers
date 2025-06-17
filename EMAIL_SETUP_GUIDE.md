# Email Setup Guide for Contact Form

Your contact form is now configured to send emails to `office@legendaryhustlers.com`. Here's how to complete the setup:

## Option 1: EmailJS (Recommended - Easy Setup)

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. The free plan allows 200 emails per month

### Step 2: Set Up Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Note your **Service ID**

### Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Contact Form Submission - {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Service Needed: {{service}}

Message:
{{message}}

Files Attached: {{files_count}}

---
This message was sent from the Legendary Hustlers contact form.
Reply directly to this email to respond to the customer.
```

4. Note your **Template ID**

### Step 4: Get Public Key
1. Go to "Account" settings
2. Find your **Public Key**

### Step 5: Configure Environment Variables
Create a file called `.env.local` in your project root with:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

Replace the placeholder values with your actual EmailJS credentials.

### Step 6: Test the Form
1. Restart your development server: `npm run dev`
2. Fill out and submit the contact form
3. Check your email at office@legendaryhustlers.com

---

## Option 2: Nodemailer with API Route (More Advanced)

If you prefer a backend solution:

### Step 1: Install Dependencies
```bash
npm install nodemailer @types/nodemailer
```

### Step 2: Create API Route
Create `src/app/api/contact/route.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // Create transporter (example with Gmail)
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Use App Password for Gmail
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'office@legendaryhustlers.com',
      replyTo: email,
      subject: `New Contact Form Submission - ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
```

### Step 3: Update Contact Form
Replace the EmailJS code in ContactSection.tsx with:

```typescript
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
});

if (!response.ok) throw new Error('Failed to send');
```

---

## Option 3: Third-Party Services

### Formspree (Easiest)
1. Go to [https://formspree.io/](https://formspree.io/)
2. Create account and get form endpoint
3. Update form action to point to Formspree

### Netlify Forms (If hosting on Netlify)
1. Add `netlify` attribute to form
2. Netlify automatically handles form submissions

---

## Recommended: Start with EmailJS

EmailJS is the easiest to set up and works immediately. Follow the EmailJS steps above, and your contact form will be sending emails within 10 minutes!

## Need Help?

If you run into issues:
1. Check the browser console for error messages
2. Verify your EmailJS credentials are correct
3. Make sure your `.env.local` file is in the project root
4. Restart your development server after adding environment variables

The contact form is already coded and ready - you just need to add your EmailJS credentials! 