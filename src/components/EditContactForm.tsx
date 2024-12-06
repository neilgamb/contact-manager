import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetContactByIdQuery,
  useUpdateContactMutation,
} from "../features/contacts/contactsApi";
import { Contact } from "../types/contact";
import "./EditContactForm.scss";

const EditContactForm: React.FC = () => {
  const { id = "" } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const {
    data: initialContact,
    isLoading,
    isError,
  } = useGetContactByIdQuery({ id });
  const [contact, setContact] = useState<Contact | undefined>(initialContact);
  const [updateContact, { isLoading: isUpdating }] = useUpdateContactMutation();

  useEffect(() => {
    if (initialContact) {
      setContact(initialContact);
    }
  }, [initialContact]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContact((prev) => (prev ? { ...prev, [name]: value } : prev));
  };

  const handleCancel = () => {
    navigate(`/contact/${id}`);
  };

  const handleEditContact = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!contact) {
      return;
    }

    try {
      await updateContact(contact).unwrap();
      navigate(`/contact/${contact.id}`);
    } catch (error) {
      console.error("Error updating contact", error);
    }
  };

  if (isLoading || !contact) {
    return <div className="loading-state-message">Loading...</div>;
  }

  if (isUpdating) {
    return <div className="loading-state-message">Saving...</div>;
  }

  if (isError || !contact) {
    return <div className="error-state-message">Contact not found.</div>;
  }

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

        <button onClick={handleCancel}>Cancel</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EditContactForm;
