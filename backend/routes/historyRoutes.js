const express = require("express")
const getHistory = require("../controllers/historyController")

const router = express.Router()

router.get("/:user_id", getHistory)

module.exports = router