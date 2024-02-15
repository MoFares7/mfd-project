const express = require("express");
const db = require("../config/db.js");
const router = require("./routes/router.js");
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = '3001';

app.use(express.json());
app.use('/api', router);
app.use(bodyParser.json());

app.listen(PORT, () => console.log('Running Express server in Port : ' + PORT));


