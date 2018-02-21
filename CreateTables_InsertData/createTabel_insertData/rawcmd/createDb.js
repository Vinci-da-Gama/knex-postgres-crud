const consts = require('../constances/consts');
const defInstance = require('../db/knex-env');

createDevDb();

function createDevDb () {
    defInstance.raw('CREATE DATABASE "ppd";')
    /* .then((res) => {
        console.log('Create? ', res.command);
    })
    .catch((err) => {
        throw err;
    }) */
    .finally(() => {
        defInstance.destroy();
    });
}