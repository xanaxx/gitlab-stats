import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export function getConfig() {
    return yaml.safeLoad(fs.readFileSync(path.join(__dirname, 'config', 'config.yml')));
}
