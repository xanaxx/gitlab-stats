import { getConfig } from './services/configReader';

const config = getConfig();

export const API_TOKEN = config.API_TOKEN;
export const ADDRESS = config.ADDRESS;
export const PORT = config.PORT;
