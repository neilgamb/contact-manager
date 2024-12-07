import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  useGetContactByIdQuery,
  useUpdateContactMutation,
} from "../features/contacts/contactsApi";
import { Contact } from "../types/contact";
import { IoMdCheckmark } from "react-icons/io";
import { RiCloseLine } from "react-icons/ri";
import "./EditContactForm.scss";
import IconButton from "./IconButton";
import { useAppSelector } from "../state/store";
import { selectActiveContactId } from "../state/app";

const EditContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();
  const activeContactId = useAppSelector(selectActiveContactId);

  const {
    data: initialContact,
    isLoading,
    isError,
  } = useGetContactByIdQuery({ id: String(activeContactId) });
  const [updateContact, { isLoading: isUpdating }] = useUpdateContactMutation();

  const [contact, setContact] = useState<Contact | undefined>(initialContact);

  useEffect(() => {
    if (initialContact) {
      setContact(initialContact);
    }
  }, [initialContact]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContact((prev) => (prev ? { ...prev, [name]: value } : prev));
  };

  const onCancelClick = () => {
    navigate(`/contact/${activeContactId}`);
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

  if (isUpdating || isLoading || !contact) {
    return <div className="loading-state-message">Saving...</div>;
  }

  if (isError || !contact) {
    return <div className="error-state-message">Contact not found.</div>;
  }

  return (
    <form
      className="edit-contact-form"
      onSubmit={handleEditContact}
      ref={formRef}
    >
      <div className="edit-contact-form-header">
        <h2>Edit Contact</h2>
        <div className="edit-contact-form-header-btns">
          <IconButton onClick={onCancelClick}>
            <RiCloseLine size={24} color="#5a5a5a" />
          </IconButton>
          <IconButton
            onClick={() => {
              if (formRef.current) {
                formRef.current.requestSubmit();
              }
            }}
          >
            <IoMdCheckmark size={24} color="green" />
          </IconButton>
        </div>
      </div>
      <div className="fields-container">
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
      </div>
    </form>
  );
};

export default EditContactForm;
