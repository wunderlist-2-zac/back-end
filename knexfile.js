// Update with your config settings.
require('dotenv').config();

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: process.env.DATABASE,
      user:     process.env.DBUSER,
      password: process.env.DBPASS
    },
    migrations:{
      tableName: 'knex_migrations',
      directory: './database/migrations'
    },
    pool: {
      min: process.env.DATABASE_POOL_MIN,
      max: process.env.DATABASE_POOL_MAX,
    },
    seeds: {
      directory: './database/seeds',
    }
  },

  staging: {
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
      host:     process.env.HOST,
      database: process.env.DATABASE,
      user:     process.env.DBUSER,
      password: process.env.DBPASS
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './database/migrations'
    }
  }

};
