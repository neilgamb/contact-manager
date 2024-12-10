import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { faker } from "@faker-js/faker";
import { IoMdCheckmark } from "react-icons/io";
import { RiCloseLine } from "react-icons/ri";
import { MdAutoAwesome } from "react-icons/md";
import { TbProgress } from "react-icons/tb";
import { useAddContactMutation } from "../features/contacts/contactsApi";
import IconButton from "./IconButton";
import "./AddContactForm.scss";

const AddContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();
  const [addContact, { isLoading: isSaving }] = useAddContactMutation();
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

  const handleSubmit = () => {
    if (formRef.current) {
      formRef.current.requestSubmit();
    }
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

  const onCancelClick = () => {
    navigate(-1);
  };

  const isFormValid = Object.values(contact).every((value) => value);

  return (
    <div className="add-contact-form">
      <form
        onSubmit={handleAddContact}
        className="add-contact-form"
        ref={formRef}
      >
        <div className="add-contact-form-header">
          <h2>Add New Contact</h2>
          <div className="add-contact-form-header-btns">
            {isSaving ? (
              <TbProgress
                size={18}
                color="blue"
                className="progress-indicator"
              />
            ) : (
              <>
                <IconButton onClick={handleAutoGenerate}>
                  <MdAutoAwesome size={18} color="#5a5a5a" />
                </IconButton>
                <IconButton onClick={onCancelClick}>
                  <RiCloseLine size={24} color="#5a5a5a" />
                </IconButton>
                <IconButton disabled={!isFormValid} onClick={handleSubmit}>
                  <IoMdCheckmark size={24} color="green" />
                </IconButton>
              </>
            )}
          </div>
        </div>

        <div className="fields-container">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            value={contact.name}
            onChange={handleChange}
            disabled={isSaving}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={contact.email}
            onChange={handleChange}
            disabled={isSaving}
            required
          />

          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={contact.phone}
            onChange={handleChange}
            disabled={isSaving}
            required
          />

          <label htmlFor="website">Website</label>
          <input
            id="website"
            name="website"
            value={contact.website}
            onChange={handleChange}
            disabled={isSaving}
            required
          />
        </div>
      </form>
    </div>
  );
};

export default AddContactForm;
