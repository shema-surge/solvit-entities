const { getAllEntities } = require("./getEntities");
const { updateJSON } = require("./helpers");

function removeTrainer(id){
    let entities = getAllEntities()
    let trainers = getAllEntities().trainers
    if(trainers){
        let trainer = trainers.find(obj=>obj.id===id)
        if(trainer){
            let trainerIndex = trainers.findIndex(obj=>obj.id===id)
            trainers.splice(trainerIndex,1)
            entities.trainers = trainers
            updateJSON(entities)
        }else{
            throw new Error(`No account with Id:${id} was found`)
        }
    }
}

//remove trainee

function removeTrainee(id){
    let entities = getAllEntities()
    let trainees = getAllEntities().trainees
    if(trainees){
        let trainee = trainees.find(obj=>obj.id===id)
        if(trainee){
            let traineeIndex = trainees.findIndex(obj=>obj.id===id)
            trainees.splice(traineeIndex,1)
            entities.trainees = trainees
            updateJSON(entities)
        }else{
            throw new Error(`No trainee with Id:${id} was found`)
        }
    }
}

//remove staff

function removeStaff(id){
    let entities = getAllEntities()
    let staff_array = getAllEntities().staff
    if(staff_array){
        let st = staff_array.find(obj=>obj.id===id)
        if(st){
            let stIndex = staff_array.findIndex(obj=>obj.id===id)
            staff_array.splice(stIndex,1)
            entities.staff = staff_array
            updateJSON(entities)
        }else{
            throw new Error(`No trainee with Id:${id} was found`)
        }
    }
}

module.exports = {removeTrainer,removeTrainee,removeStaff}
