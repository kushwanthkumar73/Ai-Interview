const db = require("../db")

const generateQuestions = (req, res) => {
    const userId = req.body.user_id

    const query = "SELECT resume_text FROM resumes WHERE user_id = ? ORDER BY id DESC LIMIT 1"

    db.query(query, [userId], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message })
        } else {
            const resume = result[0].resume_text

            const questions = []

            if (resume.includes("React")) {
                questions.push("Explain React lifecycle methods")
            }

            if (resume.includes("Node")) {
                questions.push("Explain Node.js event loop")
            }

            if (resume.includes("SQL")) {
                questions.push("Difference between INNER JOIN and LEFT JOIN")
            }

            if (resume.includes("JWT")) {
                questions.push("How JWT authentication works?")
            }

            res.json({
                questions
            })
        }
    })
}

module.exports = generateQuestions