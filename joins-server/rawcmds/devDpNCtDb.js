const defInst = require('../db/knex-env');
const consts = require('../consts/consts');

devDropNCteateDb();

function devDropNCteateDb () {
    defInst.raw('drop database '+consts.db+';')
    .then(() => {
        console.log('drop database');
        return defInst.raw('create database '+consts.db+';');
    })
    .then(() => {
        console.log('Create dev db');
    })
    .catch((err) => {
        throw err;
    })
    .finally(() => {
        defInst.destroy();
    });
}