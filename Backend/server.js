require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { Resend } = require("resend");

const app = express();
const PORT = process.env.PORT || 5000;
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(cors({
  origin: process.env.FRONTEND_URL,
}));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend running 🚀");
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
    await resend.emails.send({
      from: "LR Flooring <onboarding@resend.dev>",
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

    res.json({ msg: "✅ Message sent! We will get back to you soon." });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ msg: "❌ Failed to send email, please try again." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
