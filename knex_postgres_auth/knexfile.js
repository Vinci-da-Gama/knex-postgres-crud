const dbCont = require('./src/consts/dbs');
module.exports = {
	conn: {
		client: 'pg',
		connection: {
			host: 'dev.mobecom.co',
			user: 'mobecomdevops',
			password: 'M0bec0m17',
			database: dbCont.defdb,
			timezone: 'UTC',
			dateStrings: true
		},
		pool: {
			min: 1,
			max: 7
		}
	},
	development: {
		client: 'pg',
		connection: {
			host: 'dev.mobecom.co',
			user: 'mobecomdevops',
			password: 'M0bec0m17',
			database: dbCont.db,
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
			host: 'dev.mobecom.co',
			user: 'mobecomdevops',
			password: 'M0bec0m17',
			database: dbCont.tdb,
			timezone: 'UTC',
			dateStrings: true
		}
	},
	production: {
		client: 'pg',
		connection: process.env.DATABASE_URL
	}
};
