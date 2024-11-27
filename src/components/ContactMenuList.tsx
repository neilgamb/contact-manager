import React from "react";
import { Contact } from "../types/contact";
import ContactMenuListItem from "./ContactMenuListItem";
import "./ContactMenuList.scss";

interface ContactMenuListProps {
  contacts?: Contact[];
}

const ContactMenuList: React.FC<ContactMenuListProps> = ({ contacts }) => {
  if (!contacts || contacts.length === 0) {
    return <div className="empty-state-message">No contacts yet</div>;
  }

  return (
    <div className="contact-menu-list">
      {contacts.map((contact: Contact) => (
        <ContactMenuListItem key={contact.id} contact={contact} />
      ))}
    </div>
  );
};

export default ContactMenuList;
