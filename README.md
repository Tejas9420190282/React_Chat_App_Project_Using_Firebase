
🗨️ React Chat App with Firebase

A real-time chat application built using React, Firebase Authentication, and Firestore. This project demonstrates how to implement user authentication, real-time messaging, and responsive UI using modern web technologies.

🚀 Live Demo

Experience the application live:
👉 https://chats-app-project.netlify.app/

📌 Features

Real-Time Messaging: Instant communication with real-time message updates.

User Authentication: Secure login and registration using Firebase Authentication.

Responsive Design: Optimized for desktop, tablet, and mobile devices.

User Profiles: Personalized user profiles with display names and avatars.

Message Persistence: Messages are stored and retrieved using Firebase Firestore.

Modern UI: Clean and user-friendly interface built with Tailwind CSS.

🛠️ Technologies Used

Frontend: React.js

Backend: Firebase (Authentication & Firestore)

Styling: Tailwind CSS

Build Tool: Vite.js



⚙️ Installation & Setup
1. Clone the Repository
git clone https://github.com/Tejas9420190282/React_Chat_App_Project_Using_Firebase.git
cd React_Chat_App_Project_Using_Firebase

2. Install Dependencies
npm install

3. Set Up Firebase

Create a Firebase project at Firebase Console
.

Enable Firebase Authentication (Email/Password or Google).

Set up Firestore Database.

Obtain your Firebase configuration object.

4. Configure Firebase in the Project

Create a .env file in the root directory.

Add your Firebase configuration:

VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
VITE_FIREBASE_APP_ID=your-app-id

5. Run the Application
npm run dev


Open http://localhost:3000
 in your browser.

🧪 Features Walkthrough
🔐 Authentication

Users can sign up and log in using Firebase Authentication.

Supports multiple sign-in methods (e.g., Google, Email/Password).

💬 Real-Time Chat

Messages are sent and received in real-time using Firebase Firestore.

Each message includes the sender's name and timestamp.

🖼️ User Profiles

Users can set and update their display names and avatars.

Profile information is stored in Firestore and displayed in the chat interface.

🧩 Project Structure
/src
  /components
    Chat.js           # Main chat interface
    Message.js        # Individual message component
    Sidebar.js        # Sidebar with user list and settings
  /context
    AuthContext.js    # Context for user authentication state
  /firebase
    firebase.js       # Firebase configuration and initialization
  App.js              # Main application component
  index.js            # Entry point
/public
  index.html          # HTML template
  /assets
    logo.png          # Application logo
    avatar-placeholder.png  # Default avatar image


📬 Contact

For any inquiries or feedback, feel free to reach out:

GitHub: https://github.com/Tejas9420190282

Email: tejasshimpi877@gmail.com





