const knex = require('knex');
const config = require('../knexfile');
const envDev = 'development';
const envConfigDev = config[envDev];
const devInstance = knex(envConfigDev);

dropDb();

function dropDb() {
    devInstance.raw('drop database \"test\-cjs\-web\-store\"\;')
    .then(() => {
        console.log('drop db.');
        return devInstance.raw('create database \"test\-cjs\-web\-store\"\;');
    })
    .then((res) => {
        console.log('create db -- ', res);
    })
    .catch((err) => {
        console.log('19 -- : ', err);
    })
    .finally(() => {
        devInstance.destroy();
    });
    /* connection.schema.createTable('sticker')
    .then(() => {
        console.log('haha');
    }); */
    /* connection.migrate.latest()
    .then((res) => {
        connection.seed.run();
    }); */
    /* connection.schema.hasTable('sticker')
    .then(() => {
    }); */

    /* connection.schema.dropTableIfExists('sticker')
    .then(() => {
        return connection.migrate.latest();
    })
    .then((res) => {
        console.log('28 -- ', res);
        res.seed.run();
    }); */

    /* devInstance.schema.hasTable('sticker')
    .then((exists) => {
        if (exists) {
            console.log(exists);
            return connTest.raw('drop database \"test\-cjs\-web\-store\"\;');
        } else {
            return connTest.raw('create database \"test\-cjs\-web\-store\"\;');
        }
    })
    .then((res) => {
        console.log('34 - ', res);
    }); */
};