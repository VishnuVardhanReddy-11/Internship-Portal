# Internship Portal

**Internship Portal** is a full-stack web application built to simplify internship application management. It features user registration, login, application submission, and admin controls, with notifications sent via email and SMS. The app is built with **React (frontend)** and **Node.js, Express, MongoDB (backend)**, and uses **Vite** and **Tailwind CSS** for a fast, responsive UI.

---

## 🔧 Tech Stack

- **Frontend**: React, Vite, Tailwind CSS
- **Backend**: Node.js, Express, MongoDB, Mongoose
- **Other Tools**: JWT, dotenv, SendGrid, Twilio

---

## 📁 Folder Structure

internTask1/
├── frontend/ # React app (Vite + Tailwind)
├── backend/ # Node.js + Express + MongoDB API
├── .gitignore # Ignore node_modules, .env, etc.
└── README.md # Project documentation

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/VishnuVardhanReddy-11/Internship-Portal.git
cd Internship-Portal


**2. Setup Backend**
cd backend
npm install

Create a .env file with:
PORT=5000
MONGO_URI=your_mongo_connection_string
SENDGRID_API_KEY=your_sendgrid_api_key
TWILIO_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token

**Run Server**: npx nodemon

**3. Setup Frontend**
cd ../frontend
npm install
npm run dev

⚠️ Notes
Ensure .env is not pushed to GitHub (already listed in .gitignore)

All team members have their own branches with thier name, so comit the code there only no one should should commit their code in the main branch.
after proper testing if the code the branches will be merged to main. Below is step-by-step to merge .

✅ Step-by-step Git Merge

1. First, switch to the main branch
	git switch main

2. Pull latest changes (optional but recommended)
   Make sure your main is up to date:
	git pull origin main

3. Merge the yash branch into main
	git merge you-branch-name





