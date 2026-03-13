const express = require("express")
const cors = require("cors")
const userRoutes = require("./routes/userRoutes")
const resumeRoutes = require("./routes/resumeRoutes")
const aiRoutes = require("./routes/aiRoutes")
const answerRoutes = require("./routes/answerRoutes")
const historyRoutes = require("./routes/historyRoutes")
const dashboardRoutes = require("./routes/dashboardRoutes")

require("./db")

const app = express()

app.use(cors())
app.use(express.json())
app.use("/api/users", userRoutes)
app.use("/api/resume", resumeRoutes)
app.use("/api/ai", aiRoutes)
app.use("/api/answer", answerRoutes)
app.use("/api/history", historyRoutes)
app.use("/api/dashboard", dashboardRoutes)

app.listen(5000, () => {
    console.log("Server running on port 5000")
})