import React from "react";
import { faker } from "@faker-js/faker";
import { useAddContactMutation } from "../features/contacts/contactsApi";
import "./ContactMenuHeader.scss";

const ContactMenuHeader: React.FC = () => {
  const [addContact] = useAddContactMutation();

  const handleAddContact = async () => {
    try {
      const result = await addContact({
        name: faker.person.fullName(),
        email: faker.internet.email(),
        phone: faker.phone.number(),
        website: faker.internet.url(),
      });
      console.log("result", result);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="contact-menu-header">
      <h2>Contacts</h2>
      <button onClick={handleAddContact}>Add Contact</button>
    </div>
  );
};

export default ContactMenuHeader;
