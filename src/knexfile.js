// Update with your config settings.
require('dotenv/config');

module.exports = {
    client: 'postgres',
    connection: {
      host : process.env.HOST_DB,
      port : process.env.PORT_DB,
      database: process.env.DATABASE_DB,
      user: process.env.USER_DB,
      password: process.env.PASSWORD_DB
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
};
