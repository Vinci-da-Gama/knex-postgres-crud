const knex = require('knex');
const envConsts = require('../consts/envs');
const environment = process.env.NODE_ENV || envConsts.dev;
const config = require('../knexfile');
const configEnv = config[environment];
const instance = knex(configEnv);

console.log('8 -- ', configEnv);

module.exports = instance;