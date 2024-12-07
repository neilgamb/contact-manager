import React from "react";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import IconButton from "./IconButton";
import "./ContactMenuHeader.scss";

const ContactMenuHeader: React.FC = () => {
  const navigate = useNavigate();

  const onAddContactClick = () => {
    navigate("/contact/add");
  };

  const onHeaderClick = () => {
    navigate("/");
  };

  return (
    <div className="contact-menu-header">
      <h2 onClick={onHeaderClick}>Contacts</h2>
      <IconButton onClick={onAddContactClick} className="add-contact-btn">
        <FaPlus color="white" size={8} />
      </IconButton>
    </div>
  );
};

export default ContactMenuHeader;
