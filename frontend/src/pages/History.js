import { useEffect, useState } from "react"
import axios from "axios"
import Layout from "../components/Layout"

function History() {
  const [history, setHistory] = useState([])

  useEffect(() => {
    loadHistory()
  }, [])

  const loadHistory = async () => {
    const response = await axios.get(
      `http://localhost:5000/api/history/${localStorage.getItem("user_id")}`
    )

    setHistory(response.data)
  }

  return (
    <Layout>
      <div className="dashboard-container">
        <h1>Interview History</h1>

        {history.map((item, index) => (
          <div className="section-box" key={index}>
            <h3>{item.question}</h3>
            <p><strong>Answer:</strong> {item.answer}</p>
            <p><strong>Score:</strong> {item.score}</p>
            <p><strong>Feedback:</strong> {item.feedback}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default History