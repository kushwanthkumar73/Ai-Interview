import { useEffect, useState } from "react"
import axios from "axios"

function InterviewSession() {
  const [questions, setQuestions] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answer, setAnswer] = useState("")
  const [score, setScore] = useState(null)
  const [feedback, setFeedback] = useState("")

  useEffect(() => {
    loadQuestions()
  }, [])

  const loadQuestions = async () => {
    const response = await axios.post(
      "http://localhost:5000/api/ai/questions",
      {
        user_id: localStorage.getItem("user_id")
      }
    )

    setQuestions(response.data.questions)
  }

  const submitAnswer = async () => {
    const response = await axios.post(
      "http://localhost:5000/api/answer/evaluate",
      {
        user_id: localStorage.getItem("user_id"),
        question: questions[currentIndex],
        answer: answer
      }
    )

    setScore(response.data.score)
    setFeedback(response.data.feedback)
  }

  const nextQuestion = () => {
    setCurrentIndex(currentIndex + 1)
    setAnswer("")
    setScore(null)
    setFeedback("")
  }

  return (
    <div className="page-container">
      <h2>AI Interview Session</h2>

      {questions.length > 0 && (
        <>
          <h3>{questions[currentIndex]}</h3>

          <textarea
            rows="6"
            onChange={(e) => setAnswer(e.target.value)}
            value={answer}
          />

          <button onClick={submitAnswer}>Submit Answer</button>

          {score && (
            <>
              <p>Score: {score}</p>
              <p>{feedback}</p>

              {currentIndex < questions.length - 1 && (
                <button onClick={nextQuestion}>Next Question</button>
              )}
            </>
          )}
        </>
      )}
    </div>
  )
}

export default InterviewSession