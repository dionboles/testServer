const express = require("express");
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('data.db')
let app = express()
var port = process.env.PORT

app.get("/",(req,res)=>{
    res.json("test")
})
app.listen(port) 