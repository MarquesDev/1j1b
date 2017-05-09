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

var bookshelf = require('bookshelf')(knex);

var User = bookshelf.Model.extend({
  tableName: 'user'
});

module.exports = {
  user: User
};