import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  useDeleteContactMutation,
  useGetContactByIdQuery,
} from "../features/contacts/contactsApi";

const ContactDetail: React.FC = () => {
  const { id = "" } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isDeleting, setIsDeleting] = useState(false);

  const {
    data: contact,
    error,
    isLoading,
    isFetching,
  } = useGetContactByIdQuery({ id });

  const [deleteContact] = useDeleteContactMutation();

  const handleEditContact = () => {
    navigate(`/contact/edit/${id}`, { state: { contact } });
  };

  const handleDeleteContact = async () => {
    try {
      setIsDeleting(true);
      await deleteContact({ id });
    } catch (error) {
      console.log("Error deleting contact", error);
    } finally {
      setIsDeleting(false);
      navigate("/");
    }
  };

  if (isDeleting) {
    return <div className="loading-state-message">Deleting contact...</div>;
  }

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
      <button onClick={handleEditContact}>Edit</button>
      <button onClick={handleDeleteContact}>Delete</button>
    </>
  );
};

export default ContactDetail;
