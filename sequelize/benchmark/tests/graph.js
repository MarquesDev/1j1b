var pg = require('./../utils/native');
var sequelize = require('./../models');
var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

// add tests
suite
.add('Native#SELECT', {
  'defer': true,
  fn     : function (deferred) {
    pg.connect(function (err, client, done) {
      if (err) throw err;

      client.query('SELECT * from "user"', function (err, result) {
        done(err);
        if (err) throw err;
        deferred.resolve();
      });
    })
  }
})
.add('Sequelize#SELECT', {
  'defer': true,
  fn     : function (deferred) {
    sequelize
    .user.findAll()
    .then(function () {
      deferred.resolve();
    })
    .catch(function (err) {
      throw err;
    })
  }
})
// add listeners
.on('cycle', function (event) {
  console.log(String(event.target));
})
.on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run({ 'async': false });