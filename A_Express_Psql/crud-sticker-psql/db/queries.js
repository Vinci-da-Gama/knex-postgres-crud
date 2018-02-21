// init connection.
const knexConn = require('./knex-env');

module.exports = {
    getAll() {
        return knexConn('sticker');
    },
    getOneById(currId) {
        return knexConn('sticker').where('id', currId).first();
    },
    createSticker(newSticker) {
        return knexConn('sticker').insert(newSticker, '*');
    },
    updateSticker(id, sticker) {
        return knexConn('sticker').where('id', id).update(sticker, '*');
    },
    deleteById(id) {
        return knexConn('sticker').where('id', id).del();
    }
};