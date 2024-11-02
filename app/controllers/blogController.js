// Create Route
const createBlog = (req, res) => {
  res.status(200).json({ message: "Blog created successfully" });
};

// Read Route
const readBlog = (req, res) => {
  res.status(200).json({ message: "Blog read successfully" });
};

// Update Route
const updateBlog = (req, res) => {
  res.status(200).json({ message: "Blog update successfully" });
};

// Delete Route
const deleteBlog = (req, res) => {
  res.status(200).json({ message: "Blog detele successfully" });
};

// exports all routes
module.exports = { createBlog, readBlog, updateBlog, deleteBlog };
