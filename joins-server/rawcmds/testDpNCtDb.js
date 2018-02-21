const defInst = require('../db/knex-env');

devDropNCteateDb();

function devDropNCteateDb () {
    defInst.raw('drop database "test\-joins";')
    .then(() => {
        console.log('drop database');
        return defInst.raw('create database "test\-joins";');
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