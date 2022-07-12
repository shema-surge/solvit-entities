const express = require('express')
const { getAllEntities } = require('../controller/getEntities')

const router = express.Router()

router.get('/trainers',(req,res)=>{
    res.status(200).json({trainers : getAllEntities().trainers})
})

router.get('/trainees',(req,res)=>{
    res.status(200).json({trainees : getAllEntities().trainees})
})

router.get('/staff',(req,res)=>{
    res.status(200).json({staff : getAllEntities().staff})
})

module.exports = router