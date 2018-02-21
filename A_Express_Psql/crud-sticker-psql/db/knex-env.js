const knex = require('knex');
const config = require('../knexfile');
const environment = process.env.NODE_ENV || 'development';
const envConfig = config[environment];
const connection = knex(envConfig);
console.log('6 -- current environment: ', environment);
console.log('7 -- db: ', envConfig);

module.exports = connection;
