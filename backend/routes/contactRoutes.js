const express = require('express')
const submitMessage = require('../controllers/contactCtrl')


const contactRouter = express.Router()
contactRouter.post('/submit',submitMessage);

module.exports=submitMessage;