var pool = require('./../utils/native');

pool.connect(function (err, client, done) {
  if (err) return console.error('error fetching client from pool', err);

  client.query('SELECT * from "user"', function (err, result) {
    console.log(result.rows.length);
    done(err);
    if (err) return console.error('error running query', err);
  });
});