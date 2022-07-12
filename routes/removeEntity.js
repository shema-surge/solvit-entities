const express = require('express')
const { getAllEntities } = require('../controller/getEntities')
const { removeTrainer, removeStaff, removeTrainee } = require('../controller/removeEntities')
const router = express.Router()

router.delete('/trainer/:id',(req,res)=>{
    try{
        removeTrainer(req.params.id)
        res.status(200).json(getAllEntities().trainers)
    }catch(err){
        console.log(err.message)
    }
    
})

router.delete('/trainee:id',(req,res)=>{
    try{
        removeTrainee(req.params.id)
        res.status(200).json(getAllEntities().trainees)
    }catch(err){
        console.log(err.message)
    }
})

router.delete('/staff',(req,res)=>{
    try{
        removeStaff(req.params.id)
        res.status(200).json(getAllEntities().trainees)
    }catch(err){
        console.log(err.message)
    }
})

module.exports = router