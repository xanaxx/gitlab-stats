import express from 'express';

import { PORT } from './constans';

const app = express();

app.get('/api/getIssues', (req, res, next) => {
});

app.listen(PORT, () => {
    console.log('Server listening on po  rt: ', PORT);
})

