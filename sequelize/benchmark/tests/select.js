var pg        = require('./../utils/pg');
var sequelize = require('./../models');
var bookshelf = require('./../utils/bookshelf');
var knex      = require('./../utils/knex');
var Benchmark = require('benchmark');
var suite     = new Benchmark.Suite;

suite
  .add('Postgres#SELECT', {
    'defer'   : true,
    fn        : function (deferred) {
      pg.connect(function (err, client, done) {
        if (err) throw err;

        client.query('SELECT * from "user" WHERE age <= 70 AND age >= 20', function (err, result) {
          done(err);
          if (err) throw err;
          deferred.resolve();
        });
      })
    },
    onComplete: function () {
      pg.end();
    }
  })
  .add('Sequelize#Model#SELECT', {
    'defer': true,
    fn     : function (deferred) {
      sequelize
        .user.findAll({
        where: {
          age: {
            $gte: 20,
            $lte: 70
          }
        }
      })
        .then(function (users) {
          deferred.resolve();
        })
        .catch(function (err) {
          throw err;
        })
    }
  })
  .add('Sequelize#Raw#SELECT', {
    'defer': true,
    fn     : function (deferred) {
      sequelize.sequelize.query('SELECT * from "user" WHERE age <= 70 AND age >= 20', { type: sequelize.sequelize.QueryTypes.SELECT })
        .then(function (users) {
          deferred.resolve();
        })
        .catch(function (err) {
          throw err;
        })
    }
  })
  .add('Bookshelf#SELECT', {
    'defer': true,
    fn     : function (deferred) {
      bookshelf
        .user
        .where('age', '>=', '20')
        .where('age', '<=', '70')
        .fetchAll()
        .then(function (user) {
          deferred.resolve();
        })
        .catch(function (err) {
          throw err;
        });
    }
  })
  .add('Knex#SELECT', {
    'defer': true,
    fn     : function (deferred) {
      knex.select('*')
        .from('user')
        .where(function () {
          this.where('age', '>=', '20').where('age', '<=', '70')
        })
        .then(function (rows) {
          deferred.resolve();
        })
        .catch(function (error) { throw error});
    }
  })
  .on('cycle', function (event) {
    console.log(String(event.target));
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
    process.exit();
  })
  .run({ 'async': false });