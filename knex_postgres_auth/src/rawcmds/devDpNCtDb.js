const defInst = require('../server/db/knex-env');
const dbConst = require('../consts/dbs');

devDropNCteateDb();

function devDropNCteateDb () {
    defInst.raw('drop database '+dbConst.db+';')
    .then(() => {
        console.log('drop database');
        return defInst.raw('create database '+dbConst.db+';');
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
