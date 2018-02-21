const devInstance = require('../db/knex-env');
const consts = require('../constances/consts');

delProducts(consts.pdtb);

function delProducts (pdTable) {
    devInstance(pdTable).del()
    .then(() => {
        console.log('del products');
    })
    .catch((err) => {
        throw err;
    })
    .finally(() => {
        devInstance.destroy();
    });
}