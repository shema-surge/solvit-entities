const fs = require('fs')
const path = require('node:path')

function updateJSON(entity){
    fs.writeFileSync(path.join(__dirname,'../model/entities.json'),JSON.stringify(entity))
}

module.exports = {updateJSON}