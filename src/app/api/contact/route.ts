import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Initialize SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

async function sendEmail(formData: any) {
  try {
    const msg = {
      to: process.env.CONTACT_EMAIL || 'royal_raj@outlook.com',
      from: process.env.SENDGRID_FROM_EMAIL || 'royal_raj@outlook.com', // Must be verified in SendGrid
      subject: `New Contact Form Submission from ${formData.firstName} ${formData.lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0ea5e9; border-bottom: 2px solid #0ea5e9; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #1e293b;">Contact Information</h3>
            <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
            <p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
            <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
            <p><strong>Project Type:</strong> ${formData.projectType}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #0ea5e9; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #1e293b;">Message</h3>
            <p style="line-height: 1.6; color: #475569;">${formData.message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #64748b; font-size: 14px;">
            <p>This message was sent from your portfolio contact form.</p>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Project Type: ${formData.projectType}

Message:
${formData.message}

---
This message was sent from your portfolio contact form.
      `,
      replyTo: formData.email, // Allow you to reply directly to the sender
    };

    await sgMail.send(msg);
    console.log('✅ Email sent successfully via SendGrid');
    return true;
  } catch (error) {
    console.error('SendGrid error:', error);
    throw error;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, projectType, message } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Send email
    await sendEmail({ firstName, lastName, email, phone, projectType, message });

    return NextResponse.json(
      { 
        message: 'Message sent successfully! I will get back to you soon.',
        success: true 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try emailing me directly at royal_raj@outlook.com' },
      { status: 500 }
    );
  }
}
