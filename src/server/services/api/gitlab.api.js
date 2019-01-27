import axios from 'axios';

import { ADDRESS, API_TOKEN } from '../../constans';

const instance = axios.create({
    headers: {
        'PRIVATE-TOKEN': API_TOKEN,
    },
});

export function getProjects() {
    return instance({
        url: `${ADDRESS}/projects`,
    }).then(result => {
        return result.data.filter(item => {
            return item.visibility === 'public';
        });
    });
}

export function getOpenIssues(projectId, page = 1) {
    return instance({
        url: `${ADDRESS}/projects/${projectId}/issues?per_page=100&page=${page}&state=opened`,
    }).then(result => {
        if (result.data.length === 100) {
            return getOpenIssues(projectId, page + 1).then(res => {
                return result.data.concat(res);
            });
        } else {
            return result.data;
        }
    });
}
