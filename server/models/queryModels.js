const { Pool } = require('pg');

const PG_URI =
  // this will need to change to something local
  'postgres://fijaxqtj:WO5xTwVyLm45kWLk0SAhi2XBYEf_4az-@suleiman.db.elephantsql.com:5432/fijaxqtj';

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    // console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
