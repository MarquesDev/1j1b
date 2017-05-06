var knex = require('./../utils/knex');

knex.select('*')
  .from('user')
  .where(function() {
    this.where('age', '>=', '20').where('age', '<=', '70')
  })
  .then(function(rows) {
    console.log(rows.length);
  })
  .catch(function(error) { throw error});