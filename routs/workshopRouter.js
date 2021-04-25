const express = require("express");
const Workshop = require("../model/Workshop")

const route = express.Router()


route.get("/data",async function(req,res){
    try{
        const datas = await Workshop.find(); 
        res.json(datas);
    }catch(err){
        res.status(400).json({errMsg:err.message})
    }
})

route.post("/enroll", async function(req,res){
    try{
        let workshop = new Workshop(req.body);
        await workshop.save();
        res.json({message:"success",workshop:workshop})
    }catch(err){
        res.status(400).json({message:err.message})
    }
})

module.exports = route;