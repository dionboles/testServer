const express = require("express");
let app = express()
var port = process.env.PORT

app.get("/",(req,res)=>{
    res.json("test")
})
app.listen(port) 