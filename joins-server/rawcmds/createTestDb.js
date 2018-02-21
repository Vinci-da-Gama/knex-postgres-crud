const defInst = require('../db/knex-env');

createDevDatabase();

function createDevDatabase () {
    defInst.raw('CREATE DATABASE "test-joins";')
    .finally(() => {
        defInst.destroy();
    });
}