import React from "react";
import { Link } from "react-router-dom";
import { Contact } from "../types/contact";

interface ContactMenuListProps {
  contacts: Contact[];
}

const ContactMenuList: React.FC<ContactMenuListProps> = ({ contacts }) => {
  return (
    <>
      {contacts.map((contact: { id: number; name: string }) => (
        <div
          key={contact.id}
          style={{ padding: "10px 10px 10px 0px", marginTop: "5px" }}
        >
          <Link
            to={`/contact/${contact.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {contact.name}
          </Link>
        </div>
      ))}
    </>
  );
};

export default ContactMenuList;
