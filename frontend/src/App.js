import {BrowserRouter, Routes, Route} from "react-router-dom"
import "./App.css"
import Login from "./pages/Login"
import Register from "./pages/Register"
import ResumeUpload from "./pages/ResumeUpload"
import Questions from "./pages/Questions"
import Answer from "./pages/Answer"
import Dashboard from "./pages/Dashboard"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/upload" element={<ResumeUpload />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/answer" element={<Answer />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App