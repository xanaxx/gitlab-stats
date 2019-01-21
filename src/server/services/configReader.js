import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export function getConfig() {
    return fs.readFileSync(path.join(__dirname, 'config.yml'));
}
