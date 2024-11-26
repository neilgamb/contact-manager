import React from "react";
import { useAddContactMutation } from "../features/contacts/contactsApi";

const ContactMenuHeader: React.FC = () => {
  const [addContact] = useAddContactMutation();

  const handleAddContact = async () => {
    try {
      const result = await addContact({
        name: "Neilson Gamble",
        email: "neilgamb@gmail.com",
        phone: "123-456-7890",
        website: "neilsongamble.com",
      });
      console.log("result", result);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <h2>Contacts</h2>
      <button onClick={handleAddContact}>Add Contact</button>
    </>
  );
};

export default ContactMenuHeader;
