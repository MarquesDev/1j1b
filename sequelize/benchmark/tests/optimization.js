var pool = require('./utils/native');
var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

// add tests
suite
.add('Native#SELECT', function () {
  pool.connect(function(err, client, done) {
    if(err) return console.error('error fetching client from pool', err);

    client.query('SELECT * from "user"', function(err, result) {
      done(err);
      if(err) return console.error('error running query', err);
    });
  });
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