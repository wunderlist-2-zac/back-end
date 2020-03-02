const express = require('express');
const authRouter = require('../auth/auth-router');
const tasksRouter = require('../tasks/tasks-router');
const cors = require('cors');
const helmet = require('helmet');

// middleware
const restricted = require('../middleware/restricted-middleware');

const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());

server.use('/api/auth', authRouter);
server.use('/api/tasks', restricted, tasksRouter);

server.get('/', (req,res) => {
    res.send('API IS WORKING!');
})

module.exports = server; 