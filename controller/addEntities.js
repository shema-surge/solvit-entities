const {v4:uuidv4} = require('uuid')

const {getAllEntities} = require('./getEntities')
const {updateJSON,keepTemplate} = require('./helpers')


//add trainers

function addTrainer(name,age,stack){
    let entities = getAllEntities()
    let trainers = []
    let newTrainer = {
        id:uuidv4(),
        name:name,
        age:age,
        stack:stack
    }
    if(entities.trainers){
        trainers = [...entities.trainers,newTrainer]
        entities.trainers = trainers
    }else{
        trainers.push(newTrainer)
        entities.trainers=trainers
    }
    updateJSON(entities)
}

//add Trainees

function addTrainee(name,age,cohort,stack){
    let entities = getAllEntities()
    let trainees = []
    let newTrainee = {
        id:uuidv4(),
        name:name,
        age:age,
        cohort:cohort,
        stack:stack
    }
    if(entities.trainees){
        trainees = [...entities.trainees,newTrainee]
        entities.trainees = trainees
    }else{
        trainees.push(newTrainee)
        entities.trainees=trainees
    }
    updateJSON(entities)
}

//add staff

function addStaff(name,age,task){
    let entities = getAllEntities()
    let staff = []
    let newStaff = {
        id:uuidv4(),
        name:name,
        age:age,
        task:task
    }
    if(entities.staff){
        staff = [...entities.staff,newStaff]
        entities.staff = staff
    }else{
        staff.push(newStaff)
        entities.staff=staff
    }
    updateJSON(entities)
}


module.exports = {addTrainer,addTrainee,addStaff}