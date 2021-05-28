const express = require('express');
const bodyParser = require("body-parser");
const { dbConnect } = require('./config/db');
const app = express()

dbConnect();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const movie = require("./src /router/movie")
const user = require("./src /router/user")
const auth = require("./src /router/auth")

app.use(movie, user,auth )
const PORT = process.env.PORT || 1900;

app.listen(PORT, () => {
    console.log("server is runing",PORT)
})










