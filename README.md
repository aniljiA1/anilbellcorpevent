📅 Bellcorp Event Management Application

A full-stack MERN Event Management platform where users can browse, search, and manage event registrations efficiently while handling growing event data dynamically.

🌍 Live Demo

🔗 Frontend (Vercel)
👉 https://anilbellcorpevent.vercel.app/

🔗 Backend (Render)
👉 https://anilbellcorpevent.onrender.com/

🚀 Tech Stack
Frontend

React.js

React Router

Axios

Tailwind CSS

Backend

Node.js

Express.js

MongoDB (Mongoose)

JWT Authentication

CORS Configuration

Deployment

Vercel (Frontend)

Render (Backend)

MongoDB Atlas (Database)

✨ Features
🔐 Authentication

User Registration

User Login

JWT-based authentication

Protected routes

Secure password hashing using bcrypt

📌 Event Listings

Users can:

Browse all available events

View detailed event information

Register for an event

Cancel event registration

Each event contains:

Event Name

Organizer

Location

Date & Time

Description

Available Seats / Capacity

Category / Tags

🔎 Event Discovery Experience

Dynamic event loading

Search events using flexible text queries

Filter events by category

Handles changing seat availability

Prevents double registration

Backend validation for capacity checks

👤 User Dashboard

Users can:

View registered events

See upcoming events

See past events

Cancel registrations

Automatically update seat availability

📂 Project Structure
bellcorp-event-app/
│
├── client/                 # React Frontend
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   └── App.jsx
│   └── package.json
│
├── server/                 # Express Backend
│   ├── config/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
│
└── README.md

⚙️ Environment Variables
Backend (.env)
PORT=5000
MONGO_URI=mongodb+srv://aniljiA1:Anil12345@cluster0.ciatbts.mongodb.net/?appName=Cluster0
JWT_SECRET=your_secret_key


Frontend (.env)
VITE_API_URL=http://localhost:5000/api


In Vercel Production:

VITE_API_URL=https://anilbellcorpevent.onrender.com/api

🧪 Local Installation Guide
1️⃣ Clone Repository
git clone https://github.com/your-username/bellcorp-event-app.git
cd bellcorp-event-app

2️⃣ Backend Setup
cd server
npm install
npm run dev


Backend runs on:

http://localhost:5000/api

3️⃣ Frontend Setup
cd client
npm install
npm run dev


Frontend runs on:

http://localhost:5173

🔒 API Endpoints
Authentication
POST   /api/auth/register
POST   /api/auth/login

Events
GET    /api/events
GET    /api/events/:id

Registration
POST   /api/register/:eventId
DELETE /api/register/:eventId
GET    /api/register/my

📈 Scalability & Validation

Prevents duplicate registrations

Prevents registration when event is full

Backend seat validation

JWT route protection

Multi-origin CORS configuration

Production-ready deployment


👨‍💻 Author
Anil Kumar
