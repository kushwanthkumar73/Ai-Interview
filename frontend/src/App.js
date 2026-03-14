import {BrowserRouter, Routes, Route} from "react-router-dom"
import "./App.css"
import Login from "./pages/Login"
import Register from "./pages/Register"
import ResumeUpload from "./pages/ResumeUpload"
import Questions from "./pages/Questions"
import Answer from "./pages/Answer"
import Dashboard from "./pages/Dashboard"
import Navbar from "./components/Navbar"
import InterviewSession from "./pages/InterviewSession"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/upload" element={<ResumeUpload />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/answer" element={<Answer />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/interview" element={<InterviewSession />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App