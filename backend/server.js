const express = require("express")
const cors = require("cors")
const userRoutes = require("./routes/userRoutes")
const resumeRoutes = require("./routes/resumeRoutes")
const aiRoutes = require("./routes/aiRoutes")

require("./db")

const app = express()

app.use(cors())
app.use(express.json())
app.use("/api/users", userRoutes)
app.use("/api/resume", resumeRoutes)
app.use("/api/ai", aiRoutes)

app.listen(5000, () => {
    console.log("Server running on port 5000")
})