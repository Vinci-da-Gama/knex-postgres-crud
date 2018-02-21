const knex = require('knex');
const config = require('../knexfile');
const envDev = 'development';
const envConfigDev = config[envDev];
const devInstance = knex(envConfigDev);

dropThenCreateDb();

function dropThenCreateDb() {
    devInstance.raw('drop database \"test\-recipes\-collection\"\;')
    .then(() => {
        console.log('drop db.');
        return devInstance.raw('create database \"test\-recipes\-collection\"\;');
    })
    .then((res) => {
        console.log('create db -- ', res);
    })
    .catch((err) => {
        console.log('19 -- : ', err);
    })
    .finally(() => {
        devInstance.destroy();
    });
};