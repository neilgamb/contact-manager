import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactMenu from "./components/ContactMenu";
import ContactDetails from "./components/ContactDetails";
import { useAppSelector } from "./app/store";
import {
  selectIsGetContactsError,
  selectIsGetContactsLoading,
} from "./features/contacts/contactsApiSelectors";
import "./App.css";

const App: React.FC = () => {
  const isGetContactsError = useAppSelector(selectIsGetContactsError);
  const isGetContactsLoading = useAppSelector(selectIsGetContactsLoading);

  return (
    <Router>
      <div style={{ display: "flex", height: "100vh" }}>
        <div
          style={{
            width: "300px",
            borderRight: "1px solid #ccc",
            overflowY: "hidden",
          }}
        >
          <ContactMenu />
        </div>

        <div style={{ flex: 1, padding: "16px" }}>
          <Routes>
            <Route
              path="/"
              element={
                isGetContactsLoading
                  ? null
                  : !isGetContactsError && (
                      <div>Select a contact to view details</div>
                    )
              }
            />
            <Route path="/contact/:id" element={<ContactDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
