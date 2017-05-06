var knex = require('knex')({
  client    : 'postgres',
  connection: {
    host    : '127.0.0.1',
    user    : 'postgres',
    password: 'root',
    database: 'postgres',
    charset : 'utf8'
  }
});

module.exports = knex;