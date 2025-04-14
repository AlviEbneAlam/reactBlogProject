const pool = require('../db');

class BlogRepository {
    async findAll() {
      const result = await pool.query('SELECT * FROM react.blogs ORDER BY id');
      return result.rows;
    }
  
    async findById(id) {
      const result = await pool.query('SELECT * FROM react.blogs WHERE id = $1', [id]);
      return result.rows[0];
    }
  
    async findByAuthor(author) {
      const result = await pool.query('SELECT * FROM react.blogs WHERE author = $1', [author]);
      return result.rows;
    }
  
    async create({ title, body, author }) {
      const result = await pool.query(
        'INSERT INTO react.blogs (title, body, author) VALUES ($1, $2, $3) RETURNING *',
        [title, body, author]
      );
      return result.rows[0];
    }
  
    async update(id, { title, body, author }) {
      const result = await pool.query(
        'UPDATE react.blogs SET title = $1, body = $2, author = $3 WHERE id = $4 RETURNING *',
        [title, body, author, id]
      );
      return result.rows[0];
    }
  
    async delete(id) {
      await pool.query('DELETE FROM react.blogs WHERE id = $1', [id]);
    }
  }
  
  module.exports = new BlogRepository();