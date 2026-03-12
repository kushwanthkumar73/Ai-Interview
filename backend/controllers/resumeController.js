const fs = require("fs")
const pdfParse = require("pdf-parse")
const db = require("../db")

const uploadResume = async (req, res) => {
    try {
        const filePath = req.file.path
        const pdfBuffer = fs.readFileSync(filePath)

        const data = await pdfParse(pdfBuffer)

        const resumeText = data.text
        const userId = req.body.user_id

        const query = "INSERT INTO resumes (user_id, resume_text) VALUES (?, ?)"

        db.query(query, [userId, resumeText], (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message })
            } else {
                res.json({
                    message: "Resume uploaded successfully",
                    extractedText: resumeText
                })
            }
        })

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = uploadResume