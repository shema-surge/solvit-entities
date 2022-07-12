const { getAllEntities } = require('./getEntities');
const { updateJSON } = require('./helpers')

// update trainer

function updateTrainer(id,name,age,stack){
    let entities = getAllEntities()
    let trainers = getAllEntities().trainers
    if(trainers){
        let trainer = trainers.find(obj=>obj.id===id)
        if(trainer){
            let trainerIndex = trainers.findIndex(obj=>obj.id===id)
            trainer.name=name
            trainer.age=age
            trainer.stack=stack
            trainers.splice(trainerIndex,1,trainer)
            entities.trainers = trainers
            updateJSON(entities)
        }else{
            return new Error(`No account with Id:${id} was found`)
        }
    }
}

function updateTrainee(id,name,age,cohort,stack){
    let entities = getAllEntities()
    let trainees = getAllEntities().trainees
    if(trainees){
        let trainee = trainees.find(obj=>obj.id===id)
        if(trainee){
            let traineeIndex = trainees.findIndex(obj=>obj.id===id)
            trainee.name=name
            trainee.age=age
            trainee.cohort=cohort
            trainee.stack=stack
            trainees.splice(traineeIndex,1,trainee)
            entities.trainees = trainees
            updateJSON(entities)
        }else{
            return new Error(`No account with Id:${id} was found`)
        }
    }
}

function updateStaff(id,name,age,task){
    let entities = getAllEntities()
    let staff_array = getAllEntities().staff
    if(staff_array){
        let st = staff_array.find(obj=>obj.id===id)
        if(st){
            let stIndex = staff_array.findIndex(obj=>obj.id===id)
            st.name=name
            st.age=age
            st.task=task
            staff_array.splice(stIndex,1,st)
            entities.staff = staff_array
            updateJSON(entities)
        }else{
            return new Error(`No trainee with Id:${id} was found`)
        }
    }
}

module.exports = {updateTrainer,updateTrainee,updateStaff}