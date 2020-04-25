// Library Imports
const express = require("express");

// Project Imports
const routes = require("./routes")

const PORT = process.env.PORT || 3000;
const app = express()

app.use('/', routes)

app.listen(PORT, ()=>{
console.log(`Server started at port ${PORT}`)
})
