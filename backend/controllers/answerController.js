const db = require("../db")

const evaluateAnswer = (req, res) => {
    const { user_id, question, answer } = req.body

    let score = 5
    let feedback = "Good answer"

    if (answer.length < 20) {
        score = 2
        feedback = "Answer too short, explain more clearly"
    } else if (answer.length < 50) {
        score = 4
        feedback = "Decent answer, but add more technical depth"
    }

    const query =
        "INSERT INTO answers (user_id, question, answer, score, feedback) VALUES (?, ?, ?, ?, ?)"

    db.query(
        query,
        [user_id, question, answer, score, feedback],
        (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message })
            } else {
                res.json({
                    score,
                    feedback
                })
            }
        }
    )
}

module.exports = evaluateAnswer