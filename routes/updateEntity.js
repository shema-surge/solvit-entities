const express = require('express')
const { updateTrainer } = require('../controller/updateEntities')
const router = express.Router()

router.put('/trainer',(req,res)=>{
    try{
        updateTrainer(req.body.id,req.body.name,req.body.age,req.body.stack)
        res.status(200).json(getAllEntities().trainers)
    }catch(err){
        console.log(err)
    }
})

router.put('/trainee',(req,res)=>{
    try{
        updateTrainee(req.body.id,req.body.name,req.body.age,res.body.cohort,req.body.stack)
        res.status(200).json(getAllEntities().trainers)
    }catch(err){
        console.log(err)
    }
})

router.put('/staff',(req,res)=>{
    try{
        updateTrainee(req.body.id,req.body.name,req.body.age,req.body.task)
        res.status(200).json(getAllEntities().trainers)
    }catch(err){
        console.log(err)
    }
})

module.exports = router