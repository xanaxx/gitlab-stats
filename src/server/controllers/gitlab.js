import express from 'express';

import * as GL from '../services/api/gitlab.api';
import { API_TOKEN, ADDRESS } from '../constans';

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
