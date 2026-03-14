const db = require("../db")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const registerUser = async (req, res) => {
    const { name, email, password } = req.body

    const hashedPassword = await bcrypt.hash(password, 10)

    const query = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)"

    db.query(query, [name, email, hashedPassword], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message })
        } else {
            res.json({ message: "User registered successfully" })
        }
    })
}

const loginUser = (req, res) => {
    const { email, password } = req.body

    const query = "SELECT * FROM users WHERE email = ?"

    db.query(query, [email], async (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message })
        } else if (result.length === 0) {
            res.status(400).json({ message: "User not found" })
        } else {
            const user = result[0]

            const isMatch = await bcrypt.compare(password, user.password)

            if (isMatch) {
                const token = jwt.sign({ id: user.id }, "mysecretkey")

                res.json({
                    message: "Login successful",
                    token: token,
                    user_id: user.id
                })
            } else {
                res.status(400).json({ message: "Invalid password" })
            }
        }
    })
}

module.exports = { registerUser, loginUser }