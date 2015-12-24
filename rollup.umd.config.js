import config from './rollup.config';

config.format = 'umd';
config.dest = 'umd/stringreader.js';
config.moduleName = 'StringReader';

export default config;
