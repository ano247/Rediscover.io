const express = require('express')
require('dotenv').config();
const app = express();
const mongoose = require('mongoose');
const { create } = require('../models/Posts');
const post = require('../models/Posts');

mongoose.connect("process.env.DATABASE_URL", {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

app.use(express.json());

app.post('/savePost', (req, res) => {

    //try to save and then catch error
    const id = req.body.id;
    const url = req.body.url;

    try {
        const bookMarkEntry = new post(req.body)
        const createdEntry = await bookMarkEntry.save();
        res.json(createdEntry)
    }
    catch {
        res.status(400)
    }

})

app.post('/updatePost', (req, res) => {

})

app.get('/api/data', (req, res) => {

})

const port = 3001;

app.listen(port, () =>
    console.log("server started")
);