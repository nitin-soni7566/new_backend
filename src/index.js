// const express = require('express')
import express from "express"
const app = express()
const port = 3000


app.get("/",(req,res)=>{
res.json({
    "name":"Nitin soni",
    "date_of_brith":"26-08-1998",
    "age":26,
    "mobile":"7566116043",
})
})

app.get("/git",(req,res)=>{

    // console.log(req)
    res.send("nitin-7566")
})
app.get("/pay",(req,res)=>{

    // console.log(req)
    res.send("paytm")
})



app.listen(port,()=>{

    console.log(`http://localhost:${port}`)
})