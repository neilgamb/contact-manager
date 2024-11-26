import React from "react";
import { useGetContactsQuery } from "../features/contacts/contactsApi";
import ContactMenuHeader from "./ContactMenuHeader";
import ContactMenuList from "./ContactMenuList";

const ContactMenu: React.FC = () => {
  const {
    data: contacts,
    error,
    isLoading,
    isFetching,
  } = useGetContactsQuery(undefined);

  if (isLoading || isFetching) {
    return <div>Loading contacts...</div>;
  }

  if (error) {
    return <div>Error loading contacts...</div>;
  }

  if (!contacts || contacts.length === 0) {
    return <div>No contacts found</div>;
  }

  return (
    <>
      <ContactMenuHeader />
      <ContactMenuList contacts={contacts} />
    </>
  );
};

export default ContactMenu;
