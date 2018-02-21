const devInstance = require('../db/knex-env');
const consts = require('../constances/consts');

insertForeignKeys();

function insertForeignKeys() {
    devInstance.select('pId').from('persons')
    .then(() => {
        // console.log('10 -- ', pdFile);
        const pdFile = new File(bits, name[, options]);
    });
    /* .then((res) => {
        return devInstance(consts.pdtb).insert(res).returning('*');
    })
    .then((fkIds) => {
        console.log('12 -- ', fkIds);
    })
    .catch((err) => {
        throw err;
    })
    .finally(() => {
        devInstance.destroy();
    }); */
}