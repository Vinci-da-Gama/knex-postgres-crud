const defInst = require('../db/knex-env');
const consts = require('../consts/consts');

createDevDatabase();

function createDevDatabase () {
    defInst.raw('CREATE DATABASE '+consts.db+';')
    .finally(() => {
        defInst.destroy();
    });
}