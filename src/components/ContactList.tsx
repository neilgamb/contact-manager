import React, { useState } from "react";
import { useGetContactsQuery } from "../features/contacts/contactsApi";
import { Link } from "react-router-dom";

const ContactList: React.FC = () => {
  const [page, setPage] = useState(1);
  const {
    data: contacts,
    error,
    isLoading,
    isFetching,
  } = useGetContactsQuery(page);

  // const handleScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
  //   const target = e.target as HTMLDivElement;
  //   if (
  //     target.scrollTop + target.clientHeight >= target.scrollHeight &&
  //     !isFetching
  //   ) {
  //     setPage((prev) => prev + 1);
  //   }
  // };

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
    <div
      // onScroll={handleScroll}
      style={{ height: "100%", overflowY: "auto", padding: "16px" }}
    >
      <h2>Contacts</h2>
      {renderLoadingState()}
      {renderErrorState()}
      {contacts?.map((contact: { id: number; name: string }) => (
        <div key={contact.id} style={{ marginBottom: "8px" }}>
          <Link
            to={`/user/${contact.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {contact.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ContactList;