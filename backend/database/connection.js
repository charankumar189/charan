const mongoose = require('mongoose')

function RunServer(){
    try{
    mongoose.connect('mongodb://localhost:27017/firstdatabase');
    console.log('MongoDB connected')
} catch (error){
    console.log('Not Connected')
    }
}
module.exports=RunServer
