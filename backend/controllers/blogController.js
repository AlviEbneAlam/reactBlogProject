const blogService = require('../services/blogService');

exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await blogService.getAllBlogs();
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getBlogById = async (req, res) => {
  try {
    const blog = await blogService.getBlogById(req.params.id);
    blog ? res.json(blog) : res.status(404).json({ message: 'Blog not found' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getBlogsByAuthor = async (req, res) => {
  try {
    const blogs = await blogService.getBlogsByAuthor(req.params.author);
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createBlog = async (req, res) => {
  try {
    const blog = await blogService.createBlog(req.body);
    res.status(201).json({errorCode: '00', errorMessage:'Success'});
  } catch (err) {
    res.status(500).json({errorCode: '99', errorMessage:'Failed to create'});
  }
};

exports.updateBlog = async (req, res) => {
  try {
    const blog = await blogService.updateBlog(req.params.id, req.body);
    blog ? res.json(blog) : res.status(404).json({ message: 'Blog not found' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    await blogService.deleteBlog(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
