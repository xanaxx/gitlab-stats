import axios from 'axios';

export function getProjects() {
    axios({
        url: `https://localhost:9000/api/gl/getProjects`,
    }).then(res => {
        console.log('====================================');
        console.log(res);
        console.log('====================================');
    });
}
