import https from 'https';
import axios from 'axios';

const host = 'https://localhost';
const port = 9000;

const instance = axios.create({
    httpsAgent: new https.Agent({
        rejectUnauthorized: process.env.NODE_ENV !== 'development',
    }),
    headers: {
        'Access-Control-Allow-Origin': '0.0.0.0',
    },
});

export function getProjects() {
    return instance({
        url: `${host}:${port}/api/gl/getProjects`,
    }).then(response => {
        return response.data;
    }).catch(err => {
        throw err;
    });
}

export function getOpenIssues(projectId) {
    return instance({
        url: `${host}:${port}/api/gl/getIssues/${projectId}/opened`,
    }).then(response => {
        return response.data;
    }).catch(err => {
        throw err;
    });
}
