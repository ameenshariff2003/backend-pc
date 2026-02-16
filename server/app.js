const { config } = require('dotenv');
const express = require('express')
const app = express();
config('dotenv')
const cors = require('cors')


app.use(express.json());
app.use(cors())





module.exports = app;