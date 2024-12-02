import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { faker } from "@faker-js/faker";
import { useAddContactMutation } from "../features/contacts/contactsApi";
import "./AddContactForm.scss";

const AddContactForm: React.FC = () => {
  const navigate = useNavigate();
  const [addContact] = useAddContactMutation();
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  const handleAddContact = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await addContact(contact);
      if (result && result.data) {
        navigate(`/contact/${result.data.id}`);
      }
    } catch (error) {
      console.log("error", error);
    } finally {
      resetForm();
    }
  };

  const handleAutoGenerate = () => {
    const randomContact = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
      website: faker.internet.url(),
    };

    setContact(randomContact);
  };

  const resetForm = () => {
    setContact({ name: "", email: "", phone: "", website: "" });
  };

  const isFormValid = Object.values(contact).every((value) => value);

  return (
    <div className="add-contact-form">
      <h2>Add New Contact</h2>
      <form onSubmit={handleAddContact}>
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

        <div className="btn-container">
          <button type="button" onClick={handleAutoGenerate}>
            🔄
          </button>
          <button type="submit" disabled={!isFormValid}>
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddContactForm;
