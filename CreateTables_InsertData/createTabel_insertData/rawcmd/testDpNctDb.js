const defInstance = require('../db/knex-env');

devDpNCtDb();

function devDpNCtDb () {
    defInstance.raw('drop database "test-persons-collection";')
    .then(() => {
        console.log('Drop Database.');
        return defInstance.raw('create database "test-persons-collection";');
    })
    .then(() => {
        console.log('Create db: test-persons-collection');
    })
    .catch((err) => {
        throw err;
    })
    .finally(() => {
        defInstance.destroy();
    });
}