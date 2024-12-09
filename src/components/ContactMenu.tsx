import React from "react";
import ContactMenuHeader from "./ContactMenuHeader";
import ContactMenuList from "./ContactMenuList";
import { useAppSelector } from "../state/store";
import { selectContactIds } from "../features/contacts/contactsApiSelectors";
import "./ContactMenu.scss";

const ContactMenu: React.FC = () => {
  const contactIds = useAppSelector(selectContactIds);

  return (
    <div className="contact-menu">
      <ContactMenuHeader />
      <ContactMenuList contactIds={contactIds} />
    </div>
  );
};

export default ContactMenu;
