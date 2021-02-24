const express = require('express')
require('dotenv').config();
const app = express();

app.use(express.json());

app.post('/api', (req, res) => {

    //parse tags field 


    //try to save and then catch error
    try {

    }
    catch {

    }

})

app.get('/api/data', (req, res) => {

})

const port = 3001;

app.listen(port, () =>
    console.log("server started")
);