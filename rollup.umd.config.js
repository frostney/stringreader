import config from './rollup.config';

config.format = 'umd';
config.dest = 'dist/umd/stringreader.js';
config.moduleName = 'StringReader';

export default config;
