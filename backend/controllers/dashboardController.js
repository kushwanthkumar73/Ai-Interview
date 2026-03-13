const db = require("../db")

const getDashboard = (req, res) => {
    const userId = req.params.user_id

    const query =
        "SELECT COUNT(*) AS totalAnswers, AVG(score) AS averageScore FROM answers WHERE user_id = ?"

    db.query(query, [userId], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message })
        } else {
            res.json({
                totalAnswers: result[0].totalAnswers,
                averageScore: Number(result[0].averageScore)
            })
        }
    })
}

module.exports = getDashboard