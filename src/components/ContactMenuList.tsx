import React from "react";
import ContactMenuListItem from "./ContactMenuListItem";
import "./ContactMenuList.scss";

interface ContactMenuListProps {
  contactIds?: number[];
}

const ContactMenuList: React.FC<ContactMenuListProps> = ({ contactIds }) => {
  if (!contactIds || contactIds.length === 0) {
    return <div className="empty-state-message">No contacts yet</div>;
  }

  return (
    <div className="contact-menu-list">
      {contactIds.map((contactId: number) => (
        <ContactMenuListItem key={contactId} contactId={contactId} />
      ))}
    </div>
  );
};

export default ContactMenuList;
