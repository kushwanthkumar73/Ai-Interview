import { useEffect, useState } from "react"
import axios from "axios"
import Layout from "../components/Layout"

function InterviewSession() {
  const [questions, setQuestions] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answer, setAnswer] = useState("")
  const [score, setScore] = useState(null)
  const [feedback, setFeedback] = useState("")
  const [timer, setTimer] = useState(60)

  useEffect(() => {
    loadQuestions()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev > 0 ? prev - 1 : 0)
    }, 1000)

    return () => clearInterval(interval)
  }, [currentIndex])

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
        answer
      }
    )

    setScore(response.data.score)
    setFeedback(response.data.feedback)
  }

  const nextQuestion = () => {
  if (currentIndex < questions.length - 1) {
    setCurrentIndex(currentIndex + 1)
    setAnswer("")
    setScore(null)
    setFeedback("")
    setTimer(60)
  } else {
    window.location.href = "/dashboard"
  }
}

  return (
    <Layout>
      <div className="interview-layout">
        <div className="question-panel">
          <div className="badge">Medium</div>
          <h2>Question {currentIndex + 1}</h2>
          <h3>{questions[currentIndex]}</h3>
          <p>Time Left: {timer}s</p>
        </div>

        <div className="answer-panel">
          <textarea
            rows="8"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />

          <button onClick={submitAnswer}>Submit Answer</button>

          {score && (
  <div className="feedback-box">
    <h3>Score: {score}</h3>
    <p>{feedback}</p>

    <button onClick={nextQuestion}>
      {currentIndex < questions.length - 1 ? "Next Question" : "Finish Interview"}
    </button>
  </div>
)}
        </div>
      </div>
    </Layout>
  )
}

export default InterviewSession