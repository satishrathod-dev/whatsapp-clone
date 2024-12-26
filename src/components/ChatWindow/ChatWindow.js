// import React, { useState } from "react";
// import "./ChatWindow.css";

// const ChatWindow = ({ selectedContact, messages, onSendMessage }) => {
//   console.log("selectedContact:", selectedContact);

//   const [newMessage, setNewMessage] = useState("");

//   const handleSendMessage = () => {
//     console.log("Sending message:", newMessage);
//     if (newMessage.trim() === "") {
//       return;
//     }

//     onSendMessage(newMessage, selectedContact.id);
//     setNewMessage("");
//   };

//   return (
//     <div className="chat-window">
//       <div className="chat-header">
//         <h2>{selectedContact.name}</h2>
//       </div>
//       <div className="message-list">
//         {messages.map((message) => (
//           <div
//             key={message.id}
//             className={`message ${
//               message.sender === "Me" ? "sent" : "received"
//             }`}
//           >
//             {message.text}
//             {/* {selectedContact.lastMessage} */}
//             {/* console.log(selectedContact.lastMessage); */}
//           </div>
//         ))}
//       </div>
//       <div className="message-input">
//         <input
//           type="text"
//           placeholder="Type a message..."
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//           onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
//         />
//         <button onClick={handleSendMessage}>Send</button>
//       </div>
//     </div>
//   );
// };

// export default ChatWindow;
import React, { useState } from "react";
import "./ChatWindow.css";

const ChatWindow = ({
  selectedContact,
  messages,
  onSendMessage,
  onDeleteMessage,
}) => {
  console.log("selectedContact:", selectedContact);

  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    console.log("Sending message:", newMessage);
    if (newMessage.trim() === "") {
      return;
    }

    onSendMessage(newMessage, selectedContact.id);
    setNewMessage("");
  };

  const handleDeleteMessage = (messageId) => {
    console.log("Deleting message:", messageId);
    onDeleteMessage(messageId, selectedContact.id);
  };

  return (
    <div className="chat-window">
      <div className="chat-header">
        <h2>{selectedContact.name}</h2>
      </div>
      <div className="message-list">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`message ${
              message.sender === "Me" ? "sent" : "received"
            }`}
          >
            {message.text}
            <button
              className="delete-button"
              onClick={() => handleDeleteMessage(message.id)} // Trigger delete
            >
              🗑️
            </button>
          </div>
        ))}
      </div>
      <div className="message-input">
        <input
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;
