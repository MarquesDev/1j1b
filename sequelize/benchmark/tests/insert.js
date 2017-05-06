var pg        = require('./../utils/pg');
var native    = require('./../utils/native');
var sequelize = require('./../models');
var Benchmark = require('benchmark');
var suite     = new Benchmark.Suite;

suite
  .add('Sequelize#Model#SELECT', {
    'defer': true,
    fn     : function (deferred) {
      sequelize
        .motel.bulkCreate({
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
  .on('cycle', function (event) {
    console.log(String(event.target));
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  .run({ 'async': false });