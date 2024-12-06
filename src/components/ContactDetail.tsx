import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaTrash, FaRegEdit } from "react-icons/fa";
import {
  useDeleteContactMutation,
  useGetContactByIdQuery,
} from "../features/contacts/contactsApi";
import IconButton from "./IconButton";
import "./ContactDetail.scss";

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
    <div className="contact-detail">
      <div className="contact-detail-header">
        <h2>{contact.name}</h2>
        <div className="contact-detail-header-btns">
          <IconButton onClick={handleDeleteContact}>
            <FaTrash size={20} color="#5a5a5a" />
          </IconButton>
          <IconButton onClick={handleEditContact}>
            <FaRegEdit size={20} color="red" />
          </IconButton>
        </div>
      </div>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
      <p>Website: {contact.website}</p>
    </div>
  );
};

export default ContactDetail;
