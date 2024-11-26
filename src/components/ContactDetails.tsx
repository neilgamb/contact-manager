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

  if (error) {
    return null;
  }

  if (isLoading || isFetching) return <div>Loading...</div>;
  if (error)
    return (
      <div>
        Uh oh!
        <br />
        Error loading contact details...
      </div>
    );
  if (!contact) return <div>No contact found</div>;

  return (
    <div>
      <h2>{contact.name}</h2>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
      <p>Website: {contact.website}</p>
    </div>
  );
};

export default ContactDetails;
