# GenAI Interview Platform

A# 🚀 AI Mock Interview Platform

## 📌 Overview

The **AI Mock Interview Platform** is a full-stack web application designed to simulate real-world technical interviews using AI-driven question generation and evaluation.

It enables users to upload their resumes, participate in structured interview sessions, receive instant feedback, and track their performance over time.

This project aims to bridge the gap between preparation and real interviews by providing a **realistic, interactive, and personalized interview experience**.

---

## 🎯 Key Features

### 🔐 Authentication System

* User Registration & Login
* JWT-based Authentication
* Secure session handling
* Protected routes

---

### 📄 Resume Intelligence

* Upload resume (PDF format)
* Extract and process resume text
* Use resume context for interview question generation

---

### 🧠 AI Interview Engine

* AI-powered question generation (Gemini API)
* Smart fallback system for uninterrupted experience
* Role-based and skill-aware questions
* Dynamic question flow

---

### ⏱️ Interview Session

* One question at a time
* Timer-based interview simulation
* Difficulty tagging (Easy / Medium / Hard)
* Real-time answer submission

---

### 📊 Answer Evaluation

* Score out of 10
* AI-generated feedback
* Keyword-based fallback evaluation
* Immediate performance insights

---

### 📈 Dashboard Analytics

* Total answers attempted
* Average score
* AI performance visualization (Pie Chart)
* Resume & AI system status

---

### 📚 Interview History

* Stores all previous attempts
* Displays:

  * Questions
  * Answers
  * Scores
  * Feedback
* Persistent database tracking

---

### 📋 Final Report

* Overall performance summary
* Strength areas
* Improvement areas
* AI-based recommendations

---

### ⚙️ Interview Setup

* Select Role:

  * Frontend
  * Backend
  * Fullstack
* Select Difficulty:

  * Easy / Medium / Hard
* Choose number of questions

---

## 🏗️ System Architecture

### Frontend

* React.js
* Component-based architecture
* Responsive UI with modern design
* State management using React Hooks

---

### Backend

* Node.js
* Express.js
* RESTful APIs
* MVC architecture

---

### Database

* MySQL
* Tables:

  * Users
  * Resumes
  * Answers
  * History

---

### AI Layer

* Gemini API (Primary)
* Smart fallback question generator
* Keyword-based evaluation system

---

## 🔄 Application Flow

1. User registers / logs in
2. Uploads resume
3. Configures interview (role, difficulty, count)
4. Starts interview session
5. Answers questions one by one
6. Receives instant score & feedback
7. Completes interview
8. Views dashboard analytics
9. Tracks history and report

---

## 🛠️ Tech Stack

| Layer    | Technology             |
| -------- | ---------------------- |
| Frontend | React.js               |
| Backend  | Node.js, Express.js    |
| Database | MySQL                  |
| AI       | Gemini API             |
| Styling  | CSS (Custom UI Design) |
| Charts   | Recharts               |

---

## ⚡ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/ai-mock-interview.git
cd ai-mock-interview
```

---

### 2. Backend Setup

```bash
cd backend
npm install
```

Create `.env` file:

```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=yourdatabase
JWT_SECRET=your_secret
GEMINI_API_KEY=your_key
```

Run backend:

```bash
node server.js
```

---

### 3. Frontend Setup

```bash
cd frontend
npm install
npm start
```

---

## 📸 Screenshots

(Add screenshots here)

* Login Page
* Dashboard
* Interview Session
* History Page
* Report Page

---

## 🔐 Security Features

* JWT Authentication
* Protected routes
* Secure API handling
* Input validation

---

## 🚀 Future Enhancements

* Voice-based interview system
* Real-time AI feedback
* Resume skill tagging
* Company-specific interview preparation
* Deployment with cloud scalability

---

## 💡 Key Learnings

* Full-stack architecture design
* REST API development
* AI integration with fallback logic
* State management in React
* Building real-world product workflows

---

## 👨‍💻 Author

**Kushwanth Kumar**

* MCA Student
* Full Stack Developer (Aspiring)
* Passionate about AI & Web Development

---

## ⭐ Conclusion

This project demonstrates the ability to build a **production-level full-stack application** with AI integration, structured workflows, and user-centric design.

It reflects strong understanding of:

* Backend systems
* Frontend UI/UX
* AI integration
* Real-world application design

---


