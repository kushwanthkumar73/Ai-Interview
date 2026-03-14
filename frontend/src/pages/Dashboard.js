import { useEffect, useState } from "react"
import axios from "axios"
import Layout from "../components/Layout"

function Dashboard() {
  const [data, setData] = useState(null)

  useEffect(() => {
    loadDashboard()
  }, [])

  const loadDashboard = async () => {
    const response = await axios.get(
      `http://localhost:5000/api/dashboard/${localStorage.getItem("user_id")}`
    )

    setData(response.data)
  }

  return (
    <Layout>
    <div className="dashboard-container">
      <h1>Welcome Back 👋</h1>
      <p>Your AI Interview Progress</p>

      {data && (
        <div className="cards">
          <div className="card">
            <h3>Total Answers</h3>
            <p>{data.totalAnswers}</p>
          </div>

          <div className="card">
            <h3>Average Score</h3>
            <p>{data.averageScore}</p>
          </div>

          <div className="card">
            <h3>Resume Status</h3>
            <p>Uploaded</p>
          </div>

          <div className="card">
            <h3>AI Engine</h3>
            <p>Active</p>
          </div>
        </div>
      )}

      <div className="action-buttons">
        <a href="/upload">Upload Resume</a>
        <a href="/interview">Start Interview</a>
        <a href="/dashboard">Refresh</a>
      </div>
    </div>
    </Layout>
  )
}

export default Dashboard