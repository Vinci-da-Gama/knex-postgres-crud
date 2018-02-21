const devInstance = require('../db/knex-env');
const consts = require('../constances/consts');

delDataByTableName(consts.ptb);

function delDataByTableName (personsTable) {
    devInstance(personsTable).del()
    .then((res) => {
        console.log('9 -- res: ', res);
    })
    .catch((err) => {
        throw err;
    })
    .finally(() => {
        devInstance.destroy();
    });
}