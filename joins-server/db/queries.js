const consts = require('../consts/consts');
const knexConn = require('../db/knex-env');

module.exports = {
    getCrossJoin () {
        return knexConn.select('*').from(consts.tb1).crossJoin(consts.tb2);
    },
    getInnerJoin () {
        return knexConn.from(consts.tb1).innerJoin(consts.tb2, 'join-one.j1Id', 'join-2.j1Id');
    },
    getLeftJoin () {
        return knexConn.select('*').from(consts.tb1).leftJoin(consts.tb2, 'join-one.j1Id', 'join-2.j1Id');
    },
    getLeftOuterJoin () {
        return knexConn.select('*').from(consts.tb1).leftOuterJoin(consts.tb2, 'join-one.j1Id', 'join-2.j1Id');
    },
    getRightJoin () {
        return knexConn.select('*').from(consts.tb1).rightJoin(consts.tb2, 'join-one.j1Id', 'join-2.j1Id');
    },
    getRightOuterJoin () {
        return knexConn.select('*').from(consts.tb1).rightOuterJoin(consts.tb2, 'join-one.j1Id', 'join-2.j1Id');
    },
    getFullOuterJoin () {
        return knexConn.select('*').from(consts.tb1).fullOuterJoin(consts.tb2, 'join-one.j1Id', 'join-2.j1Id');
    },
    getJoinRaw () {
        return knexConn.select('*').from(consts.tb1).joinRaw('natural full join '+consts.tb2quote).where('j1Id', 1);
    }
}