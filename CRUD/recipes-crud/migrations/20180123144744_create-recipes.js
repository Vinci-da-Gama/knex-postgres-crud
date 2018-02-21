const consts = require('../consts/consts');

exports.up = function (knex, Promise) {
	return knex.schema.createTable(consts.recipes, (table) => {
		table.increments().unique();
		table.string('title');
		table.text('description');
		table.text('image');
		table.text('directions');
		// table.specificType('ingredients', 'TEXT[]');
		table.json('ingredients');
		table.json('nutrition');
		table.timestamp('createdAt').notNullable().defaultTo(knex.raw('now()'));
		table.timestamp('updatedAt').notNullable().defaultTo(knex.raw('now()'));
	});
};

exports.down = function (knex, Promise) {
	return knex.schema.dropTable(consts.recipes);
};


