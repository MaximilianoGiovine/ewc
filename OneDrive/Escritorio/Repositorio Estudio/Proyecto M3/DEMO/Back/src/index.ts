import express from 'express';
import server from './server';
import { PORT } from './config/envs';
import router from './routes/Recursos';

server.listen(PORT, () => {
    console.log('server is running on port 3000');
});

server.use(express.json())
server.use(router)