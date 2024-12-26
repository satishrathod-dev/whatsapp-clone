import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import {
  collection,
  getDocs,
  doc,
  onSnapshot,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
} from "firebase/firestore";
import ContactList from "./components/ContactList/ContactList";
import ChatWindow from "./components/ChatWindow/ChatWindow";
import "./App.css";

function App() {
  const [selectedContact, setSelectedContact] = useState(null);
  const [dummyContacts, setDummyContacts] = useState([]);
  const [contactMessages, setContactMessages] = useState({});
  const [newMessage, setNewMessage] = useState("");

  // Fetch contacts from Firestore with real-time listener
  useEffect(() => {
    const fetchContacts = async () => {
      const unsubscribe = onSnapshot(
        collection(db, "contacts"),
        (querySnapshot) => {
          const contactsData = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setDummyContacts(contactsData);
        }
      );

      return () => unsubscribe(); // Cleanup listener on component unmount
    };

    fetchContacts();
  }, []);

  // Fetch messages for the selected contact
  useEffect(() => {
    if (selectedContact) {
      const chatRef = collection(
        doc(db, "contacts", selectedContact.id),
        "chat"
      );

      // `orderBy` to order messages by timestamp
      const q = query(chatRef, orderBy("timestamp"));

      const unsubscribe = onSnapshot(q, (snapshot) => {
        const messagesData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setContactMessages((prevMessages) => ({
          ...prevMessages,
          [selectedContact.id]: messagesData,
        }));
      });

      return () => unsubscribe(); // Cleanup on component unmount
    }
  }, [selectedContact]);

  // Handle selecting a contact
  const handleSelectContact = (contact) => {
    setSelectedContact(contact);
    setContactMessages({});
  };

  // Handle sending a message
  const handleSendMessage = async (newMessageText, contactId) => {
    if (newMessageText.trim() === "") return;

    const newMessage = {
      text: newMessageText,
      sender: "Me",
      timestamp: new Date(),
    };

    await addDoc(
      collection(doc(db, "contacts", contactId), "chat"),
      newMessage
    );

    // Update last message for the contact in Firestore
    const contactRef = doc(db, "contacts", contactId);
    await updateDoc(contactRef, {
      lastMessage: newMessageText,
    });

    setNewMessage("");
  };

  const handleDeleteMessage = async (messageId, contactId) => {
    const messageRef = doc(db, "contacts", contactId, "chat", messageId);

    // Delete the message
    await deleteDoc(messageRef);

    // Fetch all remaining messages for the contact
    const chatRef = collection(doc(db, "contacts", contactId), "chat");
    const querySnapshot = await getDocs(query(chatRef, orderBy("timestamp")));
    const remainingMessages = querySnapshot.docs.map((doc) => doc.data());

    // Update the contact's lastMessage field in Firestore
    if (remainingMessages.length > 0) {
      // Set the second-to-last message as the lastMessage
      const newLastMessage =
        remainingMessages[remainingMessages.length - 1].text;
      const contactRef = doc(db, "contacts", contactId);
      await updateDoc(contactRef, {
        lastMessage: newLastMessage,
      });
    } else {
      // If no messages are left, set "No messages yet"
      const contactRef = doc(db, "contacts", contactId);
      await updateDoc(contactRef, {
        lastMessage: "No messages yet",
      });
    }

    // Refresh contacts list to reflect the updated 'lastMessage'
    const contactsSnapshot = await getDocs(collection(db, "contacts"));
    const updatedContacts = contactsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setDummyContacts(updatedContacts); // Update the state with new contact data
  };

  return (
    <div className="app">
      <ContactList
        contacts={dummyContacts}
        onSelectContact={handleSelectContact}
      />
      {selectedContact ? (
        <ChatWindow
          selectedContact={selectedContact}
          messages={contactMessages[selectedContact.id] || []}
          onSendMessage={handleSendMessage}
          onDeleteMessage={handleDeleteMessage} // Pass delete function
        />
      ) : (
        <div className="chat-window">
          <h2>Select a contact to start chatting</h2>
        </div>
      )}
    </div>
  );
}

export default App;
