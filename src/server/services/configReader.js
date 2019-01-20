import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export function getConfig() {
    console.log('getting config')
    const config = fs.readFileSync(path.join(__dirname, 'config.yml'))
    console.log('config', config);
}
