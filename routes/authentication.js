// const express = require('express')
// const authrouter = express.Router()
// const mongoose= require('mongoose')
// const UserCollection = mongoose.model("BootcampSignup")
// const bcrypt = require('bcrypt')
// const jwt = require('jsonwebtoken')
// const dotenv = require('dotenv')


// // @desc signup
// // @route post api/v1/auth/signup
// // @access public
// authrouter.post("/api/v1/auth/signup/",(req,res,)=>{

//     const {name,email,role,password}=req.body;

//     if(!name || !email || !password){
//         return res.status(422).json({error:"please add all the fields"})
//     }
//     if(password.length<6){
//         return res.status(422).json({error:"password must be atleast 6 characters"})
//     }
//     if(!email.includes("@")){
//         return res.status(422).json({error:"invalid email"})
//     }

//     UserCollection.findOne({email:email}).then((savedUser)=>{
//         if(savedUser){
//             return res.status(422).json({error:"user already exists with that email"})
//         }
//         bcrypt.hash(password,12).then(hashedpassword=>{

//             const user = new UserCollection({
//                 name:name,
//                 email,email,
//                 role:role,
//                 password:hashedpassword
//             })

//             user.save().then(user=>{
//                 res.json({message:"saved successfully"})
//             })
            
//         }).catch(err=>{
//             console.log(err)
//         })

    
// }).catch(err=>{

//     console.log("error while finding user")
// })

// })

// // @desc signin
// // @route post api/v1/auth/signin
// // @access public

// authrouter.post("/signin/",(req,res)=>{

//     const {email,password}=req.body;

    

//     UserCollection.findOne({email:email}).then((savedUser)=>{

//         if(!savedUser){
//             return res.status(422).json({error:"invalid email or password"})
//         }
//         bcrypt.compare(password,savedUser.password).then(doMatch=>{
//             if(doMatch){
//                 res.json({message:"successfully signed in"})
//             }
//             else{
//                 token = jwt.sign({ _id:savedUser._id },process.env.JWT_KEY);
//                 return res.send({message:"user logged in successfully",token:token})
               
//             }
//         }).catch(err=>{
//             console.log(err)
//         })
//     })
// })

// module.exports=authrouter;