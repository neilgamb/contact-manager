import React from "react";
import { Link } from "react-router-dom";
import { Contact } from "../types/contact";
import "./ContactMenuListItem.scss";

interface ContactMenuListItemProps {
  contact: Contact;
}

const ContactMenuListItem: React.FC<ContactMenuListItemProps> = ({
  contact,
}) => {
  return (
    <Link to={`/contact/${contact.id}`} className="contact-menu-list-item-link">
      <div className="contact-menu-list-item">{contact.name}</div>
    </Link>
  );
};

export default ContactMenuListItem;
