import express from 'express';

import * as GL from '../services/api/gitlab.api';

const router = express.Router();

router.get('/getProjects', (req, res) => {
    GL.getProjects().then(result => {
        res.send(result);
    }).catch(e => {
        console.error(e);
        res.send('Error');
    });
});


export default router;
