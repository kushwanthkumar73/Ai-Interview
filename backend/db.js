const mysql = require("mysql2")

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "kussu123",
    database: "ai_interview"
})

connection.connect((err) => {
    if (err) {
        console.log("Database connection failed", err)
    } else {
        console.log("Connected to MySQL")
    }
})

module.exports = connection