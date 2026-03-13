import { useState } from "react"
import axios from "axios"

function Answer() {
  const [answer, setAnswer] = useState("")
  const [score, setScore] = useState(null)
  const [feedback, setFeedback] = useState("")

  const submitAnswer = async () => {
    const response = await axios.post(
      "http://localhost:5000/api/answer/evaluate",
      {
        user_id: 2,
        question: "Explain Node.js event loop",
        answer: answer
      }
    )

    setScore(response.data.score)
    setFeedback(response.data.feedback)
  }

  return (
    <div>
      <h2>Submit Answer</h2>

      <textarea
        rows="5"
        cols="40"
        onChange={(e) => setAnswer(e.target.value)}
      />

      <br />

      <button onClick={submitAnswer}>Submit</button>

      {score && (
        <div>
          <h3>Score: {score}</h3>
          <p>{feedback}</p>
          <a href="/dashboard">Go to Dashboard</a>
        </div>
      )}
      
    </div>
  )
}

export default Answer