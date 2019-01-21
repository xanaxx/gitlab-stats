import axios from 'axios';

import { ADDRESS, API_TOKEN } from '../../constans';

export function getProjects() {
    return axios({
        url: `${ADDRESS}/projects`,
        headers: {
            'PRIVATE-TOKEN': API_TOKEN,
        },
    }).then(result => {
        return result.data.filter(item => {
            return item.visibility === 'public';
        });
    });
}
