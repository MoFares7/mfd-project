const express = require("express");
const db = require("../config/db.js");
const router = require("./routes/router.js");

const app = express();
const PORT = '3001';

app.use(express.json());
app.use(router);

app.listen(PORT, () => console.log('Running Express server in Port : ' + PORT));


