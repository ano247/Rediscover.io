const express = require('express')
require('dotenv').config();
const app = express();
const mongoose = require('mongoose');
//const { create } = require('../models/Posts');
const post = require('../models/Posts');
const cors = require('cors');
//const { findOneAndUpdate } = require('../models/Posts');

app.use(cors())

mongoose.connect("process.env.DATABASE_URL", {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

app.use(express.json());

app.post('/savePost', async (req, res) => {

    //try to save and then catch error
    const id = req.body.id;
    const url = req.body.url;

    try {
        const bookMarkEntry = new post({
            id: re.body, id,
            title: req.body.title,
            thumb: req.body.favIconUrl,
            url: req.body.url
        })
        const createdEntry = await bookMarkEntry.save();
        res.json(createdEntry)
    }
    catch {
        res.status(400)
    }
})

app.post('/updatePost', async (req, res) => {
    const parsed = req.body.tags.split(" ");
    const bookmarkId = req.body.id

    try {
        const updated = await findOneAndUpdate({
            id: bookmarkId
        },
            { tags: parsed },
            { insight: req.body.insights }
        )
        res.json(updated)
    } catch (err) {
        res.send(err)
    }
})

app.get('/api/data', async (req, res) => {
    try {
        const all = await post.find()
        res.json(all);
    }
    catch (err) {
        res.send(err)
    }
})

const port = 3001;

app.listen(port, () =>
    console.log("server started")
);