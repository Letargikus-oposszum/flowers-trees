// //const express = require('express');
// import express from 'express'
// import __dirname from './util/rootparth.js'

// const app = express();

// app.use(express.json());

// app.get('/', (req, res) => {
//     res.send('Hello üdvözöllek a weboldalamon.')
// })

// app.get('/weboldal', (req, res) => {
//     res.sendFile("./views/index.html", {root:__dirname});
// })

// app.get('/:parameter', (req, res) => {
//     res.send(req.params.parameter);
// })

// app.post('/', (req, res) =>{
//     const name = req.body.name;
//     const age = req.body.age;
//     console.log(name, age);
//     const obj = {name, age}
//     //res.status(201).json({message: obj});
//     res.json(obj);
// })
// app.listen(3000, () => {console.log("Server runs on port 3001");})

//const express = require('express');
import express from 'express'
import __dirname from './util/rootparth.js'

const app = express();

app.use(express.json());

app.get('/weboldal', (req, res) => {
    res.sendFile("./views/index.html", {root:__dirname});
})

app.get('/:parameter', (req, res) => {
    res.send(req.params.parameter);
})

app.post('/flowers', (req, res) =>{
    const name = req.body.name;
    const category = req.body.category;
    console.log(name, category);
    const obj = {name, category}
    //res.status(201).json({message: obj});
    res.json(obj);
})

app.post('/trees', (req, res) =>{
    const name = req.body.name;
    const category = req.body.category;
    console.log(name, category);
    const obj = {name, category}
    //res.status(201).json({message: obj});
    res.json(obj);
})
app.listen(3000, () => {console.log("Server runs on port 3001");})