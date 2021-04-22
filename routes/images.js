const express = require('express')
const router = express.Router()

router.get("/", async (req, res) => {
    res.json({ 
        code: 'FUCK YOU'
    })
})

module.exports = router
