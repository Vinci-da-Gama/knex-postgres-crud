const dbCont = require('../src/consts/dbs');

exports.up = function(knex, Promise) {
    // createTableIfNotExists
    return knex.schema.createTable(dbCont.ut, (t) => {
        t.increments(dbCont.utpk).unique().primary();
        t.string('username', 50).unique().notNullable();
        t.string('password').unique().notNullable();
        t.boolean('isAdmin').notNullable().defaultTo(false);
        t.timestamp('createdAt').notNullable().defaultTo(knex.fn.now());
		t.timestamp('updatedAt').notNullable().defaultTo(knex.fn.now());
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable(dbCont.ut);
};
