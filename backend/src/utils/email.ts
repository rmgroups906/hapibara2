import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransporter({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export const sendEmail = async (options: {
  to: string;
  subject: string;
  text?: string;
  html?: string;
}) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: options.to,
      subject: options.subject,
      text: options.text,
      html: options.html,
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Email sending failed:', error);
    throw new Error('Email could not be sent');
  }
};

export const sendWelcomeEmail = async (email: string, name: string) => {
  const subject = 'Welcome to the Hapibara Chill Club! 🦌';
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h1 style="color: #16a34a;">Welcome to Hapibara, ${name}! 🦌</h1>
      <p>We're so excited to have you join our gentle living community.</p>
      <p>Get ready for:</p>
      <ul>
        <li>🥣 Calming plant-based recipes</li>
        <li>🧘 Soft living tips and rituals</li>
        <li>🌿 Mindful product recommendations</li>
        <li>💚 A supportive community of like-minded souls</li>
      </ul>
      <p>Take a deep breath, and welcome to the chill side of life.</p>
      <p>With love,<br>The Hapibara Team</p>
    </div>
  `;

  await sendEmail({ to: email, subject, html });
};

export const sendNewsletterConfirmation = async (email: string) => {
  const subject = 'You\'re in the Chill Club! 🌿';
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h1 style="color: #16a34a;">Welcome to the Chill Club! 🦌</h1>
      <p>Thank you for subscribing to our newsletter.</p>
      <p>You'll receive gentle reminders about:</p>
      <ul>
        <li>New calming recipes</li>
        <li>Soft living blog posts</li>
        <li>Mindful product launches</li>
      </ul>
      <p>Stay calm and carry on,<br>Hapi & the team</p>
    </div>
  `;

  await sendEmail({ to: email, subject, html });
};