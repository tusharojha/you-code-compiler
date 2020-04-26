// Library Imports
const express = require("express");

const router = express.Router();

router.post("/runCode", (req, res) => {
    console.log(req.body)
    return res.status(201).send("tushar")
});

module.exports = router;
