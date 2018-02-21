const consts = require('../constances/consts');

exports.up = function (knex, Promise) {
	return knex.schema.createTable(consts.ptb, (t) => {
		t.increments('pId').unique().primary();
		t.text('fn');
		t.string('ln', 30);
		t.date('dob');
		t.text('email');
		t.string('phone', 120);
		t.timestamp('createdAt').notNullable().defaultTo(knex.raw('now()'));
		t.timestamp('updatedAt').notNullable().defaultTo(knex.raw('now()'));
    })
    .createTable(consts.pdtb, (tb) => {
        tb.increments('pdId').unique().primary();
        tb.text('name');
        tb.text('price');
        tb.date('produceDate');
        tb.timestamp('createdAt').notNullable().defaultTo(knex.raw('now()'));
        tb.timestamp('updatedAt').notNullable().defaultTo(knex.raw('now()'));
        tb.integer('pId').unsigned().notNullable().references('pId').inTable(consts.ptb);
    });
};

exports.down = function (knex, Promise) {
	return knex.schema.dropTable(consts.pdtb).dropTable(consts.ptb);
};
