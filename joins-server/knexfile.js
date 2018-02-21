const consts = require('./consts/consts');

// Update with your config settings.

module.exports = {
  conn: {
    client: "pg",
    connection: {
      host: "collin.lifeiq.io",
      user: "mobecomdevops",
      password: "M0bec0m17",
      database: consts.defdb,
      timezone: "UTC",
      dateStrings: true
    },
    pool: {
      min: 1,
      max: 7
    }
  },
  development: {
    client: "pg",
    connection: {
      host: "collin.lifeiq.io",
      user: "mobecomdevops",
      password: "M0bec0m17",
      database: consts.db,
      timezone: "UTC",
      dateStrings: true
    },
    pool: {
      min: 1,
      max: 7
    }
  },
  test: {
    client: "pg",
    connection: {
      host: "collin.lifeiq.io",
      user: "mobecomdevops",
      password: "M0bec0m17",
      database: consts.tdb,
      timezone: "UTC",
      dateStrings: true
    }
  },
  production: {
    client: "pg",
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
