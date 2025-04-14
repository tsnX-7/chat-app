# X-Chat: A Full-Stack MERN Chat Application

Welcome to **X-Chat**, a real-time chat application built using the MERN (MongoDB, Express, React, Node.js) stack. This project demonstrates a fully functional chat platform with features like user authentication, real-time messaging, profile management, and theme customization. Below is a detailed overview of the project.

---

## Table of Contents

1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Frontend Overview](#frontend-overview)
5. [Backend Overview](#backend-overview)
6. [Socket.IO Integration](#socketio-integration)
7. [Environment Variables](#environment-variables)
8. [Setup Instructions](#setup-instructions)
9. [Deployed Version](#deployed-version)

---

## Features

- **User Authentication**: Secure signup, login, and logout functionality using JWT.
- **Real-Time Messaging**: Send and receive messages instantly using Socket.IO.
- **Profile Management**: Update profile picture and view account details.
- **Theme Customization**: Choose from a variety of themes for the chat interface.
- **Responsive Design**: Fully responsive UI for both desktop and mobile devices.
- **Image Uploads**: Send images along with text messages.
- **Online Status**: View online users in real-time.
- **Preview Mode**: Preview themes and chat interface before applying changes.

---

## Tech Stack

### Frontend
- **React**: For building the user interface.
- **Vite**: For fast development and build processes.
- **Tailwind CSS**: For styling and responsive design.
- **DaisyUI**: For pre-built UI components.
- **Zustand**: For state management.
- **React Router**: For client-side routing.
- **Socket.IO Client**: For real-time communication.
- **Axios**: For API requests.

### Backend
- **Node.js**: For server-side logic.
- **Express**: For building RESTful APIs.
- **MongoDB**: For database management.
- **Mongoose**: For object data modeling.
- **Socket.IO**: For real-time communication.
- **Cloudinary**: For image storage and management.
- **JWT**: For secure authentication.
- **Bcrypt.js**: For password hashing.

---

## Project Structure

```
chat-app/
├── backend/
│   ├── src/
│   │   ├── controllers/       # API controllers
│   │   ├── lib/               # Utility functions and configurations
│   │   ├── middleware/        # Middleware for authentication
│   │   ├── models/            # Mongoose models
│   │   ├── routes/            # API routes
│   │   └── server.js          # Entry point for the backend
│   ├── package.json           # Backend dependencies and scripts
│   └── .env                   # Backend environment variables
├── frontend/
│   ├── src/
│   │   ├── components/        # Reusable React components
│   │   ├── constants/         # Static constants (e.g., themes)
│   │   ├── lib/               # Utility functions and configurations
│   │   ├── pages/             # React pages
│   │   ├── store/             # Zustand stores for state management
│   │   ├── App.jsx            # Main React component
│   │   ├── main.jsx           # Entry point for the frontend
│   │   └── index.css          # Global styles
│   ├── vite.config.js         # Vite configuration
│   ├── package.json           # Frontend dependencies and scripts
│   └── index.html             # HTML template
├── package.json               # Root package.json for shared dependencies
└── .gitignore                 # Ignored files and directories
```

---

## Frontend Overview

### Key Features
1. **Pages**:
   - **HomePage**: Displays the chat interface with a sidebar for user selection.
   - **SignUpPage**: Allows users to create an account.
   - **LoginPage**: Enables users to log in to their account.
   - **ProfilePage**: Displays user profile information and allows profile picture updates.
   - **SettingsPage**: Provides theme customization options.

2. **State Management**:
   - **useAuthStore**: Manages authentication state and Socket.IO connection.
   - **useChatStore**: Handles chat-related state, including messages and user lists.

3. **Real-Time Messaging**:
   - **Socket.IO Client**: Listens for new messages and updates the UI in real-time.

4. **Theme Customization**:
   - Users can select from a predefined list of themes (`theme-list.js`).

---

## Backend Overview

### Key Features
1. **Authentication**:
   - **JWT**: Used for secure user authentication.
   - **bcrypt.js**: Hashes passwords before storing them in the database.

2. **APIs**:
   - **Auth Routes**:
     - `/auth/signup`: Create a new user.
     - `/auth/login`: Authenticate a user.
     - `/auth/logout`: Log out a user.
     - `/auth/update`: Update user profile.
     - `/auth/check`: Check if a user is authenticated.
   - **Message Routes**:
     - `/message/users`: Fetch all users except the logged-in user.
     - `/message/:id`: Fetch messages between two users.
     - `/message/send/:id`: Send a message to a specific user.

3. **Database**:
   - **MongoDB**: Stores user and message data.
   - **Mongoose Models**:
     - `User`: Schema for user data.
     - `Message`: Schema for chat messages.

4. **Real-Time Communication**:
   - **Socket.IO**: Handles real-time messaging and online user tracking.

5. **Image Uploads**:
   - **Cloudinary**: Stores and serves user-uploaded images.

---

## Socket.IO Integration

- **Real-Time Messaging**: Messages are sent and received instantly using Socket.IO.
- **Online User Tracking**: Tracks and displays the list of online users.
- **Socket Events**:
  - `connection`: Establishes a new connection.
  - `disconnect`: Handles user disconnection.
  - `newMessage`: Broadcasts new messages to the sender and receiver.

---

## Environment Variables

The project uses the following environment variables:

### Backend
- `PORT`: Port number for the backend server.
- `MONGODB_URI`: MongoDB connection string.
- `JWT_SECRET`: Secret key for JWT.
- `CLOUDINARY_CLOUD_NAME`: Cloudinary cloud name.
- `CLOUDINARY_API_KEY`: Cloudinary API key.
- `CLOUDINARY_API_SECRET`: Cloudinary API secret.

### Frontend
- `VITE_API_BASE_URL`: Base URL for API requests (set in `vite.config.js`).

---

## Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- MongoDB
- Cloudinary account (for image uploads)

### Steps
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-repo/chat-app.git
   cd chat-app
   ```

2. **Setup Backend**:
   - Navigate to the `backend` directory:
     ```bash
     cd backend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Create a `.env` file and add the required environment variables.
   - Start the backend server:
     ```bash
     npm run dev
     ```

3. **Setup Frontend**:
   - Navigate to the `frontend` directory:
     ```bash
     cd ../frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the frontend development server:
     ```bash
     npm run dev
     ```

4. **Access the Application**:
   - Open your browser and navigate to `http://localhost:5173`.

---

## Deployed Version

You can access the deployed version of the project here: **[Deployed Link](#)**

--- 

Thank you for reviewing **X-Chat**! If you have any questions or feedback, feel free to reach out.
