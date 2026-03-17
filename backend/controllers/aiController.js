const db = require("../db")
const axios = require("axios")

const generateQuestions = (req, res) => {
    const userId = req.body.user_id

    const query =
        "SELECT resume_text FROM resumes WHERE user_id = ? ORDER BY id DESC LIMIT 1"

    db.query(query, [userId], async (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message })
        }

        const resume = result[0].resume_text

        const prompt = `
Generate exactly 5 technical interview questions for a Full Stack Developer.
Skills from resume:
${resume}

Return only JSON array format like:
[
 "Question 1",
 "Question 2",
 "Question 3"
]
`

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

            let questions

            try {
                questions = JSON.parse(output)
            } catch {
                questions = output
                    .split("\n")
                    .filter((line) => line.trim() !== "")
            }

            res.json({
                source: "Gemini AI",
                questions
            })

        } catch (error) {
            
            const fallbackPool = [
                "Explain React hooks with practical use cases",
                "How does Node.js event loop handle async tasks?",
                "Difference between SQL indexing and joins",
                "Explain JWT authentication flow in production",
                "How to optimize React rendering performance",
                "Difference between MongoDB and MySQL",
                "Explain middleware in Express.js",
                "What is normalization in databases"
            ]

            const randomQuestions = fallbackPool
                .sort(() => Math.random() - 0.5)
                .slice(0, 5)

            res.json({
                source: "Smart Fallback",
                questions: randomQuestions
            })
        }
    })
}

module.exports = generateQuestions