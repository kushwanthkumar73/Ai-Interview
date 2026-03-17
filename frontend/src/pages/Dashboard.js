import { useEffect, useState } from "react"
import axios from "axios"
import Layout from "../components/Layout"
import {
  PieChart,
  Pie,
  Cell,
  Tooltip
} from "recharts"

function Dashboard() {
  const [data, setData] = useState(null)

  useEffect(() => {
  if (!localStorage.getItem("token")) {
    window.location.href = "/"
  }

  loadDashboard()
}, [])

  const loadDashboard = async () => {
    const response = await axios.get(
      `http://localhost:5000/api/dashboard/${localStorage.getItem("user_id")}`
    )

    setData(response.data)
  }

  const chartData = [
    { name: "Score", value: Number(data?.averageScore || 0) },
    { name: "Remaining", value: 10 - Number(data?.averageScore || 0) }
  ]

  return (
    <Layout>
      <div className="dashboard-container">
        <h1>Welcome Back 👋</h1>
        <p>Your AI Interview Progress</p>

        <div className="action-buttons">
          <a href="/upload">Upload Resume</a>
          <a href="/interview">Start Interview</a>
        </div>

        {data && (
          <>
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

            <div className="section-box">
              <h3>Performance Analytics</h3>

              <PieChart width={300} height={250}>
                <Pie
                  data={chartData}
                  dataKey="value"
                  outerRadius={90}
                >
                  <Cell fill="#7c3aed" />
                  <Cell fill="#e9d5ff" />
                </Pie>

                <Tooltip />
              </PieChart>
            </div>

            <div className="section-box">
              <h3>Recent Interview Feedback</h3>
              <p>Strong understanding of backend concepts. Improve explanation depth.</p>
            </div>
          </>
        )}
      </div>
    </Layout>
  )
}

export default Dashboard