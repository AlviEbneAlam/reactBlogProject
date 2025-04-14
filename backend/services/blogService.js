const blogRepository = require('../repositories/blogRepository');

class BlogService {
  async getAllBlogs() {
    return blogRepository.findAll();
  }

  async getBlogById(id) {
    return blogRepository.findById(id);
  }

  async getBlogsByAuthor(author) {
    return blogRepository.findByAuthor(author);
  }

  async createBlog(data) {
    return blogRepository.create(data);
  }

  async updateBlog(id, data) {
    return blogRepository.update(id, data);
  }

  async deleteBlog(id) {
    await blogRepository.delete(id);
  }
}

module.exports = new BlogService();