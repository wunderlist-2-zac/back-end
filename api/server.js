const express = require('express');
const authRouter = require('../auth/auth-router');
const tasksRouter = require('../tasks/tasks-router');
const restricted = require('../middleware/restricted-middleware');

// middleware
const qa = require('../middleware/qa-middleware');
const server = express();

server.use(express.json());

server.use('/api/auth', qa, restricted, authRouter);
server.use('/api/tasks', tasksRouter);

server.get('/', (req,res) => {
    res.json({message:"API IS WORKING!"})
})

module.exports = server; 