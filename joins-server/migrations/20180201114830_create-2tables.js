const consts = require('../consts/consts');

exports.up = function(knex, Promise) {
    return knex.schema.createTable(consts.tb1, (t) => {
        t.increments(consts.j1).primary().unique();
        t.string('name', 20);
        t.integer('qty');
        t.timestamp('createdAt').notNullable().defaultTo(knex.fn.now());
        t.timestamp('updatedAt').notNullable().defaultTo(knex.fn.now());
    })
    .createTable(consts.tb2, (t) => {
        t.increments(consts.j2).primary().unique();
        t.date('date');
        t.string('phone', 30)
        t.integer(consts.j1).unsigned().notNullable().references(consts.j1).inTable(consts.tb1);
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable(consts.tb2).dropTable(consts.tb1);
};
