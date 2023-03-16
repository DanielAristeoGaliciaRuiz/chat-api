const express=require('express')

const responses=require('./utils/handleResponses')
const db=require('./utils/database')
const initModels = require('./models/init.models')

const conversationRouter=require('./conversations/conversations.router')
const userRouter = require('./users/users.router')
const authRouter=require('./auth/auth.router')

const app=express()

app.use(express.json())

db.authenticate()
    .then(()=>console.log('Database authenticated'))
    .catch(err=>console.log(err))

db.sync()
    .then(()=>console.log('Database Synced'))
    .catch(err=>console.log(err))

    initModels()

app.get('/', (req,res)=>{
    responses.success({
        res,
        status:200,
        message:'Servidor inicializado correctamente'
    })
})



app.use('/api/v1/users', userRouter)
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/conversations', conversationRouter)


app.use('*',(req,res)=>{
    responses.error({
        res,
        status:404,
        message:'Url not found, please try with ...'
    })
})

app.listen(9000,()=>{
    console.log('Server started at port 9000')
})