const express = require('express');
const router = express.Router();
//code below lets me call my context from my information file and bring it to this file
const information=require('./information')

// the code below let the client send a requset to jus the index and you will get the message below
router.get('/',(request,response)=>{
    response.send("Welcome to the Suport Page")
});
// the code below lets the client type signin and the message below shows
router.get('/signin',(request,response)=>{
    response.send('Please sign in with your Memeber credemtials')
});
//i did this one different i put the num and name as a function in my information file and it returns the message below and you have past the number with the params and the parseINt
router.get('/contact/:num/:name',(request,response)=>{
    response.send("thank you keisha we will contact you shortly at " +(parseInt(request.params.num)))
});

module.exports = router;