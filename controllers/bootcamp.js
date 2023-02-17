const express =require('express')
const mongoose = require('mongoose')
const Bootcamp= mongoose.model("Bootcamp")
// const UserCollection = mongoose.model("User")

// @desc create bootcamp
// @route post api/v1/bootcamp
// @access Private
const createBootcamp = ((req,res,next)=>{

    const bootcamp = Bootcamp.create(req.body).then((bootcamp)=>{

        res.status(200).json({success:true, message:"create a new bootcamp",data:bootcamp})
        
    }).catch(err=>{
        console.log(err)
    })

})

// @desc get all bootcamps
// @route get api/v1/bootcamp
// @access public 

const getBootcamps = ((req,res,next)=>{

    Bootcamp.find().then(bootcamp=>{

        res.status(200).json({success:true, message:"get all  bootcamp",count:bootcamp.length,data:bootcamp})
    }).catch(err=>{
        console.log(err)
    }
    )

  
})

// @desc get single bootcamp
// get api/v1/bootcamp/:id
// access public 

const getBootcamp=((req,res,next)=>{

    Bootcamp.findById(req.params.id).then(bootcamp=>{
        if(!bootcamp){
            return res.status(400).json({success:false})
        }
        res.status(200).json({success:true, message:`get single bootcamp ${req.params.id}`,data:bootcamp})
    })
    .catch(err=>{
        console.log(err)
    })
})

// @desc update bootcamp
// put api/v1/bootcamp/:id
// access private

const updateBootcamp= ((req,res,send)=>{

    Bootcamp.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
    })
    .then(bootcamp=>{
        if(!bootcamp){
            return res.status(400).json({success:false})
        }
        res.status(200).json({success:true, message:`update bootcamp ${req.params.id}`,data:bootcamp}).catch(err=>{
            console.log(err)
        })
    })
})

// @delete bootcamp
// delete api/v1/bootcamp/:id
// access private

const deleteBootcamp= ((req,res,send)=>{
    
    Bootcamp.findByIdAndDelete(req.params.id).then(bootcamp=>{
        if(!bootcamp){
            return res.status(400).json({success:false})
        }
        res.status(200).json({success:true, message:`delete bootcamp ${req.params.id}`,data:bootcamp})
    }
    ).catch(err=>{
        console.log(err)
    }
    )
})


module.exports={createBootcamp,getBootcamps,getBootcamp,updateBootcamp,deleteBootcamp}

