import { useState } from "react"
import axios from "axios"

function Questions() {
  const [questions, setQuestions] = useState([])

  const getQuestions = async () => {
    const response = await axios.post(
      "http://localhost:5000/api/ai/questions",
      {
        user_id: 2
      }
    )

    setQuestions(response.data.questions)
  }

  return (
    <div>
      <h2>Interview Questions</h2>

      <button onClick={getQuestions}>Generate Questions</button>

      <ul>
        {questions.map((question, index) => (
          <li key={index}>{question}</li>
        ))}
      </ul>
      <a href="/answer">Go to Answer Page</a>
    </div>
  )
}

export default Questions