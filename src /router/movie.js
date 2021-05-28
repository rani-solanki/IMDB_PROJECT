const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const Movie = require('../models/movieSchema');
const fs = require('fs');

validation = [check(
    "Title", "please entter  the movie tittle").not().isEmpty(),
    check("Year", "please entter  the movie year").not().isEmpty(),
    check("Actors", "please entter  the movie Actor").not().isEmpty(),
    check("Director", "please entter  the movie tittle").not().isEmpty(),
    check("Poster", "please entter  the movie tittle").not().isEmpty(),
    check("Ratings", "please entter  the movie Ratings").not().isEmpty(),
    check("Gener", "please entter  the movie tittle").not().isEmpty(),
    check("Artists", "please entter  the movie tittle").not().isEmpty()
]

router.post('/movie', validation, async (res, req) => {
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