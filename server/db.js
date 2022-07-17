const Pool = require("pg").Pool;

const pool = new Pool({
  user: "cheulongsear",
  host: "localhost",
  database: "perntodo",
  password: "hello016",
  port: 5432,
});

module.exports = pool;
