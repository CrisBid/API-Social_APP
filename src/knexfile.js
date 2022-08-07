// Update with your config settings.
const dotenv = require('dotenv');
const path = require ('path');
dotenv.config({ path: path.join(__dirname + '../../.env') });

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
