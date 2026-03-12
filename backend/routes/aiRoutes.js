const express = require("express")
const generateQuestions = require("../controllers/aiController")

const router = express.Router()

router.post("/questions", generateQuestions)

module.exports = router