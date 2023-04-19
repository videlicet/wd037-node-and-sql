import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({ connectionString: process.env.PGURI });

const db = {
  query(text, params) {
    return pool.query(text, params);
  }
};

export default db;
