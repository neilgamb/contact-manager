import React, { useState } from "react";
import { useGetContactsQuery } from "../features/contacts/contactsApi";
import { Link } from "react-router-dom";

const ContactList: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [page, setPage] = useState(1);
  const {
    data: contacts,
    error,
    isLoading,
    isFetching,
  } = useGetContactsQuery({ page });

  const renderLoadingState = () => {
    if (isLoading || isFetching) {
      return <div>Loading contacts...</div>;
    }
  };

  const renderErrorState = () => {
    if (error) {
      return (
        <div>
          Uh oh!
          <br />
          Error loading contacts...
        </div>
      );
    }
  };

  return (
    <>
      <h2>Contacts</h2>
      {renderLoadingState()}
      {renderErrorState()}
      {contacts?.map((contact: { id: number; name: string }) => (
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

export default ContactList;
