const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())


const connect  = ()=>{
    return mongoose.connect("mongodb+srv://boat123:boat123@cluster0.zcqewyi.mongodb.net/?retryWrites=true&w=majority")
}

require("./mainRoute")(app);
app.listen(9999,()=>{
    connect()
    console.log("Database connected successfully")
})