import Contact from "../models/contactModel.js";
import sendEmail from "../utils/SendingMail.js"
// Create a new contact message
export const submitContactForm = async (req, res) => {
  const { firstName, lastName, email, message,phone } = req.body;

  if (!firstName || !lastName || !email || !message || !phone) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newContact = new Contact({ firstName, lastName, email, message,phone });
    await newContact.save();

    // Send email notification
    const subject = "New Contact Form Submission";
    const text = `You have received a new contact form submission:\n\nName: ${firstName} ${lastName}\nEmail: ${email}\nPhone no: ${phone}\nMessage: ${message}`;
    
    await sendEmail(process.env.EMAIL_USER, subject, text); // Replace with your recipient email

    res.status(201).json({ message: "Message sent successfully!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

