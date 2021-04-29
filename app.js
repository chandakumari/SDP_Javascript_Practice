// import express from 'express';
// import bodyParser from 'bodyParser'; //this allow us to takein incoming post request body
// const app = express(); //whole appl. alies in app
// const PORT = 5000;
// app.use(bodyParser.json());//we use json data in whole appl. and it is common format for sending and rec. data to address the api
// app.listen(PORT,() => console.log(`HELLO WORLD running on :${PORT}`));


const express = require('express')
const app = express()
const port = 3000

app.use(func);

app.get('/', (req, res,next) => {
  res.send('Hello World!,Hey CHANDA')
  console.log("Get Request");
  next();
})
app.get('/about', (req, res,next) => {
    res.send('Hello World!,Hey CHANDA')
    console.log("Get Request");
    next();
  })
app.post('/', function (req, res,next) {
    res.send('Got a POST request')
    let value = 5;
    if(value == 5) console.log("correct");
    console.log("incorrect");
    next()
})
app.put('/user', function (req, res) {
    res.send('put request called')
})
//app.use(func)

function func(req,res,next){
    console.log("middleware");
    next()
}

app.listen(port, () => {
  console.log(`Hello World running on http://localhost:${port}`)
})