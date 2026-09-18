const pool = require('./pool');

// Read

exports.getAllMessages = async () => {
  const sql = `
    SELECT * FROM messages;
  `;
  const { rows } = await pool.query(sql);

  return rows;
};

exports.getMessage = async (id) => {
  const sql = `
    SELECT * FROM messages
    WHERE id = $1;
  `;
  const { rows } = await pool.query(sql, [id]);

  return rows[0];
};
