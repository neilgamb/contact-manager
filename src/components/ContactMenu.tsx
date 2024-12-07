import React from "react";
import ContactMenuHeader from "./ContactMenuHeader";
import ContactMenuList from "./ContactMenuList";
import "./ContactMenu.scss";
import { useAppSelector } from "../state/store";
import { selectContacts } from "../features/contacts/contactsApiSelectors";

const ContactMenu: React.FC = () => {
  const contacts = useAppSelector(selectContacts);

  return (
    <div className="contact-menu">
      <ContactMenuHeader />
      <ContactMenuList contacts={contacts} />
    </div>
  );
};

export default ContactMenu;
