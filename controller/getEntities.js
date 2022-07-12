const { join } = require('path')

// get all Entities

function getAllEntities(){
    let jsonData = require(join(__dirname,'../model/entities.json'))
    return jsonData
}

module.exports= {getAllEntities}