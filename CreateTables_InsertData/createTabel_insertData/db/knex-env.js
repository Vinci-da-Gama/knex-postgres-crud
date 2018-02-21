const knex = require('knex');
const config = require('../knexfile');
const environment = process.env.NODE_ENV || 'development';
const configEnv = config[environment];
const instance = knex(configEnv);

console.log('7 -- : ', configEnv);

module.exports = instance;