import Contact from "../models/contactModel.js";

// Create a new contact message
export const submitContactForm = async (req, res) => {
  const { firstName, lastName, email, message } = req.body;

  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newContact = new Contact({ firstName, lastName, email, message });
    await newContact.save();
    res.status(201).json({ message: "Message sent successfully!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

