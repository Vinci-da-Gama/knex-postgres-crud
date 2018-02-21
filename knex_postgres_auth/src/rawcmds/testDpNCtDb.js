const defInst = require('../server/db/knex-env');
const dbConst = require('../consts/dbs');

devDropNCteateDb();

function devDropNCteateDb () {
    defInst.raw('drop database '+dbConst.tdb+';')
    .then(() => {
        console.log('drop test database');
        return defInst.raw('create database '+dbConst.tdb+';');
    })
    .then(() => {
        console.log('Create test db');
    })
    .catch((err) => {
        throw err;
    })
    .finally(() => {
        defInst.destroy();
    });
}
