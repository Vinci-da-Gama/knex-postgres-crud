const knexConn = require('./knex-env');
const consts = require('../consts/consts');

module.exports = {
    getAll () {
        return knexConn(consts.recipes);
    },
    getOne(objId) {
        return knexConn(consts.recipes).where('id', objId).first();
    },
    createRecipe(newRecipe) {
        return knexConn(consts.recipes).insert(newRecipe, '*');
    },
    updateRecipe(objId, recipe) {
        return knexConn(consts.recipes).where('id', objId).update(recipe, '*');
    },
    deleteById(objId) {
        return knexConn(consts.recipes).where('id', objId).del();
    }
};