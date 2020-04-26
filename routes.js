// Library Imports
const express = require("express");
var request = require("request");

// Project Imports
const {clientId, clientSecret} = require("./config")

const router = express.Router();

router.post("/runCode", (req, res) => {
    if (req.body.language == "python") req.body.language = "python3";
    console.log(req.body)
    var program = {
        script : req.body.code,
        language: req.body.language,
        stdin: req.body.input,
        versionIndex: "0",
        clientId,
        clientSecret
    };
    request({
        url: 'https://api.jdoodle.com/v1/execute',
        method: "POST",
        json: program
    },
    function (error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        return res.status(201).send(body)
    });
});

module.exports = router;
