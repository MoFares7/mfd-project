const express = require("express");

const app = express();
const PORT = '3001';

app.use(express.json());

app.listen(PORT, () => console.log('Running Express server in Port : ' + PORT));

//define list 
const listTesting = [{
        name: "fares",
        quantity: 4
}];

app.get('/books', (req, res) => {
        res.send(listTesting)
        return
});

app.post('/books', (req, res) => {
        listTesting.push(req.body);
        res.status(201).send(listTesting);
        return
})