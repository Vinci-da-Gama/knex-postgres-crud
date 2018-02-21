const defInstance = require('../db/knex-env');

devDpNCtDb();

function devDpNCtDb () {
    defInstance.raw('drop database "ppd";')
    .then(() => {
        console.log('Drop Database.');
        return defInstance.raw('create database "ppd";');
    })
    .then(() => {
        console.log('Create db: ppd');
    })
    .catch((err) => {
        throw err;
    })
    .finally(() => {
        defInstance.destroy();
    });
}