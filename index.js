const rateLimit = require("express-rate-limit");
const express = require("express")
const loadAllRoutes = require("./funcs/loadRoutes")
var app = new express()

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});

app.use(limiter);

loadAllRoutes(app)
app.listen(8000, () => {
    console.log(`Listening on port 8000`)
})