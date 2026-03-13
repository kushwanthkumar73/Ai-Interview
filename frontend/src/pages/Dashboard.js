import { useState } from "react"
import axios from "axios"

function Dashboard() {
  const [data, setData] = useState(null)

  const getDashboard = async () => {
    const response = await axios.get(
      "http://localhost:5000/api/dashboard/2"
    )

    setData(response.data)
  }

  return (
    <div>
      <h2>Dashboard</h2>

      <button onClick={getDashboard}>Load Dashboard</button>

      {data && (
        <div>
          <p>Total Answers: {data.totalAnswers}</p>
          <p>Average Score: {data.averageScore}</p>
        </div>
      )}
    </div>
  )
}

export default Dashboard