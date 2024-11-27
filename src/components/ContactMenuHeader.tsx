import React from "react";
import "./ContactMenuHeader.scss";
import { useNavigate } from "react-router-dom";

const ContactMenuHeader: React.FC = () => {
  const navigate = useNavigate();

  const handleAddContact = () => {
    navigate("/contact/add");
  };

  return (
    <div className="contact-menu-header">
      <h2>Contacts</h2>
      <button onClick={handleAddContact}>Add Contact</button>
    </div>
  );
};

export default ContactMenuHeader;
