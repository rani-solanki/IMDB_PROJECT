const express = require('express').Router();
const { check, validationResult } = require('express-validator');
const Movie = require('../models/movieSchema');
const fs = require('fs');

router.post('/movie', async (res, req) => {
    const error = validationResult(req)
    if (!error.isEmpty()) {
        res.status(400).json({ error: error.array() })
    }
    try {
        let rawdata = fs.readFileSync('movieData.json');
        let student = JSON.parse(rawdata);
        console.log(student);

    } catch (err) {
        console.error(err)
    }
})

module.exportsm = router;