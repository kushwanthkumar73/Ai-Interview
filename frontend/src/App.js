import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"

import Login from "./pages/Login"
import Register from "./pages/Register"
import ResumeUpload from "./pages/ResumeUpload"
import Dashboard from "./pages/Dashboard"
import InterviewSession from "./pages/InterviewSession"
import History from "./pages/History"
import Report from "./pages/Report"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/upload" element={<ResumeUpload />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/interview" element={<InterviewSession />} />
        <Route path="/history" element={<History />} />
        <Route path="/report" element={<Report />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App