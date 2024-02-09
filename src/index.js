const express = require("express");

const app = express();
const PORT = '3001';

app.listen(PORT, () => console.log('Running Express server in Port : ' + PORT));

app.get('/books', (req, res) => {
        res.send([
                {
                        "name": "tesing in software",
                        "number": 203
                },
                {
                        "name": "tesing in software",
                        "number": 203
                },
                {
                        "name": "tesing in software",
                        "number": 203
                },
        ])
})