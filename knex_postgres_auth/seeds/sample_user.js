const bcrypt = require('bcryptjs');
const dbConst = require('../src/consts/dbs');
const initUser = require('../initData/initusers');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex(dbConst.ut).del()
    .then(() => {
      /* return Promise.all([
        knex('table_name').insert({id: 1, colName: 'rowValue1'}),
        knex('table_name').insert({id: 2, colName: 'rowValue2'}),
        knex('table_name').insert({id: 3, colName: 'rowValue3'})
      ]); */
      const salt = bcrypt.genSaltSync();
      const hash0 = bcrypt.hashSync('abc', salt);
      const hash1 = bcrypt.hashSync('a', salt);
      const testUser = [{
        username: 'j',
        password: hash0
      }, {
        username: 'kelly',
        password: hash1,
        isAdmin: true
      }];
      return Promise.join(knex(dbConst.ut).insert(testUser));
    });
};
