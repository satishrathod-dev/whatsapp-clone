import React, { useState } from "react";
import "./ContactList.css";

function ContactList({ contacts, onSelectContact }) {
  console.log(contacts);

  const [searchQuery, setSearchQuery] = useState("");

  // Seacrh functionality
  const filteredContacts = contacts.filter((contact) => {
    if (!contact.name) {
      console.warn(`Contact missing 'name' field:`, contact);
      return false;
    }
    return contact.name.toLowerCase().includes(searchQuery.toLowerCase());
  });
  // const filteredContacts = contacts;

  return (
    <div className="sidebar">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search contact.."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <ul className="contact-list">
        {filteredContacts.length > 0 ? (
          filteredContacts.map((contact) => (
            <li
              className="contact-item"
              key={contact.id}
              onClick={() => onSelectContact(contact)}
              // onDoubleClick={() => onSelectContact(contact)}
            >
              <div className="contact-name">{contact.name}</div>
              <div className="contact-last-message">
                {contact.lastMessage || "No messages yet"}
              </div>{" "}
            </li>
          ))
        ) : (
          <li className="no-contacts">No contacts found</li>
        )}
      </ul>
    </div>
  );
}

export default ContactList;
