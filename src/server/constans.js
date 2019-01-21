import { getConfig } from './services/configReader';

const config = getConfig();
console.log('CONFIG ', config);

export const API_TOKEN = config.API_TOKEN1;
export const ADDRESS = config.ADDRESS;
export const PORT = config.PORT;
