require("dotenv").config();

const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: process.env.FRONTEND_URL,
}));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const escapeHtml = (str) =>
  str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ msg: "All fields are required." });
  }

  if (!emailRegex.test(email)) {
    return res.status(400).json({ msg: "❌ Invalid email address." });
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message);

  try {
    // Email to you
    await transporter.sendMail({
      from: `"LR Flooring Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `📩 New Website Enquiry - ${safeName}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
        <hr/>
        <p>Sent via your LR Flooring website</p>
      `,
    });

    // Auto-reply to client
    await transporter.sendMail({
      from: `"LR Flooring & Blinds" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "✅ Thanks for contacting LR Flooring & Blinds",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #2c3e50;">Hi ${safeName},</h2>
          <p>Thank you for reaching out to <strong>LR Flooring & Blinds</strong>!</p>
          <p>We have received your message and will get back to you within 24 hours.</p>
          <p>If your enquiry is urgent, you can also call us at <strong>+27 84 738 9399</strong>.</p>
          <br/>
          <p>Best regards,<br/><strong>LR Flooring Team</strong></p>
          <hr/>
          <small style="color: #999;">This is an automated reply. Please do not respond to this email.</small>
        </div>
      `,
    });

    res.json({ msg: "✅ Message sent! A confirmation email has been sent to you." });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ msg: "❌ Failed to send email, please try again." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});