const knex = require('knex');
const environment = process.env.NODE_ENV || 'development';
const config = require('../../../knexfile');
const configEnv = config[environment];
const instance = knex(configEnv);

console.log('7 -- config-Environment: ', configEnv);

module.exports = instance;
