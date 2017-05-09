var pg = require('./../utils/native');
var sequelize = require('./../models');
var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;
var plot = require('./../utils/plot');

// add tests
suite
.add('Native#SELECT', {
  fn     : function () {
    return 2 + 2
  }
})
// add listeners
.on('cycle', function (event) {
  console.log(event.target);
  console.log(String(event.target));
})
.on('complete', function () {
  plot.plot(this);
})
// run async
.run({ 'async': false });