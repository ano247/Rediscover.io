const express = require('express')
require('dotenv').config();
const app = express();

app.use(express.json());

app.post('/savePost', (req, res) => {

    //try to save and then catch error
    const id = req.body.id;
    const url = req.body.url;

    try {

    }
    catch {

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