import https from 'https';
import express from 'express';
import fs from 'fs';
import path from 'path';
import cors from 'cors';

import gitlab from './controllers/gitlab';

import { PORT } from './constans';

const config = {
    key: fs.readFileSync(path.resolve(__dirname, 'config', 'ssl', 'server.key')),
    cert: fs.readFileSync(path.resolve(__dirname, 'config', 'ssl', 'server.crt')),
};

const app = express();

app.use(cors());

app.use('/api/gl', gitlab);

app.get('/api', (req, res) => {
    res.send('hello world');
});

const server = https.createServer(config, app);
server.listen(PORT, () => {
    console.log('Server started, listening on port: ', PORT);
});
