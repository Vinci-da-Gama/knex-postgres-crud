const consts = require('../consts/consts');
const t1Seed = require('../initData/tb1');
const t2Seed = require('../initData/tb2');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex(consts.tb1).del()
    .then(function() {
		// Inserts seed entries
		return knex(consts.tb1).insert(t1Seed);
    })
    .then(res => {
		console.log("11 -- ", res);
		return knex(consts.tb2).insert(t2Seed);
	})
	.then(() => {
		console.log('17 -- insert 2 seeds to 2 tables.');
	})
    .catch(err => {
      	throw err;
    });
};
