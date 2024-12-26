WhatsApp Web-like Application with Real-Time Messaging
Overview
This project is a WhatsApp Web-like application built using React.js. The application has:

A Contact List on the left side.
A Chat Window on the right side to view messages.
A Message Input Field to send new messages.
The app uses Firebase Firestore for real-time message storage and retrieval. It is built using React hooks, Context API, useReducer, and is styled using CSS Flexbox and Grid.

<!-- Features -->
Contact List: Displays a list of contacts on the left. Clicking a contact opens its chat window.
Chat Window: Displays the chat history of the selected contact. Users can send and receive messages.
Message Input: An input field for typing and sending new messages.
Real-Time Messaging: Messages are stored in Firestore, providing real-time message updates.
Responsive Layout: The app is responsive and works well on different screen sizes.
CSS Animations: Smooth animations for message interactions and UI elements.
Technologies Used
React.js: JavaScript library for building the user interface.
Firebase Firestore: Real-time database for storing and retrieving messages.
React Context API: Manages global state for contacts and messages.
React Hooks: useState, useEffect, useReducer for state and side-effect management.
CSS Flexbox & Grid: For responsive layout.
CSS Animations: For smooth transitions and visual effects.
Installation
1. Clone the Repository

git clone https://github.com/your-username/whatsapp-clone.git
cd whatsapp-clone

2. Install Dependencies
npm install
3. Set Up Firebase Firestore
Create a Firebase project and set up Firestore by following these steps:

Go to the Firebase Console.
Create a new project and enable Firestore in the Firebase dashboard.
Add Firebase SDK to your project. You can find the Firebase configuration in your Firebase Console.
Create a .env file in the root of the project and add your Firebase credentials:

.env
REACT_APP_FIREBASE_API_KEY=your-firebase-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
REACT_APP_FIREBASE_PROJECT_ID=your-firebase-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-firebase-sender-id
REACT_APP_FIREBASE_APP_ID=your-firebase-app-id
4. Run the Application
npm start

Visit http://localhost:3000 in your browser to view the app.

<!-- Usage -->
View Contacts: The contact list will be fetched from Firestore. Clicking on any contact will open the corresponding chat window.
Send Messages: Type your message in the input field and press "Send". Your message will be stored in Firestore and displayed in real-time.
<!-- App Structure -->
1. App.js
Main entry point of the application, responsible for managing global state and integrating with the backend.
Uses Context API to manage contacts and messages globally.
Uses useReducer to manage complex state transitions.

2. ContactList.js
Displays the list of contacts.
Allows the user to select a contact to open the chat window.

3. ChatWindow.js
Displays the message history for the selected contact.
Allows users to send and delete messages.

4. MessageInput.js
Input field for sending new messages.

5. hooks/useMessages.js
Custom hook for interacting with Firestore.

6. context/MessageContext.js
Provides global state for messages and contacts using the Context API.


<!-- Challenges Faced -->
Real-Time Messaging:

Integrating Firestore to fetch and display real-time messages was challenging but essential to simulate real-time chat functionality.
Responsive Layout:

Ensuring that the chat window and contact list were properly displayed across different screen sizes required careful testing with CSS Flexbox and Grid.

<!-- Deployment -->
The app is deployed on Vercel for easy access. You can view the live demo here:

WhatsApp Web-like App Demo
Next Steps / Future Enhancements
User Authentication: Add user authentication for personalizing chat experience (e.g., using Firebase Authentication).
Push Notifications: Integrate push notifications for new messages.
Message Read Status: Implement read/unread message status indicators.
Search Contacts: Add search functionality to easily find contacts.
Message Media: Support for sending images, files, or voice messages.

<!-- Conclusion -->
This project demonstrates how to build a chat application with React.js and Firestore for real-time messaging. It uses modern React features like hooks, Context API, and useReducer for efficient state management. The application is fully responsive and designed to provide a smooth and interactive user experience.

