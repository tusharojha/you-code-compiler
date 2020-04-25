// Library Imports
const express = require("express");
const bodyParser = require("body-parser")

// Project Imports
const routes = require("./routes")

const PORT = process.env.PORT || 5000;
const app = express()

app.use('/', routes)

app.listen(PORT, ()=>{
console.log(`Server started at port ${PORT}`)
})
