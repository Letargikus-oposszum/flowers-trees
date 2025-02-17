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
import __dirname from './rootparth.js'

const app = express();

app.use(express.json());

app.get('/weboldal', (req, res) => {
    res.sendFile("./index.html", {root:__dirname});
})

const flowers = [
    {name:"Pipacs", category:"evelo"},
    {name:"Pitypang", category:"egyeves"},
    {name:"Szazszorszep", category:"egyeves"}
]

const trees = [
    {name:"tolgy", category:"lombhullato"},
    {name:"Fenyo", category:"orokzold"},
    {name:"Bukk", category:"lombhullato"}
]

app.get('/flowers', (req, res) => {
    res.json(flowers);
})
app.get('/trees', (req, res) => {
    res.json(trees);
})
app.get('/',(req, res) => {
    res.sendFile("./error.html", {root:__dirname});
})
app.get('/:parameter', (req, res) => {
    res.send(req.params.parameter);
})

// app.post('/flowers', (req, res) =>{
//     const name = req.body.name;
//     const category = req.body.category;
//     console.log(name, category);
//     const obj = {name, category}
//     //res.status(201).json({message: obj});
//     res.json(obj);
// })

// app.post('/trees', (req, res) =>{
//     const name = req.body.name;
//     const category = req.body.category;
//     console.log(name, category);
//     const obj = {name, category}
//     //res.status(201).json({message: obj});
//     res.json(obj);
// })
app.listen(3010, () => {console.log("Server runs on port 3010");})
