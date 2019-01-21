import express from 'express';

import { PORT } from './constans';

const app = express();

app.get('/api/getIssues', (req, res, next) => {
    res('hello world');
});

app.get('/api', (req, res, next) => {
    res.send('hello worl d');
});

app.listen(PORT, () => {
    console.log('Server listening on port: ', PORT);
});

