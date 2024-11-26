import React from "react";
import {
  useAddContactMutation,
  useGetContactsQuery,
} from "../features/contacts/contactsApi";
import { Link } from "react-router-dom";

const ContactList: React.FC = () => {
  const {
    data: contacts,
    error,
    isLoading,
    isFetching,
  } = useGetContactsQuery(undefined);

  const [addContact] = useAddContactMutation();

  const handleAddContact = async () => {
    try {
      const result = await addContact({
        name: "Neilson Gamble",
        email: "neilgamb@gmail.com",
        phone: "123-456-7890",
        website: "neilsongamble.com",
      });

      console.log("result", result);
    } catch (error) {
      console.log("error", error);
    }
  };

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
      <button onClick={handleAddContact}>Add Contact</button>
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
