// Database connection helper für Neon
const { neon } = require('@neondatabase/serverless');

let sql;

function getDb() {
  if (!sql) {
    const connectionString = process.env.DATABASE_URL;
    if (!connectionString) {
      throw new Error('DATABASE_URL environment variable is not set');
    }
    sql = neon(connectionString);
  }
  return sql;
}

module.exports = { getDb };

