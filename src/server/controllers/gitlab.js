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

router.get('/getIssues/:projectId/opened', (req, res) => {
    GL.getOpenIssues(req.params.projectId).then(result => {
        res.send(result);
    });
});


export default router;
