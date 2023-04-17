const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./config/database');

dotenv.config()

const app = express();
app.use(cors());
app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))

app.get('/', (req, res) => {
    res.json({ message: "Hello World!" })
})

const PORT = process.env.PORT || 7777;

db();

app.listen(PORT, () => {
    console.log("server is running on port: " + PORT)
})