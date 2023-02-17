const express = require('express')
const app = express();
const dotenv = require('dotenv')
const color=require('colors')
// const mongoose = require('mongoose')

// all the models

require("./models/Bootcamp1")
require("./models/connection")


// all the routes

const bootcampRouter = require("./routes/bootcamp")
const authrouter= require("./routes/authentication")


// const logger= require("./middlewares/logger")
const morgan= require('morgan')

dotenv.config({ path: './.env' })

const port = process.env.PORT || 6000

// database




app.use(express.json())
app.use(morgan("combined"))
app.use("/api/v1/bootcamp/",bootcampRouter)
// app.use(authrouter)

app.listen(port, () => {

    console.log(`Server is running on port ${port}`.blue)
})

