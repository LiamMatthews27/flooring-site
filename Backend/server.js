const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// Example contact form route (you can expand later)
app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  // configure mail transporter (update with your email service)
  let transporter = nodemailer.createTransport({
    service: "gmail", // or use SMTP
    auth: {
      user: "your-email@gmail.com", // replace
      pass: "your-password",       // replace
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: "your-email@gmail.com",
      subject: `New message from ${name}`,
      text: message,
    });
    res.status(200).json({ success: true, msg: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, msg: "Failed to send email" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
