const express = require('express')

const { getAllEntities } = require('../controller/getEntities')
const { addTrainer,addTrainee,addStaff } = require('../controller/addEntities')

const router = express.Router()

router.post('/trainer',(req,res)=>{
    try{
        addTrainer(req.body.name,req.body.age,req.body.stack)
        res.status(200).json(getAllEntities().trainers)
    }catch(err){
        console.log(err)
    }
})

router.post('/trainee',(req,res)=>{
    try{
        addTrainee(req.body.name,req.body.age,req.body.cohort,req.body.stack)
        res.status(200).json(getAllEntities().trainees)
    }catch(err){
        console.log(err.message)
    }
})

router.post('/staff',(req,res)=>{
    try{
        addStaff(req.body.name,req.body.age,req.body.task)
        res.status(200).json(getAllEntities().staff)
    }catch(err){
        console.log(err.message)
    }
})

module.exports = router
