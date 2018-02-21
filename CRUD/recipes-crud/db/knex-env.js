const knex = require('knex');
const environment = process.env.NODE_ENV || 'development';
const config = require('../knexfile');
const configEnv = config[environment];
const connection = knex(configEnv);

console.log('7 -- : ', configEnv);

module.exports = connection;