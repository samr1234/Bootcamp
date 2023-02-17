const express= require('express');

const mongoose= require('mongoose');
const userCollection= mongoose.model("bootcampSignup");
const jwt= require('jsonwebtoken');
const dotenv= require('dotenv');
// const {jwtKey}= require('../secret');

const checkLogin= (req,res,next)=>{

   const {authorization} =req.headers

    if(!authorization){
        return res.send({error:"you must be logged in"})
    }
    
    const token= authorization.replace("Bearer ","")
    // console.log(token)
    jwt.verify(token,process.env.JWT_KEY,(err,decoded)=>{

    if(err){
        console.log(err)
        return res.send({error:"you must be logged in 2"})
    }
    let {_id}= decoded
    userCollection.findById(_id).then((userFound)=>{
        console.log(userFound)
        req.user=userFound
        next()
    }).catch((err)=>{
        return res.send({error:"while finding user"})
    }
    )
  
  })



}

module.exports= checkLogin;