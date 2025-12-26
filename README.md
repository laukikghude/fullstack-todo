📘 Full Stack To-Do Application

A modern, fully-featured task manager built as part of the OwlAI Internship – Task 2. This app includes a clean UI, advanced features, backend API, MongoDB integration, and live deployment.

🚀 Live Demo

Backend (Render): 👉 https://fullstack-todo-qoik.onrender.com/

Frontend: (deploy to Netlify / Vercel and add link here) 👉 Coming soon

📂 Project Structure fullstack-todo/ │ ├── backend/ # Node.js + Express + MongoDB API │ ├── models/ │ ├── routes/ │ ├── server.js │ ├── package.json │ └── .env.example │ └── frontend/ # HTML, CSS, JavaScript client ├── index.html ├── style.css └── app.js

⭐ Features ✅ Core Features (CRUD Functionality)

Add new tasks

View all tasks

Edit task details

Delete tasks

Mark tasks as complete/incomplete

🎨 Advanced UI Features

Modern, attractive interface

Dark Mode toggle 🌙

Category tags (Work, Personal, Study, General)

Priority levels (Low, Medium, High)

Search bar for filtering tasks

Statistics dashboard:

Total tasks

Completed tasks

Pending tasks

Completed tasks section

Smooth animations

Drag-and-drop enabled task list

🧠 Tech Stack Frontend:

HTML5

CSS3

JavaScript (ES6)

Fetch API

Backend:

Node.js

Express.js

Mongoose

Database:

MongoDB Atlas (Cloud)

Deployment:

Render (Backend)

Netlify / Vercel (Frontend)

⚙️ API Endpoints Method Endpoint Description GET /api/tasks Fetch all tasks POST /api/tasks Create a new task PUT /api/tasks/:id Update a task DELETE /api/tasks/:id Delete a task 🛠 Setup Instructions (Local Development) 1️⃣ Clone the Repository git clone https:https://github.com/laukikghude/fullstack-todo

2️⃣ Install Backend Dependencies cd backend npm install

3️⃣ Create .env File

Add the following:

PORT=5000 MONGO_URI=your_mongo_atlas_connection_string

4️⃣ Start Backend Server npm run dev

Server runs at:

http://localhost:5000

5️⃣ Open Frontend

Open frontend/index.html in your browser.

☁️ Deployment Instructions Backend → Render

Root Directory: backend

Build Command: npm install

Start Command: npm start

Environment Variables:

PORT=5000

MONGO_URI=

Frontend → Netlify/Vercel

Before deploying, update API_URL in app.js:

const API_URL = "https://fullstack-todo-qoik.onrender.com/api/tasks";

Home page

Dark mode

Add task form

Dashboard stats

Completed tasks section

Render deployment page

🤝 Contributing

Pull requests are welcome. Feel free to open issues for suggestions & improvements.

👨‍💻 Author

Laukik Santosh Ghude 📌 GitHub: https://github.com/laukikghude

📌 LinkedIn: (add your link)

📝 License

This project is licensed under the MIT License.
