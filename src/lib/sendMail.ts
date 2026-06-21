"use server";
import nodemailer from "nodemailer";

// Base email sending function
const sendEmail = async (email: string, html: string, subject: string) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SENDER_EMAIL,
        pass: process.env.SENDER_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Email configuration
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mailOptions: any = {
      from: email,
      to: "pallabkumar26@gmail.com",
      subject,
      html,
    };

    // Sending the email
    const info = await transporter.sendMail(mailOptions);
    // console.log('Email sent:', info.messageId);
    return info;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
};

// Email for message
export const sendPortfolioMessage = async (
  name: string,
  email: string,
  message: string,
) => {
  const htmlTemplate = `
      <div class="container">
        <div class="header">New Message from Your Portfolio</div>
        <div class="content">
          <p><span class="info">Name:</span> ${name}</p>
          <p><span class="info">Email:</span> ${email}</p>
          <p><span class="info">Message:</span></p>
          <p style="background: #f9f9f9; padding: 10px; border-radius: 5px;">${message}</p>
        </div>
        <div class="footer">This message was sent from your portfolio contact form.</div>
      </div>
    `;

  return await sendEmail(
    email,
    htmlTemplate,
    "New Message from Your Portfolio",
  );
};
