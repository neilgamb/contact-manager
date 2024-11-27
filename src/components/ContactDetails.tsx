import React from "react";
import { useParams } from "react-router-dom";
import { useGetContactByIdQuery } from "../features/contacts/contactsApi";

const ContactDetails: React.FC = () => {
  const { id = "" } = useParams<{ id: string }>();

  const {
    data: contact,
    error,
    isLoading,
    isFetching,
  } = useGetContactByIdQuery({ id });

  if (isLoading || isFetching) {
    return <div className="loading-state-message">Loading...</div>;
  }

  if (error) {
    return (
      <div className="error-state-message">
        Error loading contact details :(
      </div>
    );
  }

  if (!contact) {
    return <div className="empty-state-message">No contact found</div>;
  }

  return (
    <>
      <h2>{contact.name}</h2>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
      <p>Website: {contact.website}</p>
    </>
  );
};

export default ContactDetails;
