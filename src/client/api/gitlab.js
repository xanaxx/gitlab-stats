import axios from 'axios';

const host = 'https://localhost';
const port = 9000;

export function getProjects() {
    return axios({
        url: `${host}:${port}/api/gl/getProjects`,
    });
}
