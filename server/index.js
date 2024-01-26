const express = require('express')
const sequelize = require('./db')
const PORT = process.env.PORT || 5000
const authRouter = require('./authRouter')
const app = express()

app.use(express.json())
app.use('/auth', authRouter)
const start = async () =>{
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`server started on ${PORT}`))
    } catch (e){
        console.log(e)
    }
}

start()
