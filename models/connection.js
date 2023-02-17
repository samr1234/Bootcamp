const express = require('express')
const mongoose = require('mongoose')
const color=require('colors')



mongoose.connect("mongodb://localhost:27017/training", {useNewUrlParser: true, useUnifiedTopology: true},(err)=>{
if(err){
console.log(err)
}
else{
console.log(`Connected to MongoDB`.green)
}
})
