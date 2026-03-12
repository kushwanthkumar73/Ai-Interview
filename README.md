# GenAI Interview Platform

AI-powered full stack interview preparation platform built using Node.js, Express.js, MySQL, and PDF parsing.

## Features

- User Registration and Login
- JWT Authentication
- Password Hashing using bcrypt
- Resume PDF Upload
- PDF Text Extraction
- Resume-based AI Question Generation

## Tech Stack

### Backend
- Node.js
- Express.js

### Database
- MySQL

### Authentication
- JWT
- bcrypt

### File Handling
- Multer
- pdf-parse

## Current Workflow

1. User registers and logs in
2. Resume PDF uploaded
3. Resume text extracted
4. Resume stored in database
5. AI generates interview questions based on skills

## API Endpoints

### Auth
- POST /api/users/register
- POST /api/users/login

### Resume
- POST /api/resume/upload

### AI Questions
- POST /api/ai/questions

## Future Enhancements

- LLM Integration (OpenAI / Gemini)
- AI Answer Evaluation
- Interview Score Dashboard
- Frontend in React.js
- Deployment

## Author

Kushwanth Kumar
