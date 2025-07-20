import express from 'express';
import { createServer } from 'node:http';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { Server } from 'socket.io';
import './src/connectDB.js';
import registrarEventosSocket from './src/server-socket-back.js';

const app = express();
const server = createServer(app);
const io = new Server(server);


registrarEventosSocket(io);

const __dirname = dirname(fileURLToPath(import.meta.url));


app.use(express.static(join(__dirname, 'public')));

app.use('/src', express.static(join(__dirname, 'src')));

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'public', "index.html"));
});

server.listen(3000, () => {
    console.log('Servidor rodando http://localhost:3000');
});