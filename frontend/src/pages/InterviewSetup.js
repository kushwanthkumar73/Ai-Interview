import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Layout from "../components/Layout"

function InterviewSetup() {
  const [role, setRole] = useState("Fullstack")
  const [difficulty, setDifficulty] = useState("Medium")
  const [count, setCount] = useState(5)

  const navigate = useNavigate()

  const startInterview = () => {
    localStorage.setItem("role", role)
    localStorage.setItem("difficulty", difficulty)
    localStorage.setItem("count", count)

    navigate("/interview")
  }

  return (
    <Layout>
      <div className="section-box">
        <h1>Setup Interview</h1>

        <label>Role</label>
        <select onChange={(e) => setRole(e.target.value)}>
          <option>Frontend</option>
          <option>Backend</option>
          <option>Fullstack</option>
        </select>

        <label>Difficulty</label>
        <select onChange={(e) => setDifficulty(e.target.value)}>
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>

        <label>Number of Questions</label>
        <select onChange={(e) => setCount(e.target.value)}>
          <option>3</option>
          <option>5</option>
          <option>10</option>
        </select>

        <br />

        <button onClick={startInterview}>
          Start Interview
        </button>
      </div>
    </Layout>
  )
}

export default InterviewSetup