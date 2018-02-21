const knex = require('knex');
const config = require('../knexfile');
const envTest = 'test';
const envConfigDev = config[envTest];
const testInstance = knex(envConfigDev);

dropThenCreateDb();

function dropThenCreateDb() {
    testInstance.raw('drop database \"recipes\-collection\"\;')
    .then(() => {
        console.log('drop db.');
        return testInstance.raw('create database \"recipes\-collection\"\;');
    })
    .then((res) => {
        console.log('create db -- ', res);
    })
    .catch((err) => {
        console.log('19 -- : ', err);
    })
    .finally(() => {
        testInstance.destroy();
    });
};