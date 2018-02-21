const consts = require('../constances/consts');
const defInstance = require('../db/knex-env');

createTestDb();

function createTestDb () {
    defInstance.raw('CREATE DATABASE "test-persons-collection";')
    .finally(() => {
        defInstance.destroy();
    });
}