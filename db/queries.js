const pool = require('./pool');

// Read

exports.getAllMessages = async () => {
  const sql = `
    SELECT * FROM messages
  `;
  const { rows } = await pool.query(sql);

  return rows;
};
