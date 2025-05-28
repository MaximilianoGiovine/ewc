import express from 'express';

import Router from './routes/'


const server = express()

server.use(express.json())

server.use('/api', Router)

export default server;