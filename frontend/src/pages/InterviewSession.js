import { useEffect, useState } from "react"
import axios from "axios"
import Layout from "../components/Layout"

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
    <Layout>
      <div className="interview-card">
        <h2>Question {currentIndex + 1}</h2>

        {questions.length > 0 && (
          <>
            <h3>{questions[currentIndex]}</h3>

            <textarea
              rows="6"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />

            <button onClick={submitAnswer}>Submit Answer</button>

            {score && (
              <div className="feedback-box">
                <p>Score: {score}</p>
                <p>{feedback}</p>

                {currentIndex < questions.length - 1 && (
                  <button onClick={nextQuestion}>Next Question</button>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </Layout>
  )
}

export default InterviewSession