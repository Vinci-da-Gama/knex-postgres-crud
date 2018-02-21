const defInst = require('../server/db/knex-env');
const dbConst = require('../consts/dbs');

createDevDatabase();

function createDevDatabase () {
    defInst.raw('CREATE DATABASE '+dbConst.tdb+';')
    .finally(() => {
        defInst.destroy();
    });
}
