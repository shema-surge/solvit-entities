const express = require('express')
const dotenv = require('dotenv')
dotenv.config()

const app = express()
app.use(express.json())

app.use('/entities',(req,res,next)=>{
    console.log({path:req.path,method:req.method})
    next()
})


const getEntities = require('./routes/getEntities')
const addNewEntity = require('./routes/addNewEntity')
const removeEntity = require('./routes/removeEntity')
const updateEntity = require('./routes/updateEntity')

app.use('/entities',getEntities)
app.use('/entities',addNewEntity)
app.use('/entities',removeEntity)
app.use('/entities',updateEntity)


app.listen(process.env.PORT,()=>{
    console.log(`Server listening on PORT: ${process.env.PORT}`)
})