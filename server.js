const express = require("express");
let app = express()

app.get("/",(req,res)=>{
    res.json("test")
})
app.listen(8080) 