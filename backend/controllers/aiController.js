const db = require("../db")
const axios = require("axios")

const generateQuestions = (req, res) => {
    const userId = req.body.user_id

    const query = "SELECT resume_text FROM resumes WHERE user_id = ? ORDER BY id DESC LIMIT 1"

    db.query(query, [userId], async (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message })
        }

        const resume = result[0].resume_text

        const prompt = `Generate 5 technical interview questions based on this resume: ${resume}`

        try {
            const response = await axios.post(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
                {
                    contents: [
                        {
                            parts: [
                                {
                                    text: prompt
                                }
                            ]
                        }
                    ]
                }
            )

            const output =
                response.data.candidates[0].content.parts[0].text

            res.json({
                source: "Gemini AI",
                questions: output
            })

        } catch (error) {
            res.json({
                source: "Fallback Logic",
                questions: [
                    "Explain React lifecycle methods",
                    "Explain Node.js event loop",
                    "Difference between INNER JOIN and LEFT JOIN",
                    "How JWT authentication works?"
                ]
            })
        }
    })
}

module.exports = generateQuestions