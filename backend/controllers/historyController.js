const db = require("../db")

const getHistory = (req, res) => {
    const userId = req.params.user_id

    const query = "SELECT question, answer, score, feedback FROM answers WHERE user_id = ?"

    db.query(query, [userId], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message })
        } else {
            res.json(result)
        }
    })
}

module.exports = getHistory