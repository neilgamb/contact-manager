import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./EditContactForm.scss";

const EditContactForm: React.FC = () => {
  const location = useLocation();
  const { contact: initialContact } = location.state || {}; // Retrieve contact from state

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
  });

  useEffect(() => {
    if (initialContact) {
      setContact(initialContact); // Pre-populate form with passed contact data
    }
  }, [initialContact]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  const handleEditContact = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(contact);
    // Add logic to save updated contact data
  };

  return (
    <div className="edit-contact-form">
      <h2>Edit Contact</h2>
      <form onSubmit={handleEditContact}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          value={contact.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={contact.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={contact.phone}
          onChange={handleChange}
          required
        />

        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          value={contact.website}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EditContactForm;
