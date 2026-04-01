require("dotenv").config();

console.log("USER:", process.env.EMAIL_USER);
console.log("PASS:", process.env.EMAIL_PASS);

const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

// Create transporter once
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// CONTACT ROUTE
app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  // Basic spam protection
  if (!name || !email || !message) {
    return res.status(400).json({ msg: "All fields are required." });
  }

  try {
    // EMAIL TO YOU
    await transporter.sendMail({
      from: `"LR Flooring Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `📩 New Website Enquiry - ${name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr/>
        <p>Sent via your LR Flooring website</p>
      `,
    });

    // AUTO REPLY TO CLIENT ⭐
    await transporter.sendMail({
      from: `"LR Flooring & Blinds" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "✅ Thanks for contacting LR Flooring & Blinds",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #2c3e50;">Hi ${name},</h2>
          <p>Thank you for reaching out to <strong>LR Flooring & Blinds</strong>!</p>
          <p>We have received your message and one of our team members will get back to you within 24 hours.</p>
          <p>If your enquiry is urgent, you can also call us at <strong>+27 65 555 5555</strong>.</p>
          <br/>
          <p>Best regards,<br/><strong>LR Flooring Team</strong></p>
          <hr/>
          <small style="color: #999;">This email was sent automatically. Please do not reply to this email.</small>
        </div>
      `,
    });

    res.json({ msg: "✅ Message sent successfully! A confirmation email has been sent to your client." });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ msg: "❌ Failed to send email" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});