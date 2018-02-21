// Update with your config settings.
// host: collin.lifeiq.io -- UserName: mobecomdevops
// psql -h collin.lifeiq.io -U mobecomdevops
// M0bec0m17

module.exports = {

	development: {
		client: 'pg',
		connection: {
			host: 'collin.lifeiq.io',
			user: 'mobecomdevops',
			password: 'M0bec0m17',
			database: 'cjs-web-store'
		},
		pool: {
			min: 0,
			max: 7
		}
	},
	test: {
		client: 'pg',
		connection: {
			host: 'collin.lifeiq.io',
			user: 'mobecomdevops',
			password: 'M0bec0m17',
			database: 'test-cjs-web-store'
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
