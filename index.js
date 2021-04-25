const express = require("express");
const bodyParser = require("body-parser")
const mongoose = require('mongoose')
const cors = require("cors")
const routs = require("./routs/workshopRouter")

const app = express();
const MONGO_URL = 'mongodb+srv://sreenath:7477@cluster0.kabfb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(MONGO_URL,{useNewUrlParser: true, useUnifiedTopology: true })
app.use(bodyParser.json());

app.use(cors())
app.use('/', routs);


const port = process.env.PORT || 8081;

app.listen(port,function(){
    console.log(`server is listening at ${port}`)
})
