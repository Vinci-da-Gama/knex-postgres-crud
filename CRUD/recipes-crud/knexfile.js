// Update with your config settings.

/*
psql -h collin.lifeiq.io -U mobecomdevops
M0bec0m17
kelin@csbengage.com
Abcd1234
drop database "recipes-collection";
create database "recipes-collection";
*/

const consts = require('./consts/consts');

module.exports = {

	development: {
		client: 'pg',
		connection: {
			host: 'collin.lifeiq.io',
			user: 'mobecomdevops',
			password: 'M0bec0m17',
			database: consts.rdb,
			timezone: 'UTC',
			dateStrings: true
		},
		pool: {
			min: 1,
			max: 7
		}
	},
	test: {
		client: 'pg',
		connection: {
			host: 'collin.lifeiq.io',
			user: 'mobecomdevops',
			password: 'M0bec0m17',
			database: consts.trdb,
			timezone: 'UTC',
			dateStrings: true
		}
	},
	production: {
		client: 'pg',
		connection: process.env.DATABASE_URL
	}

	/* staging: {
		client: 'postgresql',
		connection: {
			database: 'my_db',
			user:     'username',
			password: 'password'
		},
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			tableName: 'knex_migrations'
		}
	},
  
	production: {
		client: 'postgresql',
		connection: {
			database: 'my_db',
			user:     'username',
			password: 'password'
		},
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			tableName: 'knex_migrations'
		}
	} */

};
