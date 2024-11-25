import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactList from "./components/ContactList";
import ContactDetails from "./components/ContactDetails";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <div style={{ display: "flex", height: "100vh" }}>
        {/* Left-hand panel for Contact List */}
        <div
          style={{
            width: "300px",
            borderRight: "1px solid #ccc",
            overflowY: "auto",
          }}
        >
          <ContactList />
        </div>

        {/* Right-hand panel for Contact Details */}
        <div style={{ flex: 1, padding: "16px" }}>
          <Routes>
            <Route
              path="/"
              element={<div>Select a contact to view details</div>}
            />
            <Route path="/user/:id" element={<ContactDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
