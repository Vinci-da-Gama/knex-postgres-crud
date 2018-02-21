const defInst = require('../server/db/knex-env');
const dbs = require('../consts/dbs');

createDevDatabase();

function createDevDatabase () {
    defInst.raw('CREATE DATABASE '+dbs.db+';')
    .finally(() => {
        defInst.destroy();
    });
}
