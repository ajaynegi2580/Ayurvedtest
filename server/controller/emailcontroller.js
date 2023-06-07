import nodemailer from "nodemailer";
import config from "./config/config.js";
// Instance of the mail with Auth...

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  service: "smtp.gmail.com",
  auth: {
    user: config.NODE_USER,
    pass: config.NODE_PASS,
  },
});

export const sendConfirmationEmail = async (
  name,
  email,
  phone,
  newdate,
  slot,
  paymentStatus,
  amount,
  paymentId
) => {
  try {
    const mailOptions = {
      from: config.NODE_USER,
      to: `${email},${config.NODE_USER}`,
      subject: "Appointment Confirmation",
      html: `
        <h3>Appointment Confirmation</h3>
        <p>Your appointment has been confirmed:</p>
        <table>
        <tr>
          <td>Name:</td>
          <td>${name}</td>
        </tr>
        <tr>
        <td>Email:</td>
        <td><span>${email}</span></td>
      </tr>
        <tr>
          <td>Phone:</td>
          <td>${phone}</td>
        </tr>
        <tr>
          <td>Date:</td>
          <td>${newdate}</td>
        </tr>
        <tr>
          <td>Slot:</td>
          <td>${slot}</td>
        </tr>
        <tr>
          <td style="paddfing-right:20px;">Payment Status:</td>
          <td>${paymentStatus}</td>
        </tr>
        <tr>
          <td>Amount:</td>
          <td>${amount} Rs</td>
        </tr>
        <tr>
          <td>Payment ID:</td>
          <td>${paymentId}</td>
        </tr>
      </table>
        <p>Thank you for choosing 1Ayurveda. We look forward to seeing you at your appointment.</p>
        <p>Best regards,</p>
        <p>The 1Ayurveda Team</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log("Email Sent successfully..");
  } catch (err) {
    console.error("Error sending email:", err);
  }
};
