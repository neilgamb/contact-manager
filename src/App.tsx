import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactMenu from "./components/ContactMenu";
import ContactDetails from "./components/ContactDetails";
import ContactDetailEmptyState from "./components/ContactDetailEmptyState";
import "./App.scss";
import { useGetContactsQuery } from "./features/contacts/contactsApi";

const App: React.FC = () => {
  const { isLoading, isError } = useGetContactsQuery(undefined);

  if (isLoading) {
    return <div className="loading-state">Loading...</div>;
  }

  if (isError) {
    return <div className="error-state">Error loading contacts :(</div>;
  }

  return (
    <Router>
      <div className="app-container">
        <ContactMenu />
        <div className="contact-detail">
          <Routes>
            <Route path="/" element={<ContactDetailEmptyState />} />
            <Route path="/contact/:id" element={<ContactDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
