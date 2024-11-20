// entry point for express
const express=require('express')
const RunServer = require('./database/connection');
const userRouter = require('./routes/userRoutes');




const app=express();
const port=3000;

// json: transmitting the data b/w  client and server
app.use(express.json())

RunServer()

app.use('/user',userRouter)
app.use('/contact',contactRouter)


app.listen(port, ()=>{
    console.log(`server is running on ${port} port!`)
})