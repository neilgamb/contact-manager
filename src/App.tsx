import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactList from "./components/ContactList";
import ContactDetails from "./components/ContactDetails";
import "./App.css";
import { useAppSelector } from "./app/store";
import { selectIsGetContactsError } from "./features/contacts/contactsApiSelectors";

const App: React.FC = () => {
  const isGetContactsError = useAppSelector(selectIsGetContactsError);

  return (
    <Router>
      <div style={{ display: "flex", height: "100vh" }}>
        <div
          style={{
            width: "300px",
            borderRight: "1px solid #ccc",
            overflowY: "auto",
          }}
        >
          <ContactList />
        </div>

        <div style={{ flex: 1, padding: "16px" }}>
          <Routes>
            <Route
              path="/"
              element={
                !isGetContactsError && (
                  <div>Select a contact to view details</div>
                )
              }
            />
            <Route path="/user/:id" element={<ContactDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
